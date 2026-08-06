"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";


export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-110 brightness-[0.35]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-16 px-6">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <span className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/20 px-5 py-2 text-sm font-medium tracking-widest text-blue-100 backdrop-blur-xl">
              🎓 ADMISSIONS OPEN • SESSION 2026–27
            </span>

 <h6 className="mt-8 text-6xl font-black leading-tight lg:text-8xl bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,215,0,0.35)]">
  Dr. Lokmandas
  <br />
  Public School
</h6>
<div className="mt-6 flex flex-wrap gap-4">

  <div className="rounded-full border border-green-400/30 bg-green-500/20 px-5 py-2 text-green-100 backdrop-blur-xl">
    ⭐ CBSE Affiliated
  </div>

  <div className="rounded-full border border-yellow-400/30 bg-yellow-500/20 px-5 py-2 text-yellow-100 backdrop-blur-xl">
    🏆 Best School Award
  </div>

</div>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
              Inspiring excellence through innovation, discipline,
              character building and world-class education for every child.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/admissions"
                className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Login
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Explore Campus
              </Link>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >

            {/* Card 1 */}

            <div className="mb-6 w-80 rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-2xl">

              <p className="text-sm uppercase tracking-widest text-blue-300">
                Excellence
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                25+
              </h2>

              <p className="mt-3 text-slate-200">
                Years of Academic Excellence
              </p>

            </div>

            {/* Card 2 */}

            <div className="mb-6 w-80 rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-2xl">

              <p className="text-sm uppercase tracking-widest text-green-300">
                Students
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                2000+
              </h2>

              <p className="mt-3 text-slate-200">
                Happy Students
              </p>

            </div>

            {/* Card 3 */}

            <div className="w-80 rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-2xl">

              <p className="text-sm uppercase tracking-widest text-yellow-300">
                Teachers
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                50+
              </h2>

              <p className="mt-3 text-slate-200">
                Highly Qualified Faculty
              </p>

            </div>
{/* Campus Preview */}

<div className="mt-8 overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl">

  <img
    src="/images/campus.png"
    alt="Campus"
    
    className="h-56 w-full object-cover transition duration-700 hover:scale-110"
  />

  <div className="p-6">

    <p className="text-sm uppercase tracking-widest text-blue-300">
      Our Campus
    </p>

    <h3 className="mt-2 text-2xl font-bold text-white">
      Smart Digital Campus
    </h3>

    <p className="mt-3 text-slate-200">
      Modern classrooms, smart labs,
      library, sports complex and
      technology-enabled learning.
    </p>

  </div>

</div>
          </motion.div>

        </div>

      </div>

      {/* Scroll */}
{/* Bottom Blur */}

<div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <ChevronDown className="text-white" size={42} />

      </div>

    </section>
  );
}