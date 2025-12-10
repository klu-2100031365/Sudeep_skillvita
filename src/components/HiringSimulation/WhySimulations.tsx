"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
};
const staggerContainer: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } 
};

const benefits = [
  {
    title: "Shows Performance, Not Claims",
    description: "See how candidates actually execute tasks, not just what they claim to know. Each simulation reveals real working capability.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Demonstrates Execution Under Timelines",
    description: "Candidates work within structured deadlines, showing how they prioritize, manage time, and deliver under real-world pressure.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Reveals Communication and Reasoning",
    description: "Every deliverable includes documentation, explanations, and decision-making clarity—critical for workplace success.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  },
  {
    title: "Highlights Role Understanding",
    description: "Simulations are designed around real responsibilities, ensuring candidates understand what the job actually requires.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Provides Measurable, Structured Outputs",
    description: "No vague assessments. Every simulation produces concrete deliverables that can be reviewed and compared objectively.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Response to Feedback",
    description: "Candidates receive mentor feedback during simulations, and their ability to improve based on input is tracked and visible.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }
];

export default function WhySimulations() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Why Simulation Talent Works Better
          </h2>
          <p className="text-lg text-zinc-400 mt-4">
            You evaluate real capability, not resumes.
          </p>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto mt-6 rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              className="bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-[#22c55e]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] mb-6 border border-zinc-700 group-hover:bg-[#22c55e] group-hover:text-black transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon}></path>
                </svg>
              </div>
              <h3 className="relative z-10 text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
