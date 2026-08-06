-- CreateEnum
CREATE TYPE "public"."TCStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'GENERATED');

-- CreateEnum
CREATE TYPE "public"."TCReason" AS ENUM ('TRANSFER', 'PASSED_OUT', 'PARENT_REQUEST', 'DISCIPLINARY', 'OTHER');

-- CreateTable
CREATE TABLE "public"."TransferCertificate" (
    "id" TEXT NOT NULL,
    "tcNumber" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "reason" "public"."TCReason" NOT NULL,
    "description" TEXT,
    "status" "public"."TCStatus" NOT NULL DEFAULT 'PENDING',
    "documentUrl" TEXT,
    "pdfUrl" TEXT,
    "qrCode" TEXT,
    "remarks" TEXT,
    "approvedBy" TEXT,
    "approvedAt" TIMESTAMP(3),
    "generatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransferCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransferCertificate_tcNumber_key" ON "public"."TransferCertificate"("tcNumber");

-- AddForeignKey
ALTER TABLE "public"."TransferCertificate" ADD CONSTRAINT "TransferCertificate_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TransferCertificate" ADD CONSTRAINT "TransferCertificate_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TransferCertificate" ADD CONSTRAINT "TransferCertificate_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
