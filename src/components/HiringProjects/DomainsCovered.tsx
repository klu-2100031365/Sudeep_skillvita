"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
};
const staggerContainer: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } 
};

const domains = [
  "Technology & Engineering",
  "Product & UI/UX Design",
  "Business, Strategy & Operations",
  "Marketing & Growth",
  "Creative & Content",
  "Data & Research",
  "Finance & Analytics",
  "Startup & Innovation Projects"
];

export default function DomainsCovered() {
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Domains Covered
          </h2>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </motion.div>
        <motion.div 
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {domains.map((domain, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              className="bg-zinc-900 px-6 py-4 rounded-xl border-2 border-zinc-800 text-center text-white font-semibold group transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] group-hover:shadow-[0_0_10px_#22c55e] transition-all"></span>
                {domain}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
