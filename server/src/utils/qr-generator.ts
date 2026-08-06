import QRCode from "qrcode";
import fs from "fs";
import path from "path";

export async function generateQRCode(id: string) {

    const folder = path.join(process.cwd(), "uploads", "qr");

    if (!fs.existsSync(folder)) {

        fs.mkdirSync(folder, { recursive: true });

    }

    const qrPath = path.join(folder, `${id}.png`);

    await QRCode.toFile(

        qrPath,

        `http://localhost:5000/api/v1/tc/verify/${id}`

    );

    return qrPath;

}