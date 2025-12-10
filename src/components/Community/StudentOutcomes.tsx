"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const cardVariants: Variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function StudentOutcomes() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Student {highlightKeywords("Outcomes")}</h2>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {[
            { title: "Stronger Skills", desc: "Develop essential skills in your interest domains through interactive, real-time sessions and collaborative hands-on projects with peers.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Real Portfolio", desc: "Build a portfolio full of verified proof-of-work that demonstrates your capabilities and becomes tangible evidence for recruiters.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            { title: "Placement Confidence", desc: "Gain interview readiness and confidence through mentorship, mock sessions, peer learning, and real-world exposure to industry expectations.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: "Industry Exposure", desc: "Understand industry expectations early through simulations, workshops, mentor guidance, and hands-on experience with modern tools and workflows.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { title: "Mentor Support", desc: "Get guidance and project experience from industry experts who provide feedback, direction, and help you grow faster through structured learning.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
            { title: "Real Opportunities", desc: "Priority access to internships, freelancing opportunities, skill challenges, and early-stage career pathways through the SkillVita ecosystem.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Peer Network", desc: "Connect with ambitious peers and creators building the future together in a vibrant, collaborative ecosystem powered by shared learning and growth.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            { title: "Verified Contributions", desc: "Every achievement, project, leadership role, and contribution becomes measurable proof in your SkillVita portfolio—evidence recruiters trust.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
          ].map((item, idx) => (
            <motion.div key={idx} variants={cardVariants} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative overflow-hidden">
              <div className="relative z-10 w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] mb-6 border border-zinc-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
              </div>
              <h3 className="relative z-10 text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">{highlightKeywords(item.desc)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
