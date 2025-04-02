import { JobTags } from "./JobTags";

interface JobCardProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: Array<{
    label: string;
    type: "marketing" | "design" | "business" | "technology";
  }>;
}

export const JobCard = ({
  logo,
  title,
  company,
  location,
  description,
  tags,
}: JobCardProps) => {
  const isImage = logo.includes("<img>") || logo.includes("http");

  return (
    <div className="flex flex-col gap-5 border border-solid border-[#D6DDEB] rounded-lg p-6 bg-white">
      <div className="flex justify-between items-center w-full">
        {isImage ? (
          <img
            src={logo.replace(/<img>|<\/img>/g, "").replace(/"/g, "")}
            alt={`${company} logo`}
            className="w-12 h-12 rounded-4xl"
          />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: logo }} className="w-12 h-12" />
        )}
        <div className="text-[#4640DE] text-sm font-medium border border-[#4640DE] rounded px-3 py-1">
          Full Time
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-[#25324B] text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-2 text-[#515B6F] text-sm">
          <span>{company}</span>
          <span className="w-1 h-1 bg-[#515B6F] opacity-30 rounded-full" />
          <span>{location}</span>
        </div>
        <p className="text-[#7C8493] text-sm line-clamp-2">{description}</p>
        <JobTags tags={tags} />
      </div>
    </div>
  );
};
