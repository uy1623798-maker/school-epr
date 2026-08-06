"use client";

import Image from "next/image";
import {
  Bell,
  Search,
  Moon,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed left-72 right-0 top-0 z-40 h-20 border-b border-slate-200 bg-white shadow-sm">

      <div className="flex h-full items-center justify-between px-8">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div>

            <h1 className="text-2xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Welcome to Dr. Lokmandas Public School ERP
            </p>

          </div>

          {/* Search */}

          <div className="relative hidden lg:block">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search students, teachers..."
              className="w-96 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Theme */}

          <button className="rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">

            <Moon
              size={20}
              className="text-slate-700"
            />

          </button>

          {/* Notification */}

          <button className="relative rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">

            <Bell
              size={20}
              className="text-slate-700"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </button>

          {/* Settings */}

          <button className="rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">

            <Settings
              size={20}
              className="text-slate-700"
            />

          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">

            <Image
              src="/images/logo/admin.jpg"
              width={45}
              height={45}
              alt="Admin"
              className="rounded-full object-cover"
            />

            <div>

              <h3 className="font-semibold text-slate-800">
                Utkarsh Yadav
              </h3>

              <p className="text-xs text-slate-500">
                Super Admin
              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-slate-500"
            />

          </div>

        </div>

      </div>

    </header>
  );
}