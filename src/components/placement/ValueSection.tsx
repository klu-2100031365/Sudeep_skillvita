"use client";
import React from "react";
import { Zap, TrendingUp, Target, Database } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Streamlined Placement Operations",
    description: "Reduce manual workload and eliminate repetitive tasks.",
  },
  {
    icon: TrendingUp,
    title: "Higher Student Participation",
    description: "Students receive personalized alerts and recommendations that keep them engaged.",
  },
  {
    icon: Target,
    title: "Better Role Fit & Placement Quality",
    description: "Matching algorithms ensure improved application quality and higher conversion rates.",
  },
  {
    icon: Database,
    title: "Data-Backed Placement Strategy",
    description: "Placement insights drive academic decisions, curriculum improvements, and industry partnerships.",
  },
];

export function ValueSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50 dark:bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Institution <span className="text-brand-500 dark:text-accent-500">Outcomes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A Placement System That Works for You
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 mt-1">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" className="fill-brand-100 dark:fill-brand-900/30" />
                    <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-500" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
