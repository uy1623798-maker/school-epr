"use client";

import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import QueryProvider from "./QueryProvider";

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}