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

export default function Overview() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn} 
            className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-[#22c55e]"
          >
            <span className="w-8 h-[2px] bg-[#22c55e]"></span> Overview
          </motion.h2>
          <motion.h3 
            variants={fadeIn} 
            className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight"
          >
            Evaluate Capability <span className="text-[#22c55e]">Before the Interview</span>
          </motion.h3>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <motion.p variants={fadeIn}>
              SkillVita enables capability-based hiring by revealing how candidates perform in structured, role-specific simulations. Recruiters gain visibility into execution quality, communication clarity, and problem-solving ability—supported by mentor evaluations and verified portfolios.
            </motion.p>
            <motion.p variants={fadeIn}>
              This reduces hiring risk and accelerates the selection of job-ready talent. You evaluate real capability, not resumes.
            </motion.p>
            <motion.p variants={fadeIn}>
              Every candidate presents verified proof-of-work through mentor-evaluated deliverables that demonstrate their ability to perform under real-world constraints.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
