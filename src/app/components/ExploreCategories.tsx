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
          <button className="text-[#4640DE] text-center text-base font-semibold leading-[25.6px]">
            Show all jobs
          </button>
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
        </div>
      </header>
      <CategoryGrid />
    </section>
  );
};
