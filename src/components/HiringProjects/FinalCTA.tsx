"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Start Hiring <span className="text-[#22c55e]">Smarter</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Find students who can actually do the work — with real output, real progress, and real skills.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px -5px rgba(34, 197, 94, 0.6)" }} 
              whileTap={{ scale: 0.95 }} 
              className="group relative px-8 py-4 rounded-full bg-[#22c55e] text-black font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                View Hiring Projects
                <motion.svg 
                  initial={{ x: 0 }} 
                  whileHover={{ x: 5 }} 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </motion.svg>
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "#22c55e", color: "#22c55e", backgroundColor: "rgba(34, 197, 94, 0.1)" }} 
              whileTap={{ scale: 0.95 }} 
              className="px-8 py-4 rounded-full bg-transparent border-2 border-zinc-700 text-zinc-300 font-semibold text-lg transition-all"
            >
              Post a Problem Statement
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
