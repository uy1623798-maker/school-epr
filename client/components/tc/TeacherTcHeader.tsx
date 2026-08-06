import Link from "next/link";

export default function TcHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Transfer Certificate
        </h1>

        <p className="text-slate-400">
          Manage all transfer certificates.
        </p>
      </div>

     <Link
  href="/dashboard/tc/create"
  className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
>
  + Generate TC
</Link>

    </div>
  );
}