"use client";

const notices = [
  "Holiday Tomorrow",
  "PTM on Saturday",
  "Science Exhibition Next Week",
];

export default function StudentNoticeCard() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Latest Notices
      </h2>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice}
            className="rounded-2xl bg-slate-800 p-4 text-white"
          >
            {notice}
          </div>
        ))}
      </div>
    </div>
  );
}