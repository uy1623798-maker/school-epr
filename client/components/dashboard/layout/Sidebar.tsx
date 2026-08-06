"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  UserRound,
  CalendarCheck,
  BookOpen,
  CreditCard,
  ClipboardList,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    title: "Teachers",
    href: "/dashboard/teachers",
    icon: Users,
  },
  {
    title: "Parents",
    href: "/dashboard/parents",
    icon: UserRound,
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Academics",
    href: "/dashboard/academics",
    icon: BookOpen,
  },
  {
    title: "Fees",
    href: "/dashboard/fees",
    icon: CreditCard,
  },
  {
    title: "Exams",
    href: "/dashboard/exams",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -60 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-[#0B1120] text-white shadow-2xl"
    >
      {/* Header */}

      <div className="border-b border-slate-800 px-6 py-6">

        <div className="flex items-center gap-4">

          <Image
            src="/images/logo/school-logo.png"
            width={60}
            height={60}
            alt="School Logo"
            className="rounded-full border-2 border-blue-500 object-cover"
          />

          <div>

            <h2 className="text-lg font-bold leading-6">
              Dr. Lokmandas
            </h2>

            <p className="text-sm text-slate-400">
              Public School
            </p>

            <div className="mt-2 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-green-500"></span>

              <span className="text-xs text-green-400">
                Session 2026–27
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <div className="space-y-2">

          {menus.map((menu) => {
            const Icon = menu.icon;

            const active =
              pathname === menu.href ||
              pathname.startsWith(menu.href + "/");

            return (
              <Link key={menu.title} href={menu.href}>
                <motion.div
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={22} />

                  <span className="font-medium">
                    {menu.title}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 px-6 py-5">

        <div className="rounded-xl bg-slate-900 p-4">

          <p className="text-center text-xs text-slate-500">
            Powered By
          </p>

          <h3 className="mt-2 text-center text-lg font-bold text-blue-400">
            We Take FWD
          </h3>

          <p className="mt-1 text-center text-xs text-slate-500">
            AI School ERP v1.0
          </p>

        </div>

      </div>

    </motion.aside>
  );
}