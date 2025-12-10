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

const outcomes = [
  {
    title: "Verified Capability Reports",
    description: "Each student's work comes with a SkillVita-validated breakdown of skills, execution quality, strengths, and improvement points.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Transparent, Skill-Based Evaluation",
    description: "See how candidates think, build, and solve — before an interview.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  },
  {
    title: "Faster Shortlisting",
    description: "Direct access to performance-driven insights reduces screening time significantly.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Reduced Hiring Risk",
    description: "Hiring based on real project outcomes ensures stronger matches and higher success rates.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Access to Mentored Talent",
    description: "Every student works under expert mentors, ensuring high-quality submissions and industry-standard execution.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }
];

export default function RecruiterOutcomes() {
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
            Recruiter Outcomes
          </h2>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {outcomes.map((outcome, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              className="bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] mb-6 border border-zinc-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={outcome.icon}></path>
                </svg>
              </div>
              <h3 className="relative z-10 text-lg font-bold text-white mb-3">{outcome.title}</h3>
              <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
