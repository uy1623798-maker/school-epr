import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export async function generateTCPDF(tc: any) {

    const uploadDir = path.join(process.cwd(), "uploads", "tc");

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const pdfPath = path.join(uploadDir, `${tc.tcNumber}.pdf`);

    const doc = new PDFDocument();

    const stream = fs.createWriteStream(pdfPath);

    doc.pipe(stream);

    doc.fontSize(22).text("TRANSFER CERTIFICATE", {
        align: "center"
    });

    doc.moveDown();

    doc.fontSize(12);

    doc.text(`TC Number : ${tc.tcNumber}`);
    doc.text(`Student : ${tc.student.firstName} ${tc.student.lastName}`);
    doc.text(`Reason : ${tc.reason}`);
    doc.text(`Status : ${tc.status}`);
    doc.text(`Generated : ${new Date().toLocaleDateString()}`);

    doc.moveDown();

    doc.text("This is a computer generated Transfer Certificate.");

    doc.end();

    return new Promise<string>((resolve) => {

        stream.on("finish", () => {

            resolve(pdfPath);

        });

    });

}