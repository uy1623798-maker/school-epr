"use client";

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <Link
        href="/admissions"
        className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Apply Now
      </Link>

      <Link
        href="/about"
        className="rounded-full border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
      >
        Explore Campus
      </Link>

    </div>
  );
}