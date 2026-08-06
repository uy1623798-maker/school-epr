"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/common/ThemeToggle";

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-xl backdrop-blur-xl dark:bg-slate-950/90"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white shadow">
  <Image
    src="/images/logo/school-logo.png"
    alt="School Logo"
    fill
    className="object-contain p-1"
  />
</div>

          <div>
            <h2
              className={`text-xl font-bold transition ${
                scrolled
                  ? "text-slate-900 dark:text-white"
                  : "text-white"
              }`}
            >
              Dr. Lokmandas
            </h2>

            <p
              className={`text-sm ${
                scrolled
                  ? "text-slate-600 dark:text-slate-300"
                  : "text-gray-200"
              }`}
            >
              Public School
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition hover:text-blue-600 ${
                scrolled
                  ? "text-slate-700 dark:text-white"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <Link
            href="/login"
            className="hidden rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            LOGIN
          </Link>

          <button
            className={`rounded-lg p-2 lg:hidden ${
              scrolled
                ? "text-slate-800 dark:text-white"
                : "text-white"
            }`}
          >
            <Menu size={30} />
          </button>

        </div>
      </div>
    </header>
  );
}