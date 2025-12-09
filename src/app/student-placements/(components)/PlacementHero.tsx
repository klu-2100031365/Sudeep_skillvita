"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface PlacementHeroProps {
  badge: string;
  headline: {
    line1: string;
    highlight: string;
    line2: string;
  };
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  onStartLearning: () => void;
}

const PlacementHero: React.FC<PlacementHeroProps> = ({ 
  badge,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  onStartLearning 
}) => {
  return (
    <div className="relative bg-white dark:bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-white to-accent-50/50 dark:from-brand-950/20 dark:via-black dark:to-accent-950/20"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 dark:opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(0 0 0 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-[128px]"></div>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-brand-200 dark:border-brand-800 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
              {badge}
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">{headline.line1}</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 dark:from-brand-400 dark:via-brand-300 dark:to-accent-400 bg-clip-text text-transparent">
                  {headline.highlight}
                </span>
                {" "}
                <span className="text-foreground">{headline.line2}</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {subheadline}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartLearning}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg text-base font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300"
            >
              {ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            {ctaSecondary && (
              <button
                onClick={onStartLearning}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border-2 border-border hover:bg-accent transition-all duration-300"
              >
                {ctaSecondary}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementHero;
