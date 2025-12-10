"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CampusCommunities() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-[#22c55e]">
            Campus Communities
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Bringing the <span className="text-[#22c55e]">SkillVita Ecosystem</span> to Your Campus
          </h3>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Student-led innovation ecosystems structured like modern tech organizations, backed by SkillVita HQ&apos;s tools, training, and reward systems.
          </p>
        </motion.div>

        {/* Structure Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* The Node */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-800"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center border border-[#22c55e]/30">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">The Node</h4>
                <p className="text-sm text-[#22c55e] font-semibold">Leadership Core</p>
              </div>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              A small group selected through merit, not elections. They set monthly goals, coordinate initiatives, approve ideas, and ensure the community runs smoothly.
            </p>
            <div className="space-y-3">
              {["Set strategic goals", "Coordinate initiatives", "Approve community ideas", "Ensure smooth operations"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
                  <p className="text-sm text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Squads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-800"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center border border-[#22c55e]/30">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Squads</h4>
                <p className="text-sm text-[#22c55e] font-semibold">Execution Teams</p>
              </div>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Autonomous micro-teams that make learning hands-on and help students build portfolios with real outcomes.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Product Building",
                "Design & UX",
                "Content Creation",
                "Research & Insights",
                "Event Execution",
                "Operations & Community"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-zinc-800/50 p-2 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
                  <p className="text-xs text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Each campus runs as a <span className="text-[#22c55e]">modern tech organization</span>
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              With structured leadership, autonomous teams, and real execution that helps students build tangible portfolios and prepare for actual industry work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
