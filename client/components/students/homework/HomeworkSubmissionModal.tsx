"use client";

import { X, UploadCloud } from "lucide-react";
import { useState } from "react";

interface HomeworkSubmissionModalProps {
  open: boolean;
  homeworkTitle: string;
  onClose: () => void;
}

export default function HomeworkSubmissionModal({
  open,
  homeworkTitle,
  onClose,
}: HomeworkSubmissionModalProps) {
  const [fileName, setFileName] = useState("");

  if (!open) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Homework submitted:", {
      homeworkTitle,
      fileName,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl bg-white p-7 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Submit Homework
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {homeworkTitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-6">
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center transition hover:border-blue-500 hover:bg-blue-50">
            <UploadCloud size={40} className="text-blue-600" />

            <span className="mt-4 font-semibold text-slate-800">
              Upload your homework file
            </span>

            <span className="mt-2 text-sm text-slate-500">
              PDF, DOCX, JPG or PNG
            </span>

            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(event) =>
                setFileName(event.target.files?.[0]?.name ?? "")
              }
            />
          </label>

          {fileName && (
            <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
              Selected file: {fileName}
            </div>
          )}

          <div>
            <label
              htmlFor="student-note"
              className="text-sm font-semibold text-slate-700"
            >
              Student Note
            </label>

            <textarea
              id="student-note"
              rows={4}
              placeholder="Write a short note for your teacher..."
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!fileName}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Submit Homework
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}