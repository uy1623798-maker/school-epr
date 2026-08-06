"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const students = [
  {
    id: 1,
    photo: "/images/avatar.png",
    roll: "01",
    admission: "DLPS001",
    name: "Aarav Sharma",
    class: "XII-A",
    parent: "Rakesh Sharma",
    mobile: "9876543210",
    attendance: "96%",
    status: "Active",
  },
  {
    id: 2,
    photo: "/images/avatar.png",
    roll: "02",
    admission: "DLPS002",
    name: "Priya Singh",
    class: "XII-A",
    parent: "Sanjay Singh",
    mobile: "9876543211",
    attendance: "92%",
    status: "Active",
  },
  {
    id: 3,
    photo: "/images/avatar.png",
    roll: "03",
    admission: "DLPS003",
    name: "Rohan Verma",
    class: "XII-A",
    parent: "Mahesh Verma",
    mobile: "9876543212",
    attendance: "84%",
    status: "Inactive",
  },
];

export default function StudentTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr className="text-left">

              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4">Roll</th>
              <th className="px-6 py-4">Admission</th>
              <th className="px-6 py-4">Class</th>
              <th className="px-6 py-4">Parent</th>
              <th className="px-6 py-4">Mobile</th>
              <th className="px-6 py-4">Attendance</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <Image
                      src={student.photo}
                      width={45}
                      height={45}
                      alt={student.name}
                      className="rounded-full"
                    />

                    <span className="font-semibold">
                      {student.name}
                    </span>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {student.roll}
                </td>

                <td className="px-6 py-5">
                  {student.admission}
                </td>

                <td className="px-6 py-5">
                  {student.class}
                </td>

                <td className="px-6 py-5">
                  {student.parent}
                </td>

                <td className="px-6 py-5">
                  {student.mobile}
                </td>

                <td className="px-6 py-5">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                    {student.attendance}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-2">

                    <Link
                      href={`/dashboard/teacher/students/${student.id}`}
                      className="rounded-xl bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                    >
                      <Eye size={18} />
                    </Link>

                    <button className="rounded-xl bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-200">
                      <Pencil size={18} />
                    </button>

                    <button className="rounded-xl bg-red-100 p-2 text-red-600 hover:bg-red-200">
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