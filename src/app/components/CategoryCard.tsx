"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  jobCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  jobCount,
}) => {
  const router = useRouter();

  return (
    <article
      className="flex flex-col items-start gap-8 flex-1 p-8 border border-[#D6DDEB] bg-white transition-all duration-300 ease-in-out hover:bg-[#F8FAFF] hover:scale-105 cursor-pointer rounded-lg"
      onClick={() => router.push(`/form/${title}`)}
    >
      <div className="w-12 h-12">{icon}</div>
      <div className="flex flex-col justify-center items-start gap-3">
        <h3 className="text-[#25324B] text-2xl font-semibold leading-[28.8px]">{title}</h3>
        <div className="flex items-center gap-4">
          <p className="text-[#7C8493] text-lg font-normal leading-[28.8px]">
            {jobCount} jobs available
          </p>
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.75 12.2256L4.75 12.2256"
                stroke="#25324B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.7002 6.20124L19.7502 12.2252L13.7002 18.2502"
                stroke="#25324B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};
