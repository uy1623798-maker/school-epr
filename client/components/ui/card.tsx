import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}