"use client";
import React, { useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "White-Label Institution Portal",
    desc: "Fully branded placement portal with student, admin, and recruiter interfaces",
    icon: "/images/landing/blocks.png",
    gif: "/images/landing/gifs/gaming.gif",
  },
  {
    title: "Smart Job Distribution",
    desc: "Single-click distribution with instant notifications to eligible students",
    icon: "/images/landing/search.png",
    gif: "/images/landing/gifs/curriculam.gif",
  },
  {
    title: "Intelligent Candidate Matching",
    desc: "AI-powered algorithms ensure right students see right opportunities",
    icon: "/images/landing/lecture.png",
    gif: "/images/landing/gifs/lecturer.gif",
  },
  {
    title: "Real-Time Market Intelligence",
    desc: "Insights on skill demand trends, salary benchmarks, and hiring behavior",
    icon: "/images/landing/book.png",
    gif: "/images/landing/gifs/book.gif",
  },
  {
    title: "Automated Eligibility Filtering",
    desc: "No more spreadsheets—intelligent filtering based on academic data",
    icon: "/images/landing/certificate.png",
    gif: "/images/landing/gifs/certificate.gif",
  },
  {
    title: "Integrated Proof-of-Work",
    desc: "Students build portfolios with real projects that recruiters trust",
    icon: "/images/landing/suitcase.png",
    gif: "/images/landing/gifs/portfolio.gif",
  },
];

const PlacementFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-black" id="placement-features">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto text-center md:py-6 md:pb-6">
          <h2 className="text-center text-black dark:text-white mb-6 relative inline-block">
            <span className="text-xl md:text-3xl font-normal block">
              Why SkillVita Placement Tech?
            </span>
            <span className="text-xl md:text-3xl font-medium block mt-1 relative">
              Built for{" "}
              <span className="text-xl md:text-3xl font-medium relative inline-block">
                Modern Education
                <div className="relative w-full h-6 md:-mt-2 -mt-3 ml-0.5">
                  <Image
                    src="/images/landing/line.png"
                    alt="underline"
                    fill
                    loading="lazy"
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src="/images/landing/line-white.png"
                    alt="underline dark"
                    fill
                    loading="lazy"
                    className="object-contain hidden dark:block"
                  />
                  <div className="absolute md:-right-17 md:-top-16 w-10 h-10 -right-8.5 -top-6.5 md:w-20 md:h-20 rotate-[7deg]">
                    <Image
                      src="/images/landing/pencil.png"
                      alt="pencil"
                      fill
                      loading="lazy"
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src="/images/landing/pencil-white.png"
                      alt="pencil dark"
                      fill
                      loading="lazy"
                      className="object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {features.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={hoveredCard === i ? item.gif : item.icon}
                    alt="icon"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold text-black dark:text-white text-base">
                  {item.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm -mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-brand-950 dark:bg-brand-950/[0.8] text-white rounded-3xl flex flex-col justify-start text-center overflow-hidden relative">
            <div className="px-6 pt-8 pb-4 z-10">
              <h3 className="text-lg md:text-[22px] font-bold text-accent-500 mb-2">
                Ready to Transform Placements?
              </h3>
              <p className="text-[16px] font-light mb-5">
                Join leading institutions using{" "}
                <span className="font-bold">AI-powered placement automation</span>
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-black px-6 py-2 rounded-md text-[16px] font-semibold hover:opacity-90 transition"
              >
                Get Started
              </a>
            </div>

            <div className="w-full p-0 h-[240px] md:h-[280px] lg:h-[320px] relative mt-auto">
              <Image
                src="/images/landing/stairs.png"
                alt="stairs"
                fill
                loading="lazy"
                className="object-bottom object-fill"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {features.slice(2, 4).map((item, i) => (
              <div
                key={i}
                className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredCard(i + 2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={hoveredCard === i + 2 ? item.gif : item.icon}
                    alt="icon"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold text-black dark:text-white text-base">
                  {item.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm -mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {features.slice(4).map((item, i) => (
            <div
              key={i}
              className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300"
              onMouseEnter={() => setHoveredCard(i + 4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src={hoveredCard === i + 4 ? item.gif : item.icon}
                  alt="icon"
                  fill
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-black dark:text-white text-base">
                {item.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm -mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementFeatures;
