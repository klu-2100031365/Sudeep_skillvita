"use client";
import React from "react";

export function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-black dark:to-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="group relative">
          {/* Hover gradient effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-500 via-accent-500 to-brand-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
          
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Content */}
            <div className="space-y-8">
              {/* The Challenge */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
                  The Challenge
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Most institutions still manage placements through manual, fragmented processes spread across email, WhatsApp, forms, and Excel sheets. This leads to timing disadvantages, low student engagement, lost opportunities, and a lack of reliable data for strategic decision-making.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

              {/* The Solution */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
                  The SkillVita Solution
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  SkillVita centralizes your entire placement workflow, enhances student-job matching, delivers real-time market insights, and provides an AI-powered foundation for long-term placement transformation. With a scalable platform built specifically for educational institutions, we prepare your campus for a competitive, AI-disrupted job market.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-brand-500/10 to-transparent rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent-500/10 to-transparent rounded-br-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
