"use client";

import Image from "next/image";
import { Eye, Pencil, Phone } from "lucide-react";
import { motion } from "framer-motion";

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    roll: "21",
    class: "XII-A",
    parent: "+91 9876543210",
    image: "/images/students/student1.jpg",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    roll: "18",
    class: "XII-A",
    parent: "+91 9123456780",
    image: "/images/students/student2.jpg",
    status: "Active",
  },
  {
    id: 3,
    name: "Rohan Verma",
    roll: "27",
    class: "XII-A",
    parent: "+91 9988776655",
    image: "/images/students/student3.jpg",
    status: "Inactive",
  },
];

export default function TeacherRecentStudents() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Students
        </h2>

        <p className="mt-1 text-slate-500">
          Recently active students in your class
        </p>
      </div>

      <div className="space-y-5 p-6">

        {students.map((student) => (
          <motion.div
            key={student.id}
            whileHover={{ y: -2 }}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">

              <Image
                src={student.image}
                alt={student.name}
                width={55}
                height={55}
                className="rounded-full border object-cover"
              />

              <div>

                <h3 className="font-bold text-slate-900">
                  {student.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Roll No. {student.roll} • {student.class}
                </p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.status}
                </span>

              </div>

            </div>

            <div className="flex gap-2">

              <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200">
                <Eye size={18} />
              </button>

              <button className="rounded-xl bg-blue-100 p-3 text-blue-600 hover:bg-blue-200">
                <Pencil size={18} />
              </button>

              <button className="rounded-xl bg-green-100 p-3 text-green-600 hover:bg-green-200">
                <Phone size={18} />
              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}