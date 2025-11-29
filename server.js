import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import sharp from "sharp";

import { uploadToDrive } from "./drive.js";
import { getAuthUrl, saveToken } from "./oauth.js"; // ← cukup ini saja

dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));

console.log("Loaded API Key:", process.env.GOOGLE_API_KEY?.slice(0, 10) + "...");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

// Create /output folder if missing
const outputDir = path.join(process.cwd(), "output");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// ---------------------------------
// LOGIN OAUTH GOOGLE
// ---------------------------------
app.get("/login", (req, res) => {
  res.redirect(getAuthUrl());
});

app.get("/auth/google", (req, res) => {
  res.redirect(getAuthUrl());
});

// Google redirect → save token
app.get("/oauth2callback", async (req, res) => {
  try {
    const code = req.query.code;
    await saveToken(code);

    res.send("Login berhasil! Token OAuth tersimpan 😎");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error during OAuth");
  }
});

// ---------------------------------
// POST /generate
// ---------------------------------
app.post("/generate", async (req, res) => {
  try {
    const { prompt, image, theme } = req.body;

    if (!image) return res.status(400).json({ error: "Image missing" });
    if (!prompt) return res.status(400).json({ error: "Prompt missing" });

    const contents = [
      { text: prompt },
      {
        inlineData: {
          mimeType: "image/png",
          data: image,
        },
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents,
    });

    let resultBase64 = null;
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData?.data) resultBase64 = part.inlineData.data;
    }

    if (!resultBase64) return res.status(500).json({ error: "AI returned no image" });

    const sourceBuffer = Buffer.from(resultBase64, "base64");

    // Resize if needed
    let finalBuffer =
      theme === "group"
        ? sourceBuffer
        : await sharp(sourceBuffer)
            .resize(768, 1344, {
              fit: "contain",
              background: { r: 0, g: 0, b: 0, alpha: 1 },
            })
            .png()
            .toBuffer();

    const filename = `output_${Date.now()}.png`;
    const filepath = path.join(outputDir, filename);

    fs.writeFileSync(filepath, finalBuffer);
    console.log("Saved image →", filepath);

    let driveFileId = null;
    try {
      driveFileId = await uploadToDrive(finalBuffer, filename, process.env.GOOGLE_DRIVE_FOLDER_ID);
    } catch (err) {
      console.error("UPLOAD DRIVE FAILED:", err);
    }

    res.json({
      ok: true,
      filename,
      driveFileId,
      driveUrl: driveFileId ? `https://drive.google.com/uc?id=${driveFileId}` : null,
      image: finalBuffer.toString("base64"),
    });
  } catch (err) {
    console.error("GEN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running → http://localhost:3000"));
