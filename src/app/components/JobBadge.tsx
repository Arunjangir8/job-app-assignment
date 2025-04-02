import { cn } from "./lib/util";

interface JobBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function JobBadge({
  children,
  variant = "secondary",
  className,
}: JobBadgeProps) {
  return (
    <div
      className={cn(
        "text-sm font-bold px-4 py-1 rounded-[80px]",
        variant === "primary" && "text-[#4640DE] border border-[#4640DE]",
        variant === "secondary" && "bg-white border border-[#D6DDEB]",
        className,
      )}
    >
      {children}
    </div>
  );
}
