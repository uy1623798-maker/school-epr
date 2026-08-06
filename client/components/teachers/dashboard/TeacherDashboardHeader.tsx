"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";

export default function TeacherDashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 17
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-8 text-white shadow-xl"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>
          <p className="text-lg text-blue-100">
            {greeting}
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Welcome Back,
            <br />
            Rajesh Sharma
          </h1>

          <p className="mt-5 max-w-2xl text-blue-100">
            Class Teacher • XII-A
            <br />
            Manage attendance, homework, students and today's classes from one dashboard.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <GraduationCap size={28} />
              <div>
                <p className="text-sm text-blue-100">
                  Total Students
                </p>

                <h2 className="text-3xl font-bold">
                  48
                </h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <CalendarDays size={28} />
              <div>
                <p className="text-sm text-blue-100">
                  Today's Classes
                </p>

                <h2 className="text-3xl font-bold">
                  06
                </h2>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}