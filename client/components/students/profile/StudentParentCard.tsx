"use client";

export default function StudentParentCard() {
  const data = [
    ["Father Name", "Amit Sharma"],
    ["Mother Name", "Neha Sharma"],
    ["Guardian", "Amit Sharma"],
    ["Occupation", "Business"],
    ["Income", "₹8,00,000 / Year"],
    ["Emergency Contact", "+91 9999999999"],
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Parent Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {data.map(([label, value]) => (
          <div key={label}>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-1 text-lg font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}