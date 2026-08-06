"use client";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export default function Select({
  label,
  children,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
        {...props}
        className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      >
        {children}
      </select>

    </div>
  );
}