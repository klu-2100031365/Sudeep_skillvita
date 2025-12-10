"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: "Step 1",
    title: "Onboarding & Branding",
    description: "Your college receives a fully branded placement portal with administrator access.",
  },
  {
    step: "Step 2",
    title: "Student & Data Setup",
    description: "Student profiles, academic data, and capability insights are set up in the system.",
  },
  {
    step: "Step 3",
    title: "Opportunity Pipeline Activation",
    description: "Job and internship opportunities flow into the portal in real time through our verified API ecosystem.",
  },
  {
    step: "Step 4",
    title: "Smart Matching & Distribution",
    description: "Students receive matched opportunities instantly with full clarity on eligibility and requirements.",
  },
  {
    step: "Step 5",
    title: "Tracking, Shortlisting & Reporting",
    description: "Placement teams track applications, shortlists, recruiter responses, and outcomes through one dashboard.",
  },
  {
    step: "Step 6",
    title: "Portfolio & Projects Integration",
    description: "Student performance, projects, and proof-of-work auto-update to strengthen placement readiness.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50 dark:bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            How It Works — Institutional Workflow
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From onboarding to operational excellence, we guide your institution every step of the way.
          </p>
        </div>

        {/* 2 Column Grid with Attached Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#E4E4E7] dark:border-[#27272A] rounded-xl overflow-hidden">
          {workflowSteps.map((item, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#18181B] p-8 group hover:bg-gray-50 dark:hover:bg-[#27272A]/50 transition-all duration-300
                ${index % 2 === 0 ? 'md:border-r border-[#E4E4E7] dark:border-[#27272A]' : ''}
                ${index < workflowSteps.length - 2 ? 'border-b border-[#E4E4E7] dark:border-[#27272A]' : ''}
              `}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-500 dark:bg-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-brand-600 dark:text-accent-500 uppercase tracking-wider mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
