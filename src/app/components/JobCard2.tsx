import { TagList, Tag } from "./TagList";

interface JobCardProps {
  companyLogo: string;
  title: string;
  company: string;
  location: string;
  tags: Tag[];
}

export const JobCard = ({
  companyLogo,
  title,
  company,
  location,
  tags,
}: JobCardProps) => {
  return (
    <div className="flex items-start gap-6 bg-white p-6">
      <div>
        <div dangerouslySetInnerHTML={{ __html: companyLogo }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#25324B] text-xl font-semibold">{title}</div>
        <div className="text-[#515B6F] text-base">
          {company} • {location}
        </div>
        <TagList tags={tags} />
      </div>
    </div>
  );
};

