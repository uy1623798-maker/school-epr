"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Download,
  Eye,
  Upload,
} from "lucide-react";
import { useState } from "react";
import HomeworkSubmissionModal from "./HomeworkSubmissionModal";

type HomeworkStatus = "Pending" | "Submitted" | "Overdue";

interface HomeworkItem {
  id: number;
  subject: string;
  title: string;
  teacher: string;
  assignedDate: string;
  dueDate: string;
  status: HomeworkStatus;
}

const homeworkData: HomeworkItem[] = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Chapter 5 Algebra Exercise",
    teacher: "Mr. Sharma",
    assignedDate: "20 Jul 2026",
    dueDate: "26 Jul 2026",
    status: "Pending",
  },
  {
    id: 2,
    subject: "Physics",
    title: "Motion and Force Assignment",
    teacher: "Mrs. Singh",
    assignedDate: "19 Jul 2026",
    dueDate: "24 Jul 2026",
    status: "Submitted",
  },
  {
    id: 3,
    subject: "English",
    title: "Essay on Environmental Protection",
    teacher: "Mrs. Gupta",
    assignedDate: "17 Jul 2026",
    dueDate: "22 Jul 2026",
    status: "Overdue",
  },
  {
    id: 4,
    subject: "Computer",
    title: "Introduction to Database Systems",
    teacher: "Mr. Verma",
    assignedDate: "21 Jul 2026",
    dueDate: "28 Jul 2026",
    status: "Pending",
  },
];

function getStatusStyle(status: HomeworkStatus) {
  if (status === "Submitted") {
    return {
      className: "bg-emerald-100 text-emerald-700",
      icon: CheckCircle2,
    };
  }

  if (status === "Overdue") {
    return {
      className: "bg-red-100 text-red-700",
      icon: AlertTriangle,
    };
  }

  return {
    className: "bg-amber-100 text-amber-700",
    icon: Clock3,
  };
}

export default function HomeworkList() {
  const [selectedHomework, setSelectedHomework] =
    useState<HomeworkItem | null>(null);

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-2xl font-bold text-slate-900">
            Homework List
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View homework details, download files and submit your work.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-slate-50">
              <tr className="text-left text-sm font-semibold text-slate-600">
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Homework</th>
                <th className="px-6 py-4">Teacher</th>
                <th className="px-6 py-4">Assigned</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {homeworkData.map((item) => {
                const status = getStatusStyle(item.status);
                const StatusIcon = status.icon;

                return (
                  <tr
                    key={item.id}
                    className="border-t border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-5">
                      <span className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                        {item.subject}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {item.teacher}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {item.assignedDate}
                    </td>

                    <td className="px-6 py-5 font-medium text-slate-700">
                      {item.dueDate}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ${status.className}`}
                      >
                        <StatusIcon size={15} />
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          title="View homework"
                          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          type="button"
                          title="Download attachment"
                          className="rounded-xl bg-blue-50 p-2.5 text-blue-600 transition hover:bg-blue-100"
                        >
                          <Download size={18} />
                        </button>

                        {item.status !== "Submitted" && (
                          <button
                            type="button"
                            title="Submit homework"
                            onClick={() => setSelectedHomework(item)}
                            className="rounded-xl bg-blue-600 p-2.5 text-white transition hover:bg-blue-700"
                          >
                            <Upload size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <HomeworkSubmissionModal
        open={selectedHomework !== null}
        homeworkTitle={selectedHomework?.title ?? ""}
        onClose={() => setSelectedHomework(null)}
      />
    </>
  );
}