import React from "react";
import { CategoryGrid } from "./CategoryGrid";

export const ExploreCategories: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-12 bg-white pt-[72px] pb-0 px-[124px] max-md:pt-12 max-md:pb-0 max-md:px-16 max-sm:pt-8 max-sm:pb-0 max-sm:px-6">
      <header className="flex justify-between items-end w-full max-sm:flex-col max-sm:items-start max-sm:gap-6">
        <h2 className="text-5xl font-semibold leading-[52.8px] max-md:text-[40px] max-sm:text-[32px]">
          <span className="text-[#25324B]">Explore by </span>
          <span className="text-[#26A4FF]">category</span>
        </h2>
        <div className="flex justify-end items-center gap-4">
        <a
            href="#"
            className="flex items-center gap-4 text-[#4640DE] hover:text-[#3630BE] hover:underline transition-all duration-300 ease-in-out"
          >
            <span className="font-semibold text-base">Show all jobs</span>
            <div
              className="transition-transform duration-300 ease-in-out hover:translate-x-1"
              dangerouslySetInnerHTML={{
                __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.75 11.7256L4.75 11.7256" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
        <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
      </svg>`,
              }}
            />
          </a>
        </div>
      </header>
      <CategoryGrid />
    </section>
  );
};
