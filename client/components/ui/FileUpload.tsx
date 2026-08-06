"use client";

import { useRef, useState } from "react";
import { UploadCloud, X, ImageIcon } from "lucide-react";

interface FileUploadProps {
  label: string;
  onChange?: (file: File | null) => void;
}

export default function FileUpload({
  label,
  onChange,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File | null) => {
    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreview(url);

    onChange?.(file);
  };

  return (
    <div className="space-y-3">

      <label className="text-sm font-semibold text-slate-300">
        {label}
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-8 transition hover:border-blue-500"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) =>
            handleFile(e.target.files?.[0] || null)
          }
        />

        {preview ? (
          <div className="relative">

            <img
              src={preview}
              alt="Preview"
              className="h-40 w-40 rounded-2xl object-cover shadow-xl"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreview(null);
                onChange?.(null);
              }}
              className="absolute -right-3 -top-3 rounded-full bg-red-600 p-2 text-white"
            >
              <X size={16} />
            </button>

          </div>
        ) : (
          <>
            <UploadCloud
              className="text-blue-500 transition group-hover:scale-110"
              size={55}
            />

            <p className="mt-4 text-lg font-semibold text-white">
              Upload Image
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Click to browse your files
            </p>

            <ImageIcon
              className="mt-5 text-slate-500"
              size={32}
            />
          </>
        )}

      </div>

    </div>
  );
}