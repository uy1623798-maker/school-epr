import prisma from "../config/prisma";

export async function generateTCNumber() {

    const year = new Date().getFullYear();

    const count =
        await prisma.transferCertificate.count();

    const number =
        String(count + 1).padStart(4, "0");

    return `WTF/TC/${year}/${number}`;

}