"use client";

import {
  Eye,
  Pencil,
  Printer,
  Trash2,
} from "lucide-react";

const data = [
  {
    id: 1,
    student: "Rahul Sharma",
    admission: "ADM1025",
    class: "XII A",
    issueDate: "15 Jul 2026",
    status: "Approved",
  },
  {
    id: 2,
    student: "Aman Singh",
    admission: "ADM1041",
    class: "XI B",
    issueDate: "-",
    status: "Pending",
  },
  {
    id: 3,
    student: "Priya Verma",
    admission: "ADM1108",
    class: "X A",
    issueDate: "10 Jul 2026",
    status: "Rejected",
  },
];

export default function TcTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Student
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Admission No.
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Class
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Issue Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {data.map((item) => (

              <tr
                key={item.id}
                className="border-t border-slate-800 transition hover:bg-slate-800/60"
              >

                <td className="px-6 py-5">

                  <div>

                    <h3 className="font-semibold text-white">
                      {item.student}
                    </h3>

                    <p className="text-sm text-slate-400">
                      Student
                    </p>

                  </div>

                </td>

                <td className="px-6 py-5 text-white">
                  {item.admission}
                </td>

                <td className="px-6 py-5 text-white">
                  {item.class}
                </td>

                <td className="px-6 py-5 text-white">
                  {item.issueDate}
                </td>

                <td className="px-6 py-5">

                  {item.status === "Approved" && (
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                      Approved
                    </span>
                  )}

                  {item.status === "Pending" && (
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
                      Pending
                    </span>
                  )}

                  {item.status === "Rejected" && (
                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400">
                      Rejected
                    </span>
                  )}

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center justify-center gap-2">

                    <button
                      className="rounded-xl bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      className="rounded-xl bg-violet-600 p-2 text-white transition hover:bg-violet-700"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="rounded-xl bg-green-600 p-2 text-white transition hover:bg-green-700"
                      title="Print"
                    >
                      <Printer size={18} />
                    </button>

                    <button
                      className="rounded-xl bg-red-600 p-2 text-white transition hover:bg-red-700"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}