"use client";
import React from "react";
import { Zap, Users, Target, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Understand Real Workflows",
    description: "Candidates trained through simulations already know how to operate in structured, deadline-driven environments.",
  },
  {
    icon: Users,
    title: "Communicate Decisively",
    description: "Every simulation includes documentation and explanation requirements—ensuring clarity and professionalism.",
  },
  {
    icon: Target,
    title: "Adapt Quickly During Onboarding",
    description: "Simulation-trained candidates transition faster because they've practiced similar responsibilities before day one.",
  },
  {
    icon: CheckCircle2,
    title: "Deliver with Higher Consistency",
    description: "Structured task execution and mentor feedback build habits of quality, accountability, and iteration.",
  },
];

export function EnterpriseBenefits() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50 dark:bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Why Enterprises Prefer <span className="text-brand-500 dark:text-accent-500">Simulation-Trained Talent</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            They enter the job with practiced capability, not just theoretical preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
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
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
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
