"use client";
import React from "react";
import { BentoGridWithFeatures, type BentoFeature } from "@/components/ui/bento-grid";

export default function ProgramsEvents() {
  const programs: BentoFeature[] = [
    {
      id: "hackathons",
      title: "Hackathons (All Domains)",
      description: "Build products, solve challenges, and compete across tech, design, content, and more.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20"
    },
    {
      id: "bootcamps",
      title: "Bootcamps & Upskilling",
      description: "Intensive skill-building programs aligned with new-age technologies and market needs.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b dark:border-neutral-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      id: "simulations",
      title: "Real-World Project Simulations",
      description: "Experience actual job workflows and responsibilities in a safe learning environment.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-2 md:border-r dark:border-neutral-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
    {
      id: "mentor-tracks",
      title: "Mentor-Led Learning Tracks",
      description: "Guided pathways with industry experts helping you master skills step-by-step.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-2 md:border-r dark:border-neutral-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20"
    },
    {
      id: "tech-talks",
      title: "Tech Talks & Creative Jams",
      description: "Fireside sessions, skill challenges, and community-driven learning experiences.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-2 dark:border-neutral-800 bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-950/20 dark:to-rose-950/20"
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
            <span className="text-sm font-medium text-[#22c55e]">Programs & Events</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Learn, Build, and Become{" "}
            <span className="text-[#22c55e]">Industry-Ready</span>
          </h2>
          
          <p className="text-base md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            SkillVita offers programs and events that help students gain skills aligned with new-age technologies and market needs.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGridWithFeatures features={programs} />

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-2xl">
            <p className="text-lg text-white">
              Every event is designed with one goal:{" "}
              <span className="text-[#22c55e] font-semibold">
                Help students learn, build, and become industry-ready faster.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
