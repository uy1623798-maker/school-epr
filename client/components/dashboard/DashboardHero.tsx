"use client";

import { motion } from "framer-motion";

export default function DashboardHero() {
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
      className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10"
    >
      {/* Background Blur */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">

        <p className="text-sm md:text-lg text-blue-100">
          {greeting}
        </p>

        <h1 className="text-5xl font-bold text-white">
  Welcome to
  <br />
  Dr. Lokmandas Public School ERP
</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-100 md:text-lg">
          Manage Students, Teachers, Attendance, Fees, Exams and Reports
          from one modern AI-powered dashboard.
        </p>

      </div>
    </motion.section>
  );
}