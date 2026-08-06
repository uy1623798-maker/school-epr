import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              We Take FWD
            </h2>

            <p className="mt-4 text-slate-400">
              Smart School ERP & Website Platform for Modern Schools.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-slate-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Modules</h3>

            <ul className="space-y-2 text-slate-400">
              <li>Attendance</li>
              <li>Homework</li>
              <li>Fees</li>
              <li>Exams</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <p className="text-slate-400">
              📧 info@wetakefwd.online
            </p>

            <p className="mt-2 text-slate-400">
              🌐 www.wetakefwd.online
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          Design and Created by WetakeFWD    
       <div>© 2026 We Take FWD. All Rights Reserved.</div>    
        </div>

      </div>
    </footer>
  );
}