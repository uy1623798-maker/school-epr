export default function AcademicDetails() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-bold text-white">
        Academic Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          placeholder="Admission Number"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Roll Number"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Class"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Section"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

      </div>

    </div>
  );
}