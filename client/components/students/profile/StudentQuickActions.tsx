"use client";

import {
  Pencil,
  FileText,
  CreditCard,
  Printer,
  Download,
  Trash2,
} from "lucide-react";

import { useRouter } from "next/navigation";

interface StudentQuickActionsProps {
  onDelete: () => void;
}

export default function StudentQuickActions({
  onDelete,
}: StudentQuickActionsProps) {
  const router = useRouter();

  const actions = [
    {
      title: "Edit Student",
      icon: Pencil,
      color: "bg-blue-600 hover:bg-blue-500",
      onClick: () => router.push("/dashboard/teacher/students/edit/1"),
    },
    {
      title: "Generate TC",
      icon: FileText,
      color: "bg-violet-600 hover:bg-violet-500",
      onClick: () =>
        router.push("/dashboard/teacher/tc/create"),
    },
    {
      title: "Generate ID",
      icon: CreditCard,
      color: "bg-emerald-600 hover:bg-emerald-500",
      onClick: () => {
        console.log("Generate ID");
      },
    },
    {
      title: "Print",
      icon: Printer,
      color: "bg-orange-600 hover:bg-orange-500",
      onClick: () => window.print(),
    },
    {
      title: "Download PDF",
      icon: Download,
      color: "bg-cyan-600 hover:bg-cyan-500",
      onClick: () => {
        console.log("Download PDF");
      },
    },
    {
      title: "Delete",
      icon: Trash2,
      color: "bg-red-600 hover:bg-red-500",
      onClick: onDelete,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={item.onClick}
              className={`flex flex-col items-center gap-3 rounded-2xl p-5 text-white transition duration-300 hover:scale-105 ${item.color}`}
            >
              <Icon size={30} />

              <span className="text-sm font-medium">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}