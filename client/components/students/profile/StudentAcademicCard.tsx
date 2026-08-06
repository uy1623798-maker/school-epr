"use client";

export default function StudentAcademicCard() {
  const data = [
    ["Admission No", "ADM1025"],
    ["Roll No", "18"],
    ["Class", "XII"],
    ["Section", "A"],
    ["Session", "2026-27"],
    ["Admission Date", "10 April 2026"],
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Academic Information
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