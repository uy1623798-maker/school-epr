"use client";

import { FileText, Download } from "lucide-react";

const docs = [
  "Aadhaar Card",
  "Birth Certificate",
  "Previous Marksheet",
  "Transfer Certificate",
];

export default function StudentDocumentsCard() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Documents
      </h2>

      <div className="space-y-4">
        {docs.map((doc) => (
          <div
            key={doc}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <div className="flex items-center gap-3">
              <FileText className="text-blue-400" />
              <span className="text-white">{doc}</span>
            </div>

            <button className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-500">
              <Download size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}