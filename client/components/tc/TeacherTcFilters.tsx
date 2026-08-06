export default function TcFilters() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">

      <input
        placeholder="Search Student..."
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      />

      <select className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white">
        <option>All Status</option>
        <option>Pending</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>

    </div>
  );
}