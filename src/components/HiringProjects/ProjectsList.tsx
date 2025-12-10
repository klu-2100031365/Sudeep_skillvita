"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectsList() {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Explore Student Projects
          </h2>
          <p className="text-zinc-400 text-lg">
            Browse through verified projects completed by SkillVita students
          </p>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto rounded-full shadow-[0_0_10px_#22c55e] mt-6"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-16 text-center">
            <div className="w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] mb-6 mx-auto border border-zinc-700">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Projects Coming Soon</h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              We&apos;re currently curating an extensive list of student projects. Check back soon to explore verified work from talented students across multiple domains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
