"use client";
import React, { useState } from "react";

export const FooterNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="w-[362px] max-md:w-full">
      <div className="text-white text-lg font-semibold mb-[47px]">
        Get job notifications
      </div>
      <div className="text-[#D6DDEB] text-base leading-[25.6px]">
        The latest job news, articles, sent to your inbox weekly.
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 mt-10 max-sm:flex-col"
      >
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[223px] border text-base text-[#A8ADB7] px-4 py-3 border-solid border-[#D6DDEB] max-sm:w-full focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
          required
        />
        <button
          type="submit"
          className="text-white font-bold text-base cursor-pointer bg-[#4640DE] px-6 py-3 border-[none] max-sm:w-full hover:bg-[#3530A8] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
