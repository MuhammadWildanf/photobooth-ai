import { google } from "googleapis";
import { Readable } from "stream";

export async function uploadToDrive(auth, buffer, fileName) {
  const drive = google.drive({ version: "v3", auth });

  // Convert buffer → readable stream
  const bufferStream = new Readable();
  bufferStream.push(buffer);
  bufferStream.push(null);

  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    },
    media: {
      mimeType: "image/png",
      body: bufferStream, // ← stream, bukan buffer
    },
    fields: "id",
  });

  return response.data.id;
}
