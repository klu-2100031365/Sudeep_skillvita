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
            <span className="w-8 h-[2px] bg-[#22c55e]"></span> What is SkillVita Hiring Projects
          </motion.h2>
          <motion.h3 
            variants={fadeIn} 
            className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight"
          >
            A Dedicated Space for <span className="text-[#22c55e]">Recruiters</span> to Discover & Hire Emerging Talent
          </motion.h3>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <motion.p variants={fadeIn}>
              SkillVita Hiring Projects is a dedicated space for recruiters to discover, evaluate, and hire emerging talent based on actual project performance — not just resumes.
            </motion.p>
            <motion.p variants={fadeIn}>
              Every project on SkillVita is designed, reviewed, and monitored by our expert team, ensuring that recruiters see authentic skills, real capabilities, and verified proof-of-work. Whether you&apos;re hiring interns, junior roles, or project-based contributors, SkillVita gives you unmatched transparency into student capability.
            </motion.p>
            <motion.p variants={fadeIn}>
              If you have your own problem statement, simply submit it — our students will work on it under SkillVita mentorship, enabling you to assess their talent on your terms, using your real challenges.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
