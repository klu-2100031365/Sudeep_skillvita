"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
};
const staggerContainer: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } 
};

const steps = [
  {
    step: "01",
    title: "Explore Student Projects",
    description: "Browse ongoing and completed projects across tech, business, design, research, and more. View deliverables, timelines, and performance metrics.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    step: "02",
    title: "Choose or Submit a Problem Statement",
    description: "Select from SkillVita's library of ready-made industry problem statements to quickly evaluate candidates OR submit your own custom challenge that reflects the exact skills you want to test. SkillVita converts the selected problem statement into a structured, mentor-led project and assigns it to the right students for execution.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    step: "03",
    title: "Track Student Progress in Real Time",
    description: "Get access to a smart dashboard showing: Task completions, Milestones, Mentor feedback, Skill assessments, Work quality, and Project submissions.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    step: "04",
    title: "Evaluate Capability Before Hiring",
    description: "Review final outputs, compare candidate performance, and shortlist with confidence.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  },
  {
    step: "05",
    title: "Hire the Best Fit",
    description: "Make hiring decisions backed by real proof-of-work, not assumptions.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-[#22c55e]">
            The Process
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            How It Works — A Transparent Hiring Workflow for Recruiters
          </h3>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </motion.div>
        <motion.div 
          className="max-w-5xl mx-auto space-y-8" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {steps.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              className="relative flex flex-col md:flex-row gap-6 bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] border border-zinc-700 group-hover:bg-[#22c55e] group-hover:text-black transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl font-bold text-zinc-700 group-hover:text-[#22c55e] transition-colors">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
