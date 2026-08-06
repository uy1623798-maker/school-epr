export default function StudentInfoCard() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Personal Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <Info label="Full Name" value="Anajli solanki" />
        <Info label="Gender" value="Male" />
        <Info label="DOB" value="28 Aug 2002" />
        <Info label="Blood Group" value="O+" />
        <Info label="Mobile" value="+91 8383046233" />
        <Info label="Email" value="ompratap@gmail.com" />

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-slate-400">{label}</p>

      <p className="mt-1 font-semibold text-white">
        {value}
      </p>
    </div>
  );
}