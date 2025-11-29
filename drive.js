// drive.js
import { google } from "googleapis";
import stream from "stream";
import { oauth2Client } from "./oauth.js";

export async function uploadToDrive(buffer, filename, folderId) {
    const drive = google.drive({ version: "v3", auth: oauth2Client });

    const res = await drive.files.create({
        requestBody: {
            name: filename,
            parents: [folderId],
        },
        media: {
            mimeType: "image/png",
            body: bufferToStream(buffer),
        },
        fields: "id",
    });

    return res.data.id;
}

function bufferToStream(buffer) {
    const duplex = new stream.PassThrough();
    duplex.end(buffer);
    return duplex;
}
