"use client";

import { Bell, Search, Settings, Moon, User } from "lucide-react";

export default function Topbar() {
  return (
   <header className="fixed left-72 right-0 top-0 z-40 h-20 border-b border-slate-200 bg-white shadow-sm">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back 👋 Have a great day.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 lg:flex">

          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">

          <Bell size={20} className="text-slate-600" />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Theme */}

        <button className="rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">

          <Moon size={20} className="text-slate-600" />

        </button>

        {/* Settings */}

        <button className="rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">

          <Settings size={20} className="text-slate-600" />

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">

            <User size={20} />

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold text-slate-900">
              Utkarsh
            </h3>

            <p className="text-xs text-slate-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}