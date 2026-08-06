"use client";

const homework = [
  "Physics Assignment",
  "Math Worksheet",
  "English Essay",
];

export default function StudentHomeworkCard() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Pending Homework
      </h2>

      <div className="space-y-4">
        {homework.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-slate-800 p-4 text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}