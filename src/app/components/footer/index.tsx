import React from "react";
import { FooterLogo } from "./footer-logo";
import { FooterLinks } from "./footer-links";
import { FooterNewsletter } from "./footer-newsletter";
import { FooterBottom } from "./footer-bottom";

export const Footer = () => {
  return (
    <footer className="bg-[#202430] pt-[60px] pb-10 px-[124px] max-md:px-5 max-md:py-10 max-sm:px-4 max-sm:py-[30px]">
      <div className="flex justify-between max-w-[1192px] mx-auto my-0 max-md:flex-col max-md:gap-10">
        <FooterLogo />
        <FooterLinks />
        <FooterNewsletter />
      </div>
      <FooterBottom />
    </footer>
  );
};