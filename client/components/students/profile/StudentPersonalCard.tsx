"use client";

export default function StudentPersonalCard() {
  const data = [
    ["Full Name", "Anjali solanki"],
    ["Gender", "female"],
    ["Date of Birth", "28 Aug 2002"],
    ["Blood Group", "O+"],
    ["Mobile", "+91 8383046233"],
    ["Email", "omprartap@gmail.com"],
    ["Address", "DELHI"],
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Personal Information
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