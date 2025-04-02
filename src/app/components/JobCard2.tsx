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
    <div className="flex items-start gap-6 bg-white p-6 border border-[#D6DDEB] rounded-lg shadow-sm transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:border-[#4640DE] hover:bg-[#F8F9FF] cursor-pointer">
      <div>
        <div dangerouslySetInnerHTML={{ __html: companyLogo }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#25324B] text-xl font-semibold transition-all duration-300 hover:text-[#4640DE]">
          {title}
        </div>
        <div className="text-[#515B6F] text-base">
          {company} • {location}
        </div>
        <TagList tags={tags} />
      </div>
    </div>
  );
};
