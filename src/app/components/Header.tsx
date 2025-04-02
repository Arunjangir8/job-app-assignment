import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex w-full justify-between items-center h-[78px] px-[124px] max-md:px-10 max-sm:px-5">
      <div className="flex justify-center items-center gap-12">
        <div className="flex items-center gap-2">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_3755)">
                <circle cx="16" cy="16" r="16" fill="#4640DE" />
                <mask id="path-2-inside-1_1_3755" fill="white">
                  <path d="M16 28C18.6652 28 21.3304 25.8953 23.0607 24.179C23.4599 23.7831 22.9792 23.2122 22.4822 23.4749C20.6013 24.469 18.0181 25.6 16 25.6C13.9819 25.6 11.3987 24.469 9.5178 23.4749C9.02076 23.2122 8.54012 23.7831 8.93926 24.179C10.6696 25.8953 13.3348 28 16 28Z" />
                </mask>
                <path
                  d="M23.0607 24.179L25.1734 26.3089L25.1734 26.3089L23.0607 24.179ZM8.93926 24.179L6.82658 26.3089L6.82658 26.3089L8.93926 24.179ZM9.5178 23.4749L10.9197 20.8226L10.9197 20.8226L9.5178 23.4749ZM22.4822 23.4749L21.0803 20.8226L21.0803 20.8226L22.4822 23.4749ZM20.948 22.0491C20.1783 22.8126 19.2652 23.5953 18.3201 24.1712C17.3491 24.7627 16.5672 25 16 25V31C18.098 31 19.9813 30.1849 21.4419 29.2951C22.9282 28.3895 24.2129 27.2616 25.1734 26.3089L20.948 22.0491ZM16 25C15.4328 25 14.6509 24.7627 13.6799 24.1712C12.7348 23.5953 11.8217 22.8126 11.052 22.0491L6.82658 26.3089C7.78708 27.2616 9.07177 28.3895 10.5581 29.2951C12.0187 30.1849 13.902 31 16 31V25ZM8.11593 26.1272C9.1314 26.6639 10.3827 27.2629 11.6934 27.7336C12.967 28.1911 14.4921 28.6 16 28.6V22.6C15.4899 22.6 14.7143 22.4434 13.7216 22.0868C12.7658 21.7436 11.7851 21.28 10.9197 20.8226L8.11593 26.1272ZM16 28.6C17.5079 28.6 19.033 28.1911 20.3066 27.7336C21.6173 27.2629 22.8686 26.6639 23.8841 26.1272L21.0803 20.8226C20.2149 21.28 19.2342 21.7436 18.2784 22.0868C17.2857 22.4434 16.5101 22.6 16 22.6V28.6ZM25.1734 26.3089C25.7674 25.7197 26.1776 24.8995 26.2071 23.9593C26.2356 23.0551 25.905 22.2526 25.4152 21.663C24.4114 20.4547 22.6321 20.0024 21.0803 20.8226L23.8841 26.1272C22.8293 26.6847 21.5389 26.3865 20.7999 25.4969C20.4425 25.0667 20.1883 24.4648 20.2101 23.7708C20.2331 23.0407 20.5536 22.4403 20.948 22.0491L25.1734 26.3089ZM11.052 22.0491C11.4464 22.4403 11.7669 23.0407 11.7899 23.7708C11.8117 24.4648 11.5575 25.0667 11.2001 25.4969C10.4611 26.3865 9.17068 26.6847 8.11593 26.1272L10.9197 20.8226C9.36787 20.0024 7.5886 20.4547 6.58483 21.663C6.09504 22.2526 5.76443 23.0551 5.79286 23.9593C5.82241 24.8995 6.23259 25.7197 6.82658 26.3089L11.052 22.0491Z"
                  fill="white"
                  mask="url(#path-2-inside-1_1_3755)"
                />
                <circle
                  cx="15.8055"
                  cy="14.1945"
                  r="7.49047"
                  transform="rotate(-90 15.8055 14.1945)"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.4043 8.98475L24.3333 6.04806"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3755">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-[#25324B] text-2xl font-bold leading-9 tracking-[-0.24px]">
            JobHuntly
          </div>
        </div>
        <nav className="flex justify-center items-center gap-4 max-md:hidden">
          <a
            href="#"
            className="text-[#515B6F] text-base font-medium leading-[25.6px]"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-[#515B6F] text-base font-medium leading-[25.6px]"
          >
            Browse Companies
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4 max-sm:hidden">
        <button className="text-[#4640DE] text-base font-bold px-6 py-3">
          Login
        </button>
        <div className="w-px h-12 bg-[#D6DDEB]" />
        <button className="bg-[#4640DE] text-white text-base font-bold px-6 py-3">
          Sign Up
        </button>
      </div>
      <button className="hidden max-sm:block">
        <Menu className="h-6 w-6 text-[#25324B]" />
      </button>
    </header>
  );
};
