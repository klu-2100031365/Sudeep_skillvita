"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};


export default function CommunityHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], opacity: [0.15, 0.25, 0.15] }} 
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }} 
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-600 rounded-full filter blur-[120px] opacity-20 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }} 
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", delay: 1 }} 
        className="absolute bottom-[-10%] left-[-20%] w-[700px] h-[700px] bg-brand-900 rounded-full filter blur-[120px] opacity-10 pointer-events-none" 
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left" 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_10px_#22c55e]"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-zinc-300">
                {highlightKeywords("SkillVita Student Community")}
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeIn} 
              className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-white"
            >
              Where Skills, Community, and{" "}
              <span className="text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                Real-World Learning
              </span>{" "}
              Come Together
            </motion.h1>

            <motion.p 
              variants={fadeIn} 
              className="text-lg lg:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {highlightKeywords("Join a fast-growing skill-based student ecosystem designed for future-ready learners. Learn with peers, work on projects, earn credentials, and unlock real opportunities.")}
            </motion.p>

            <motion.div 
              variants={fadeIn} 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button 
                className="px-8 py-4 rounded-full bg-[#22c55e] text-black font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <span className="flex items-center gap-2">
                  Join the Community
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </button>

              <button 
                className="px-8 py-4 rounded-full bg-transparent border border-zinc-700 text-zinc-300 font-semibold text-lg"
              >
                Explore Spaces
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full relative perspective-1000" 
            initial={{ opacity: 0, x: 50, rotateY: 10 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
          >
            <div 
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900"
            >
              <div className="aspect-[4/3] relative bg-zinc-900 overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop" 
                  alt="Students collaborating in community" 
                  className="w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              </div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 1, duration: 0.5 }} 
                className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-zinc-800 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-brand-900/50 p-2 rounded-full text-[#22c55e] border border-brand-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 uppercase">Active Members</p>
                    <p className="text-sm font-bold text-white">{highlightKeywords("5000+ Students")}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }} 
              className="absolute -bottom-10 -right-10 w-48 h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzZjNmNDYiLz48L3N2Zz4=')] opacity-30 z-0 pointer-events-none"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
