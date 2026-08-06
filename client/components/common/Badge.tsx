interface BadgeProps {
  type: "success" | "warning" | "danger";
  text: string;
}

export default function Badge({
  type,
  text,
}: BadgeProps) {
  const styles = {
    success: "bg-green-500/20 text-green-400",
    warning: "bg-yellow-500/20 text-yellow-400",
    danger: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${styles[type]}`}
    >
      {text}
    </span>
  );
}