/*
  Warnings:

  - You are about to drop the column `photo` on the `Student` table. All the data in the column will be lost.
  - Made the column `sectionId` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `classId` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_classId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_sectionId_fkey";

-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "photo",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "tcFile" TEXT,
ALTER COLUMN "sectionId" SET NOT NULL,
ALTER COLUMN "classId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."AcademicClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
