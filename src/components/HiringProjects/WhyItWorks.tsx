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
    title: "Real Skills, Proven Through Work",
    description: "Students work on industry-aligned tasks, simulations, and problem statements — giving you a clear view of their execution ability, thinking process, and technical depth.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Visibility Into Progress",
    description: "Track every student's journey — task completion, mentor feedback, project outcomes, and performance insights — all in one intuitive dashboard.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Custom Problem Statements From Recruiters",
    description: "You can post the exact challenge you want candidates to solve. SkillVita manages the entire process: onboarding students, guiding them, mentoring them, and delivering high-quality outputs.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  },
  {
    title: "Zero Guesswork in Hiring",
    description: "No more relying on resumes or vague claims. You see real deliverables, code, designs, reports, or solutions before making a hiring decision.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  },
  {
    title: "Consistent, Verified Proof-of-Work",
    description: "Every completed project is evaluated and validated by SkillVita, ensuring the work you review is authentic, structured, and reliable.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

export default function WhyItWorks() {
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
            Why Hiring Through SkillVita Projects Works
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
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              className="bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] mb-6 border border-zinc-700">
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
