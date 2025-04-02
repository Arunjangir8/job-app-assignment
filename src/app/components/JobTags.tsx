import { cn } from "./lib/util";

interface JobTagProps {
  label: string;
  type: "marketing" | "design" | "business" | "technology";
}

const tagStyles = {
  marketing: {
    text: "text-[#FFB836]",
    bg: "bg-[rgba(235,133,51,0.1)]",
  },
  design: {
    text: "text-[#56CDAD]",
    bg: "bg-[rgba(86,205,173,0.1)]",
  },
  business: {
    text: "text-[#4640DE]",
    bg: "bg-[rgba(70,64,222,0.1)]",
  },
  technology: {
    text: "text-[#FF6550]",
    bg: "bg-[rgba(255,101,80,0.1)]",
  },
};

export const JobTag = ({ label, type }: JobTagProps) => {
  return (
    <div
      className={cn(
        "text-sm font-bold px-4 py-1 rounded-[80px]",
        tagStyles[type].text,
        tagStyles[type].bg,
      )}
    >
      {label}
    </div>
  );
};

export const JobTags = ({
  tags,
}: {
  tags: Array<{ label: string; type: JobTagProps["type"] }>;
}) => {
  return (
    <div className="flex gap-2 mt-4">
      {tags.map((tag, index) => (
        <JobTag key={index} {...tag} />
      ))}
    </div>
  );
};
