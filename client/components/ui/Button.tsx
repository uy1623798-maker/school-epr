"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  loading,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading}
      className={`rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 disabled:opacity-60 ${className}`}
    >
      {loading ? "Please Wait..." : children}
    </button>
  );
}