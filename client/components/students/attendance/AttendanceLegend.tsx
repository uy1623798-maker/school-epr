"use client";

export default function AttendanceLegend() {
  const legend = [
    {
      color: "bg-green-500",
      title: "Present",
    },
    {
      color: "bg-red-500",
      title: "Absent",
    },
    {
      color: "bg-yellow-500",
      title: "Late",
    },
    {
      color: "bg-slate-400",
      title: "Holiday",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Attendance Legend
      </h2>

      <div className="grid gap-4 md:grid-cols-4">

        {legend.map((item) => (

          <div
            key={item.title}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 p-4"
          >

            <div
              className={`h-5 w-5 rounded-full ${item.color}`}
            />

            <span className="font-medium text-slate-700">
              {item.title}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}