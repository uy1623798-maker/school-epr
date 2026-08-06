"use client";

import { AlertTriangle } from "lucide-react";

interface DeleteStudentModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  studentName: string;
}

export default function DeleteStudentModal({
  open,
  onClose,
  onDelete,
  studentName,
}: DeleteStudentModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

        <div className="flex justify-center">

          <div className="rounded-full bg-red-600/20 p-5">

            <AlertTriangle
              size={40}
              className="text-red-500"
            />

          </div>

        </div>

        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Delete Student
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Are you sure you want to delete
        </p>

        <p className="mt-2 text-center text-xl font-semibold text-white">
          {studentName} ?
        </p>

        <p className="mt-5 text-center text-sm text-red-400">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-700 py-3 text-white transition hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-xl bg-red-600 py-3 text-white transition hover:bg-red-500"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}