"use client";
import React from "react";

export default function PointsRewards() {
  const rewards = [
    {
      type: "Reputation Points",
      icon: "🏆",
      description: "Determine leadership eligibility",
      features: ["Build your standing", "Unlock leadership roles", "Showcase expertise"]
    },
    {
      type: "Governance Points",
      icon: "⚖️",
      description: "Influence community decisions",
      features: ["Vote on initiatives", "Shape community direction", "Strategic input"]
    },
    {
      type: "VitaCoins",
      icon: "💎",
      description: "Redeem for exclusive benefits",
      features: ["Courses & Certifications", "Mock Interviews", "Mentorship Sessions", "Premium Access"]
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-950/50 dark:via-black dark:to-gray-950/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800">
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Rewards System</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
              Your Growth is Measurable, Merit-Based, and Always Rewarded
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A transparent scoring system powers the entire SkillVita community experience.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between p-6 rounded-xl border-2 border-gray-200 dark:border-[#27272A] h-full min-h-[280px] bg-white dark:bg-[#18181B]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{reward.icon}</span>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {reward.type}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {reward.description}
                </p>
              </div>
              
              <div className="space-y-3 w-full">
                {reward.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-500 dark:text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-black dark:text-white mb-3">
              Every Contribution Counts
            </h4>
            <p className="text-muted-foreground max-w-2xl">
              From attending workshops to leading projects, your engagement translates into tangible rewards and recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
