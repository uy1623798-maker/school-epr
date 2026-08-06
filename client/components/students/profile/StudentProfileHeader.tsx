"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Pencil,
  BadgeCheck,
  GraduationCap,
  CalendarCheck,
  Wallet,
} from "lucide-react";

interface StudentProfileHeaderProps {
  editable?: boolean;
}

export default function StudentProfileHeader({
  editable = true,
}: StudentProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900"
    >
      {/* Background */}
      <div className="h-44 bg-gradient-to-r from-blue-700 via-violet-700 to-cyan-600" />

      <div className="px-8 pb-8">

        {/* Profile Section */}
        <div className="-mt-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="flex flex-col gap-6 md:flex-row md:items-end">

            {/* Photo */}
            <div className="group relative">

              <Image
                src="/avatar.png"
                alt="Student"
                width={160}
                height={160}
                className="rounded-full border-4 border-slate-900 object-cover shadow-2xl"
              />

              {editable && (
                <button className="absolute bottom-3 right-3 rounded-full bg-blue-600 p-3 text-white transition hover:scale-110">
                  <Camera size={18} />
                </button>
              )}

            </div>

            {/* Details */}
            <div>

              <h1 className="text-4xl font-bold text-white">
                Rahul Sharma
              </h1>

              <p className="mt-2 text-slate-400">
                Admission No :
                <span className="ml-2 font-semibold text-white">
                  ADM1025
                </span>
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  XII-A
                </span>

                <span className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm text-white">
                  <BadgeCheck size={16} />
                  Active
                </span>

                <span className="flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm text-white">
                  <GraduationCap size={16} />
                  Roll No 18
                </span>

              </div>

            </div>

          </div>

          {/* Edit */}
          <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
            <Pencil size={18} />
            Edit Student
          </button>

        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-800 p-5">

            <div className="flex items-center gap-3">

              <CalendarCheck className="text-green-400" />

              <div>

                <p className="text-slate-400">
                  Attendance
                </p>

                <h3 className="text-2xl font-bold text-white">
                  98%
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <div className="flex items-center gap-3">

              <Wallet className="text-yellow-400" />

              <div>

                <p className="text-slate-400">
                  Fee Status
                </p>

                <h3 className="text-2xl font-bold text-green-400">
                  Paid
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <div className="flex items-center gap-3">

              <GraduationCap className="text-blue-400" />

              <div>

                <p className="text-slate-400">
                  Class
                </p>

                <h3 className="text-2xl font-bold text-white">
                  XII-A
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}