import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

  // --- ambil raw response ---
  const result = await ai.models.list();

  console.log("=== RAW RESPONSE ===");
  console.log(JSON.stringify(result, null, 2));

  // --- cari field yang berisi array model ---
  let models = null;

  if (Array.isArray(result)) {
    // jika respons langsung berupa array
    models = result;
  } else if (Array.isArray(result.models)) {
    // SDK lama
    models = result.models;
  } else {
    // cari array pertama yang berisi objek model
    for (const key of Object.keys(result)) {
      if (Array.isArray(result[key]) && result[key].length > 0) {
        if (result[key][0].name) {
          models = result[key];
          break;
        }
      }
    }
  }

  if (!models) {
    console.error("❌ Tidak menemukan list model di response.");
    return;
  }

  console.log("\n=== LIST MODEL ===");
  for (const m of models) {
    console.log(
      `${m.name}  |  supported: ${
        m.supportedMethods ? m.supportedMethods.join(", ") : "unknown"
      }`
    );
  }
}

main();
