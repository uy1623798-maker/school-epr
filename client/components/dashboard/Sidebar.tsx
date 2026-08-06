"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  UserCheck,
  CalendarCheck,
  BookOpen,
  FileText,
  CreditCard,
  Library,
  Bus,
  Building2,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
     title: "Students",
  href: "/dashboard/student",
  icon: GraduationCap,
  },
  {
     title: "Teachers",
  href: "/dashboard/teacher",
  icon: Users,

  },
  {
     title: "Parents",
  href: "/dashboard/parent",
  icon: UserCheck,
  },
  {
     title: "Attendance",
  href: "/dashboard/attendance",
  icon: CalendarCheck,
  },
  {
      title: "Homework",
  href: "/dashboard/homework",
  icon: BookOpen,
  },
  {
      title: "Exams",
  href: "/dashboard/exams",
  icon: FileText,

  },
  {
      title: "Fees",
  href: "/dashboard/fees",
  icon: CreditCard,

  },
 {
  title: "Library",
  href: "/dashboard/library",
  icon: Library,
},
{
  title: "Transport",
  href: "/dashboard/transport",
  icon: Bus,
},
{
  title: "Hostel",
  href: "/dashboard/hostel",
  icon: Building2,
},
{
  title: "HR",
  href: "/dashboard/hr",
  icon: Briefcase,
},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
   <aside className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="border-b border-slate-200 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
            DL
          </div>

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Dr. Lokmandas
            </h2>

            <p className="text-sm text-slate-500">
              School ERP
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 overflow-y-auto p-5">

        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Bottom */}

      <div className="border-t border-slate-200 p-5 space-y-3">

        <Link
          href="/settings"
          className="flex items-center gap-4 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >
          <Settings size={20} />
          Settings
        </Link>

        <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50">
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}