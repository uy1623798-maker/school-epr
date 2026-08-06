"use client";

import {
  GraduationCap,
  Users,
  IndianRupee,
  UserCheck,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Students",
    value: 2456,
    increase: "+12%",
    icon: GraduationCap,
    color: "bg-blue-600",
  },
  {
    title: "Teachers",
    value: 128,
    increase: "+8%",
    icon: Users,
    color: "bg-violet-600",
  },
  {
    title: "Revenue",
    value: 85000,
    increase: "+21%",
    icon: IndianRupee,
    color: "bg-green-600",
  },
  {
    title: "Attendance",
    value: 98,
    increase: "+3%",
    icon: UserCheck,
    color: "bg-orange-500",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          increase={item.increase}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
}