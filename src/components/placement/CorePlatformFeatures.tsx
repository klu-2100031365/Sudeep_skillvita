import React from "react";
import { BentoGridWithFeatures, type BentoFeature } from "@/components/ui/bento-grid";

const platformFeatures: BentoFeature[] = [
  {
    id: "feature-0",
    title: "White-Label Web Application",
    description: "Fully branded placement portal with student, admin, and recruiter interfaces tailored to your institution.",
    content: <div className="mt-6" />,
    className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20"
  },
  {
    id: "feature-1",
    title: "Smart Job Distribution",
    description: "Single-click distribution across verified channels with instant notifications to eligible students.",
    content: <div className="mt-6" />,
    className: "col-span-1 md:col-span-3 lg:col-span-3 border-b dark:border-neutral-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
  },
  {
    id: "feature-2",
    title: "Automated Eligibility & Filtering",
    description: "No more spreadsheets—our system intelligently filters candidates based on academic and capability data.",
    content: <div className="mt-6" />,
    className: "col-span-1 md:col-span-3 lg:col-span-3 md:border-r dark:border-neutral-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20"
  },
  {
    id: "feature-3",
    title: "Real-Time Market Intelligence",
    description: "Stay ahead with insights on industry hiring trends, demand spikes, and skill gaps.",
    content: <div className="mt-6" />,
    className: "col-span-1 md:col-span-3 lg:col-span-3 dark:border-neutral-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20"
  },
];

export function CorePlatformFeatures() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-950/50 dark:via-black dark:to-gray-950/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800">
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Core Platform</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
              Core Platform Features
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything your institution needs to modernize placement operations and improve outcomes
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGridWithFeatures features={platformFeatures} />
      </div>
    </section>
  );
}
