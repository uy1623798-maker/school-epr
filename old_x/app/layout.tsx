import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/providers/AppProvider";

export const metadata: Metadata = {
  title: "We Take FWD School ERP",
  description: "Modern Multi School ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}