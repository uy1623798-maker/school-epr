import { TCStatus } from "@prisma/client";

import { TCRepository } from "../repositories/tc.repository";
import {
  CreateTCDTO,
  UpdateTCDTO,
  TCFilterDTO,
} from "../interfaces/tc.interface";

import { generateTCNumber } from "../utils/tc-number";
import { generateQRCode } from "../utils/qr-generator";
import { generateTCPDF } from "../utils/pdf-generator";

const repository = new TCRepository();

export class TCService {

  // ==========================================
  // CREATE TC REQUEST
  // ==========================================

  async create(data: CreateTCDTO) {

    // Check Student Exists

    const student = await repository.findStudent(data.studentId);

    if (!student) {
      throw new Error("Student not found.");
    }

    // Check Teacher Exists

    const teacher = await repository.findTeacher(data.teacherId);

    if (!teacher) {
      throw new Error("Teacher not found.");
    }

    // One Pending TC Only

    const existing =
      await repository.findPendingByStudent(
        data.studentId
      );

    if (existing) {
      throw new Error(
        "Student already has a pending TC request."
      );
    }

    const tcNumber =
      await generateTCNumber();

    return repository.create({

      ...data,

      tcNumber,

    });

  }

  // ==========================================
  // GET ALL
  // ==========================================

  async getAll(filters: TCFilterDTO) {

    return repository.findAll(filters);

  }

  // ==========================================
  // GET BY ID
  // ==========================================

  async getById(id: string) {

    const tc =
      await repository.findById(id);

    if (!tc) {
      throw new Error("TC not found.");
    }

    return tc;

  }

  // ==========================================
  // UPDATE
  // ==========================================

  async update(
    id: string,
    data: UpdateTCDTO
  ) {

    const tc =
      await repository.findById(id);

    if (!tc) {
      throw new Error("TC not found.");
    }

    if (tc.status === TCStatus.GENERATED) {
      throw new Error(
        "Generated TC cannot be edited."
      );
    }

    return repository.update(id, data);

  }

  // ==========================================
  // DELETE
  // ==========================================

  async delete(id: string) {

    const tc =
      await repository.findById(id);

    if (!tc) {
      throw new Error("TC not found.");
    }

    if (tc.status === TCStatus.GENERATED) {
      throw new Error(
        "Generated TC cannot be deleted."
      );
    }

    await repository.delete(id);

    return {

      success: true,

      message:
        "Transfer Certificate deleted successfully.",

    };

  }

  // ==========================================
  // APPROVE
  // ==========================================

// ==========================================
// APPROVE
// ==========================================

async approve(
  id: string,
  approvedBy: string
) {

  const tc = await repository.findById(id);

  if (!tc) {
    throw new Error("TC not found.");
  }

  if (tc.status === TCStatus.APPROVED) {
    throw new Error("Already approved.");
  }

  // Approve TC
  const approvedTC = await repository.approve(
    id,
    approvedBy
  );

  // Fresh data with relations
  const fullTC = await repository.findById(id);

  if (!fullTC) {
    throw new Error("TC not found after approval.");
  }

  // Generate QR
  const qr = await generateQRCode(fullTC.id);

  // Generate PDF
  const pdf = await generateTCPDF(fullTC);

  // Save PDF & QR path in database
  await repository.markGenerated(
    fullTC.id,
    pdf,
    qr
  );

  // Return updated TC
  return repository.findById(id);
}
  // ==========================================
  // REJECT
  // ==========================================

  async reject(
    id: string,
    approvedBy: string,
    remarks: string
  ) {

    const tc =
      await repository.findById(id);

    if (!tc) {
      throw new Error("TC not found.");
    }

    if (tc.status === TCStatus.REJECTED) {
      throw new Error("Already rejected.");
    }

    return repository.reject(
      id,
      approvedBy,
      remarks
    );

  }

  // ==========================================
  // MARK GENERATED
  // ==========================================

  async markGenerated(
    id: string,
    pdfUrl: string,
    qrCode: string
  ) {

    const tc =
      await repository.findById(id);

    if (!tc) {
      throw new Error("TC not found.");
    }

    return repository.markGenerated(
      id,
      pdfUrl,
      qrCode
    );

  }
  // ==========================================
// DASHBOARD
// ==========================================

async dashboard(schoolId: string) {

  return repository.dashboardStatistics(
    schoolId
  );

}
// ==========================================
// VERIFY TC
// ==========================================

async verify(id: string) {

  const tc = await repository.verifyCertificate(id);

  if (!tc) {
    throw new Error("Invalid Transfer Certificate.");
  }

  return tc;
}

// ==========================================
// DOWNLOAD TC
// ==========================================

async download(id: string) {

  const tc = await repository.findById(id);

  if (!tc) {
    throw new Error("Transfer Certificate not found.");
  }

  if (!tc.pdfUrl) {
    throw new Error("PDF not generated.");
  }

  return tc.pdfUrl;
}
}