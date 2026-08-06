"use client";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>

      <textarea
        {...props}
        className="min-h-[120px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

    </div>
  );
}