"use client";

export default function TcPreview() {
  return (
    <div className="sticky top-6 rounded-3xl border border-slate-700 bg-white p-8 shadow-2xl">

      {/* School Logo */}

      <div className="flex justify-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-500">

          <span className="text-4xl">🏫</span>

        </div>

      </div>

      {/* School Name */}

      <h1 className="mt-5 text-center text-2xl font-bold text-slate-900">
        Dhumari Public School
      </h1>

      <p className="text-center text-slate-500">
        Affiliated to CBSE
      </p>

      <hr className="my-6" />

      <h2 className="text-center text-2xl font-bold">
        TRANSFER CERTIFICATE
      </h2>

      <div className="mt-8 space-y-4 text-slate-700">

        <Row label="Student Name" value="Rahul Sharma" />

        <Row label="Admission No." value="ADM1025" />

        <Row label="Father Name" value="Ramesh Sharma" />

        <Row label="Class" value="XII A" />

        <Row label="Reason" value="Parent Transfer" />

        <Row label="Conduct" value="Excellent" />

      </div>

      <div className="mt-20 flex justify-between">

        <div>

          ___________________

          <p className="mt-2 text-sm">
            Class Teacher
          </p>

        </div>

        <div>

          ___________________

          <p className="mt-2 text-sm">
            Principal
          </p>

        </div>

      </div>

    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-2">

      <span className="font-semibold">
        {label}
      </span>

      <span>{value}</span>

    </div>
  );
}