export const Hero = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 max-w-[533px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2]">
            <span className="text-[#25324B]">
              <span>Discover</span>
              <br />
              <span>more than</span>
            </span>
            <br />
            <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h1>
          <p className="text-[#515B6F] text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 opacity-70 max-w-[521px]">
            Great platform for the job seeker that searching for new career heights
            and passionate about startups.
          </p>
        </div>
      </div>
    </section>
  );
};