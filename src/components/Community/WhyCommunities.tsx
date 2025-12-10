"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";
import { CommunityBenefitsShowcase } from "@/components/ui/community-benefits-showcase";

const fadeIn: Variants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
};

const staggerContainer: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } 
};


export default function WhyCommunities() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn} 
            className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center justify-center gap-2 text-[#22c55e]"
          >
            <span className="w-8 h-[2px] bg-[#22c55e]"></span> 
            Why SkillVita Communities
            <span className="w-8 h-[2px] bg-[#22c55e]"></span>
          </motion.h2>
          <motion.h3 
            variants={fadeIn} 
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Traditional Learning is {highlightKeywords("Isolated")}.<br />
            SkillVita Communities are {" "}
            <span className="text-[#22c55e]">Alive</span>
          </motion.h3>
          <motion.p 
            variants={fadeIn} 
            className="text-lg text-zinc-400 max-w-3xl mx-auto"
          >
            {highlightKeywords("Buzzing with collaboration, creativity, and hands-on learning. Connect, create, and grow with a community that believes in learning by doing.")}
          </motion.p>
        </motion.div>

        {/* Interactive Benefits Showcase */}
        <CommunityBenefitsShowcase />

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-4xl">
            <p className="text-xl text-white font-semibold mb-2">
              SkillVita Community = {" "}
              <span className="text-[#22c55e]">Skills + Mentorship + Projects + Opportunity</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
