"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  increase: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  increase,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        rotateX: 3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
    >
      {/* Glow */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-40 ${color}`}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-300">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            <CountUp end={value} duration={2} />
          </h2>

          <p className="mt-3 text-sm text-green-400">
            ▲ {increase}
          </p>
        </div>

        <div
          className={`rounded-2xl p-4 ${color} shadow-xl transition-all duration-300 group-hover:scale-110`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
    </motion.div>
  );
}