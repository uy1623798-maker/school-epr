export default function PersonalDetails() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-bold text-white">
        Personal Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          placeholder="First Name"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Last Name"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="date"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <select className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-white">
          <option>Male</option>
          <option>Female</option>
        </select>

      </div>

    </div>
  );
}