"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="ml-72 flex h-screen flex-col">

        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="mt-20 flex-1 overflow-y-auto bg-slate-100 p-8">

          <div className="mx-auto max-w-7xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}