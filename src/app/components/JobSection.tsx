import { JobCard } from "./JobCard2";

const JOBS_DATA = [
  {
    companyLogo: `<svg id="I0:2037;51:1383;278:9075" layer-name="Company Logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[64px] h-[64px]"> <g clip-path="url(#clip0_1_2743)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 17.4937V45.9385L32.4321 60.6282L32.9992 59.715L32.4321 32.1083L8.84006 17.5105L8 17.4937Z" fill="#449B82"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6001 17.3601V46.2057L32.4323 60.6284V32.1084L55.7149 17.3818L56.6001 17.3601Z" fill="#9BDB9C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.3 3.20386L56.6 17.3595L32.4321 32.5837L8 17.4931L32.3 3.20386Z" fill="#56CDAD"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M44.5054 14.5481L36.2867 19.4128V29.2317L28.052 24.2871L20.1339 28.9741V49.4968L28.3526 44.4002V33.3533L37.1308 38.9569L44.5054 34.3838V14.5481Z" fill="white"></path> </g> <defs> <clipPath id="clip0_1_2743"> <rect width="48.6" height="57.6" fill="white" transform="translate(8 3.19995)"></rect> </clipPath> </defs> </svg>`,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  {
    companyLogo: `<svg id="I0:2037;51:1406;278:9075" layer-name="Company Logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[64px] h-[64px]"> <g clip-path="url(#clip0_1_2768)"> <path d="M19.2001 10.0659L6.40019 18.3292L19.2001 26.471L32.0001 18.3292L19.2001 10.0659ZM44.8 10.0659L32.0001 18.3292L44.8 26.471L57.6 18.3292L44.8 10.0659ZM6.40019 34.7343L19.2001 42.9976L32.0001 34.7343L19.2001 26.471L6.40019 34.7343ZM44.8 26.471L32.0001 34.7343L44.8 42.9976L57.6 34.7343L44.8 26.471ZM19.2001 45.671L32.0001 53.9344L44.8 45.671L32.0001 37.5293L19.2001 45.671Z" fill="#0062FF"></path> </g> <defs> <clipPath id="clip0_1_2768"> <rect width="51.2" height="48" fill="white" transform="translate(6.39999 8)"></rect> </clipPath> </defs> </svg>`,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  {
    companyLogo: `<svg id="I0:2037;51:1434;278:9075" layer-name="Company Logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[64px] h-[64px]"> <g clip-path="url(#clip0_1_2789)"> <path d="M25.6874 15.4614L39.239 23.3189V38.9704L25.6874 31.1129V15.4614Z" fill="#21D4EF"></path> <path d="M41.6457 23.3189L55.1974 15.4614V31.1129L41.6457 38.9704V23.3189Z" fill="#21D4EF"></path> <path d="M9.60281 6.3999L23.1545 14.2573V29.9088L9.60281 22.0514V6.3999Z" fill="#21D4EF"></path> <path d="M25.6874 34.0911L39.239 41.8852V57.6001L25.6874 49.7426V34.0911Z" fill="#21D4EF"></path> </g> <defs> <clipPath id="clip0_1_2789"> <rect width="45.6" height="51.2" fill="white" transform="translate(9.60001 6.3999)"></rect> </clipPath> </defs> </svg>`,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  {
    companyLogo: `<svg id="I0:2037;51:1462;278:9075" layer-name="Company Logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[64px] h-[64px]"> <g clip-path="url(#clip0_1_2814)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2 52.9201L32.3931 57.5998L32.4132 18.9131L15.2202 14.2334L15.2 52.9201Z" fill="#FF6550"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6703 11.7247L24.1089 6.3999V13.445L35.4265 16.5273L35.4164 43.3356L43.6602 45.5781C46.4921 46.3461 48.7899 44.206 48.8 40.7961L48.8101 19.3125C48.8 15.8924 46.5022 12.5029 43.6703 11.7247" fill="#FF6550"></path> </g> <defs> <clipPath id="clip0_1_2814"> <rect width="33.6" height="51.2" fill="white" transform="translate(15.2 6.3999)"></rect> </clipPath> </defs> </svg>`,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  // Column 2
  {
    companyLogo: `<img src="https://logotic.me/system/assets/uploads/vector-files/netflix-1668953064-logotic-tmpl.svg?width=&height=100" alt="SVG Image" width="64" height="64">`,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  {
    companyLogo: `<img 
    src="https://cdn.brandfetch.io/iddFGFHNcm/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" 
    alt="Brand Logo" 
    class="w-16 h-16"
/>
`,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  {
    companyLogo: `<img width="64" height="64" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/64/external-udacity-a-for-profit-educational-organization-founded-by-offering-massive-open-online-courses-logo-bold-tal-revivo.png" alt="external-udacity-a-for-profit-educational-organization-founded-by-offering-massive-open-online-courses-logo-bold-tal-revivo"/>`,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
  {
    companyLogo: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="64" 
    height="64" 
    viewBox="0 0 512 319.382" 
    shape-rendering="geometricPrecision" 
    text-rendering="geometricPrecision" 
    image-rendering="optimizeQuality" 
    fill-rule="evenodd" 
    clip-rule="evenodd"
>
    <path 
        fill="#146EF5" 
        d="M512 0L348.627 319.382H195.172l68.375-132.364h-3.071C204.072 260.235 119.911 308.437 0 319.382V188.849s76.71-4.533 121.808-51.945H0V.007h136.897v112.594l3.071-.013L195.91.007h103.535V111.89l3.071-.006L360.557 0H512z"
    />
</svg>
`,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    tags: [
      { label: "Full-Time", type: "status" },
      { label: "Marketing", type: "category" },
      { label: "Design", type: "skill" },
    ],
  },
];

export const JobsSection = () => {
  return (
    <section className="w-full bg-[#F8F8FD] relative overflow-hidden px-[124px] py-20 max-md:px-[60px] max-sm:px-5">
      <div className="absolute w-[860px] h-[794px] z-[1] pointer-events-none right-0 top-0">
        <div
        
          dangerouslySetInnerHTML={{
            __html: `<svg id="I0:2037;292:8665" layer-name="Pattern" width="797" height="877" viewBox="0 0 797 877" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path opacity="0.6" d="M328.972 -72.173L615.806 -212.02L617.987 -3.74798L329.227 135.94L328.972 -72.173Z" fill="#F8F8FD" stroke="#CCCCF5" stroke-width="4"></path> <path d="M261.005 590.224L816.767 306.268L816.767 646.273L261.229 928.43L261.005 590.224Z" fill="#F8F8FD" stroke="#CCCCF5" stroke-width="4"></path> <path d="M2.00481 957.244L517.767 703.214L517.767 1013.25L2.22902 1265.48L2.00481 957.244Z" fill="#F8F8FD" stroke="#CCCCF5" stroke-width="4"></path> </svg>`,
          }}
        />
      </div>
      <div className="relative z-[2]">
        <header className="flex justify-between items-end mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-6">
          <h2 className="text-5xl leading-[52.8px] max-md:text-[40px] max-sm:text-[32px]">
            <span className="text-[#25324B]">Latest</span>{" "}
            <span className="text-[#26A4FF]">jobs open</span>
          </h2>
          <a
            href="#"
            className="flex items-center gap-4 text-[#4640DE] hover:opacity-90 transition-opacity"
          >
            <span className="font-semibold text-base">Show all jobs</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="I0:2037;668:14675" layer-name="Icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M19.75 11.7256L4.75 11.7256" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
              }}
            />
          </a>
        </header>
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <div className="flex flex-col gap-4">
            {JOBS_DATA.slice(0, 4).map((job, index) => (
                //@ts-ignore
              <JobCard key={`col1-${index}`} {...job} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {JOBS_DATA.slice(4).map((job, index) => (
                //@ts-ignore
              <JobCard key={`col2-${index}`} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
