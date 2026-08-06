export default function ParentDetails() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-bold text-white">
        Parent Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          placeholder="Father Name"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Mother Name"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Parent Mobile"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Parent Email"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

      </div>

    </div>
  );
}