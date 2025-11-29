// oauth.js
import { google } from "googleapis";
import fs from "fs";

const TOKEN_PATH = "./token.json";

export const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

export function getAuthUrl() {
    return oauth2Client.generateAuthUrl({
        access_type: "offline",
        prompt: "consent", // WAJIB supaya refresh_token keluar
        scope: ["https://www.googleapis.com/auth/drive.file"],
    });
}

export function loadSavedToken() {
    if (fs.existsSync(TOKEN_PATH)) {
        const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
        oauth2Client.setCredentials(token);
        console.log("Token loaded!");
        return true;
    }
    return false;
}

export async function saveToken(code) {
    const { tokens } = await oauth2Client.getToken(code);

    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    console.log("Refresh token saved:", tokens);

    oauth2Client.setCredentials(tokens);
}
