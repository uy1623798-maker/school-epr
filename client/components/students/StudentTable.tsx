"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
  FileText,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    admissionNo: "ADM1025",
    class: "XII A",
    mobile: "9876543210",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Singh",
    admissionNo: "ADM1026",
    class: "XI B",
    mobile: "9876501234",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Priya Verma",
    admissionNo: "ADM1027",
    class: "X A",
    mobile: "9876512345",
    status: "Active",
  },
];

export default function StudentTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left text-white">Student</th>
              <th className="px-6 py-4 text-left text-white">Admission</th>
              <th className="px-6 py-4 text-left text-white">Class</th>
              <th className="px-6 py-4 text-left text-white">Mobile</th>
              <th className="px-6 py-4 text-left text-white">Status</th>
              <th className="px-6 py-4 text-center text-white">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-t border-slate-800 transition hover:bg-slate-800/60"
              >

                {/* Student */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-lg font-bold text-white">
                      {student.name.charAt(0)}
                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {student.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        Student
                      </p>

                    </div>

                  </div>

                </td>

                {/* Admission */}

                <td className="px-6 py-5 text-white">
                  {student.admissionNo}
                </td>

                {/* Class */}

                <td className="px-6 py-5 text-white">
                  {student.class}
                </td>

                {/* Mobile */}

                <td className="px-6 py-5 text-white">
                  {student.mobile}
                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      student.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex flex-wrap justify-center gap-2">

                    <Link
                      href={`/dashboard/teacher/students/${student.id}`}
                      className="rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-700"
                      title="View"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/dashboard/teacher/students/edit/${student.id}`}
                      className="rounded-xl bg-violet-600 p-2 text-white hover:bg-violet-700"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </Link>

                    <Link
                      href="/dashboard/teacher/tc/create"
                      className="rounded-xl bg-green-600 p-2 text-white hover:bg-green-700"
                      title="Transfer Certificate"
                    >
                      <FileText size={18} />
                    </Link>

                    <button
                      className="rounded-xl bg-orange-500 p-2 text-white hover:bg-orange-600"
                      title="Attendance"
                    >
                      <CalendarDays size={18} />
                    </button>

                    <button
                      className="rounded-xl bg-cyan-600 p-2 text-white hover:bg-cyan-700"
                      title="Fees"
                    >
                      <IndianRupee size={18} />
                    </button>

                    <button
                      className="rounded-xl bg-red-600 p-2 text-white hover:bg-red-700"
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