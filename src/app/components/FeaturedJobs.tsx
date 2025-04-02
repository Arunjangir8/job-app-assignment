import { JobCard } from "./JobCard";

const jobsData = [
  {
    logo: `https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6b/47/00/6b470038-e1c7-c17e-8938-88354a5b14e9/AppIcon-1x_U007epad-0-1-85-220-0.png/512x512bb.jpg`,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: [
      { label: "Marketing", type: "marketing" as const },
      { label: "Design", type: "design" as const },
    ],
  },
  {
    logo: `https://cdn.brandfetch.io/idY3kwH_Nx/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1691075441479`,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: [
      { label: "Design", type: "design" as const },
      { label: "Business", type: "business" as const },
    ],
  },
  {
    logo: `https://logosandtypes.com/wp-content/uploads/2024/12/pitch.svg`,
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description:
      "Pitch is looking for Customer Manager to join marketing t ...",
    tags: [{ label: "Marketing", type: "marketing" as const }],
  },
  {
    logo: `https://www.apkmirror.com/wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fdownloadr2.apkmirror.com%2Fwp-content%2Fuploads%2F2024%2F10%2F07%2F6721052c8a05b_com.blinkslabs.blinkist.android.png&w=192&h=192&q=100`,
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    description:
      "Blinkist is looking for Visual Designer to help team desi ...",
    tags: [{ label: "Design", type: "design" as const }],
  },
  {
    logo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WlJim6yHUS-PvXkQ7FoBlhI9irri5bWceQ&s`,
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: [
      { label: "Marketing", type: "marketing" as const },
      { label: "Design", type: "design" as const },
    ],
  },
  {
    logo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-gW4g-vk0VvSkSUys7a1Z8NmVXjq-iccSg&s`,
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: [
      { label: "Design", type: "design" as const },
      { label: "Business", type: "business" as const },
    ],
  },
  {
    logo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqVGwXfboLlsa3uQAI8Yim-rx9MrsRYED-w&s`,
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: [{ label: "Marketing", type: "marketing" as const }],
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/95417aa3fd607df261259e657f968287f947e5b2",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: [{ label: "Technology", type: "technology" as const }],
  },
];

export const FeaturedJobs = () => {
  return (
    <section className="flex flex-col items-start gap-12 bg-white  pb-[72px] px-[124px] max-md:pt-0 max-md:pb-12 max-md:px-16 max-sm:pt-0 max-sm:pb-8 max-sm:px-6 pt-[150px]">
      <div className="flex w-full justify-between items-end max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <h2 className="text-5xl font-normal leading-[52.8px] max-sm:text-4xl">
          <span className="text-[#25324B]">Featured</span>
          <span className="text-[#26A4FF]">jobs</span>
        </h2>
        <button className="flex items-center gap-4 cursor-pointer">
          <span className="text-[#4640DE] text-base font-bold">
            Show all jobs
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.75 11.7256L4.75 11.7256"
              stroke="#4640DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
              stroke="#4640DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-8 w-full max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {jobsData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
};
