import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import sharp from "sharp";

dotenv.config();

const app = express();

// JSON parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Public folder
app.use(express.static("public"));

console.log(
  "Loaded API Key:",
  process.env.GOOGLE_API_KEY?.slice(0, 10) + "..."
);

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

// Buat folder output jika belum ada
const outputDir = path.join(process.cwd(), "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
  console.log("Created output/ folder");
}

// ---------------------------------
//           POST /generate
// ---------------------------------
app.post("/generate", async (req, res) => {
  try {
    console.log("Body received:", Object.keys(req.body));

    const { prompt, image, theme } = req.body;

    if (!image) return res.status(400).json({ error: "Image missing" });
    if (!prompt) return res.status(400).json({ error: "Prompt missing" });

    const contents = [
      { text: prompt },
      {
        inlineData: {
          mimeType: "image/png",
          data: image, // base64 input
        },
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents,
    });

    let resultBase64 = null;

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData?.data) {
        resultBase64 = part.inlineData.data;
      }
    }

    if (!resultBase64)
      return res.status(500).json({ error: "AI returned no image" });

    let finalBuffer;
    let finalBase64;
    const sourceBuffer = Buffer.from(resultBase64, "base64");

    if (theme === "group") {
      // untuk group, jangan paksa 9:16 – pakai ukuran asli dari model
      finalBuffer = sourceBuffer;
      finalBase64 = resultBase64;
    } else {
      // ----------------------------
      //  FORMAT TO 9:16 PORTRAIT
      // ----------------------------
      const TARGET_WIDTH = 768;
      const TARGET_HEIGHT = 1344;

      finalBuffer = await sharp(sourceBuffer)
        .resize(TARGET_WIDTH, TARGET_HEIGHT, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 1 },
        })
        .png()
        .toBuffer();

      finalBase64 = finalBuffer.toString("base64");
    }

    // ----------------------------
    //  SAVE IMAGE TO OUTPUT FOLDER
    // ----------------------------
    const filename = `output_${Date.now()}.png`;
    const filepath = path.join(outputDir, filename);

    fs.writeFileSync(filepath, finalBuffer);
    console.log("Saved image →", filepath);

    // Return response ke frontend
    return res.json({
      ok: true,
      filename,
      path: "/output/" + filename, // bisa dipakai untuk load langsung
      image: finalBase64,
    });
  } catch (err) {
    console.error("GEN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running → http://localhost:3000"));
