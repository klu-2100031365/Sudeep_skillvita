"use client";
import React from "react";
import { Target, Clock, MessageSquare, Briefcase } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Target,
    title: "Shows Performance, Not Claims",
    description: "See how candidates actually execute tasks, not just what they claim to know. Each simulation reveals real working capability.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    icon: Clock,
    title: "Demonstrates Execution Under Timelines",
    description: "Candidates work within structured deadlines, showing how they prioritize, manage time, and deliver under real-world pressure.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
  },
  {
    icon: MessageSquare,
    title: "Reveals Communication and Reasoning",
    description: "Every deliverable includes documentation, explanations, and decision-making clarity—critical for workplace success.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
  },
  {
    icon: Briefcase,
    title: "Provides Measurable, Structured Outputs",
    description: "No vague assessments. Every simulation produces concrete deliverables that can be reviewed and compared objectively.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  },
];

export function WhySimulationTalent() {
  const slides = benefits.map((benefit, index) => {
    const Icon = benefit.icon;
    return (
      <Card 
        key={index}
        className="h-[400px] md:h-[450px] relative overflow-hidden border-2 border-border"
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient}`} />
        
        <CardContent className="relative h-full p-8 md:p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            {/* Icon with gradient */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} p-0.5 shadow-lg`}>
              <div className="w-full h-full bg-white dark:bg-[#18181B] rounded-[10px] flex items-center justify-center">
                <Icon className="w-8 h-8 text-black dark:text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${benefit.gradient} text-white`}>
                  0{index + 1}
                </span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                {benefit.title}
              </h4>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <div className="w-full py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#09090B] dark:to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-brand-100 text-brand-700 hover:bg-brand-200 dark:bg-brand-900/30 dark:text-brand-300 border-brand-200 dark:border-brand-800">
            The Advantage
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-black dark:text-white">Why Simulation Talent </span>
            <span className="bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
              Works Better
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Traditional hiring relies on resumes and interviews. Simulation-based hiring reveals actual capability through structured, mentor-evaluated work—before the first day.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-12 text-gray-600 dark:text-gray-400">
            You evaluate real capability, not resumes:
          </h3>
          <Carousel slides={slides} options={{ loop: true }} />
        </div>
      </div>
    </div>
  );
}
