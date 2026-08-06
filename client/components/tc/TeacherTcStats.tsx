"use client";

import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total TC",
    value: 126,
    icon: FileText,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Pending",
    value: 14,
    icon: Clock,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Approved",
    value: 98,
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Rejected",
    value: 14,
    icon: XCircle,
    color: "from-red-500 to-pink-600",
  },
];

export default function TcStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
            />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-green-400">
                  Updated Today
                </p>
              </div>

              <div
                className={`rounded-2xl bg-gradient-to-r ${item.color} p-4 shadow-lg`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}