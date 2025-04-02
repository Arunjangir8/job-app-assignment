import { cn } from "./lib/util";

export interface Tag {
  label: string;
  type: "status" | "category" | "skill";
}

interface TagListProps {
  tags: Tag[];
  className?: string;
}

export const TagList = ({ tags, className }: TagListProps) => {
  const getTagStyles = (type: Tag["type"]) => {
    switch (type) {
      case "status":
        return "text-[#56CDAD] bg-[rgba(86,205,173,0.1)]";
      case "category":
        return "text-[#FFB836] border-[#FFB836] border";
      case "skill":
        return "text-[#4640DE] border-[#4640DE] border";
      default:
        return "";
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {tags.map((tag, index) => (
        <>
          <div
            key={`${tag.label}-${index}`}
            className={cn(
              "text-sm font-semibold px-2.5 py-1.5 rounded-[80px]",
              getTagStyles(tag.type),
            )}
          >
            {tag.label}
          </div>
          {index < tags.length - 1 && <div className="w-px h-6 bg-[#D6DDEB]" />}
        </>
      ))}
    </div>
  );
};
