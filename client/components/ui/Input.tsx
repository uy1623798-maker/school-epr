"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        {...props}
        className={`w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition-all duration-300
        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
        placeholder:text-slate-500
        ${className}`}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}