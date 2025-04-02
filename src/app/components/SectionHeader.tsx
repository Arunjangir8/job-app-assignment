import { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  action?: ReactNode;
}

export function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <div className="flex w-full justify-between items-end max-sm:flex-col max-sm:items-start max-sm:gap-4">
      <div className="text-5xl leading-[52.8px] max-sm:text-4xl">{title}</div>
      {action && <div>{action}</div>}
    </div>
  );
}