"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
      {children}
    </div>
  );
}