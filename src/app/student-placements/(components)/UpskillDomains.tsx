"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Settings,
  TrendingUp,
  Megaphone,
  Palette,
  FlaskConical,
  Briefcase,
} from "lucide-react";

const domains = [
  {
    name: "Technology",
    subtitle: "Full-stack & cloud development",
    icon: <Code className="w-4 h-4" />,
  },
  {
    name: "Product & Engineering",
    subtitle: "Build & ship innovative products",
    icon: <Settings className="w-4 h-4" />,
  },
  {
    name: "Business & Management",
    subtitle: "Strategy & operations leadership",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    name: "Marketing & Communication",
    subtitle: "Brand storytelling & campaigns",
    icon: <Megaphone className="w-4 h-4" />,
  },
  {
    name: "Creative & Design",
    subtitle: "UI/UX & visual design mastery",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    name: "Research & Analysis",
    subtitle: "Data insights & market research",
    icon: <FlaskConical className="w-4 h-4" />,
  },
  {
    name: "Operations & Finance",
    subtitle: "Process optimization & budgeting",
    icon: <Briefcase className="w-4 h-4" />,
  },
];

export default function UpskillDomains() {
  return (
    <section className="relative w-full py-20 px-4 bg-gray-50 dark:bg-[#09090B]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Scrolling Domains */}
        <div className="relative w-full max-w-sm mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-md shadow-xl rounded-2xl border-2">
            <CardContent className="relative h-[380px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-0 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 16,
                    ease: "linear",
                  }}
                >
                  {[...domains, ...domains].map((domain, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 px-6 py-4 border-b border-border relative hover:bg-accent/50 transition-colors"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 flex items-center justify-center text-brand-500 dark:text-brand-400">
                            {domain.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{domain.name}</p>
                            <p className="text-xs text-muted-foreground">{domain.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-card via-card/80 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none z-10" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            Career Pathways
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Upskill across{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              7 domains
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Choose from Technology, Product, Business, Marketing, Design, Research, or Operations. 
            Each domain offers structured learning paths with hands-on projects, mentorship, and 
            real-world simulations to prepare you for placements.
          </p>

          <div className="flex gap-2 flex-wrap">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              Role-Aligned Skills
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 border border-accent-200 dark:border-accent-800">
              Industry Projects
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-brand-100 to-accent-100 text-brand-700 dark:from-brand-900/30 dark:to-accent-900/30 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              Expert Mentors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
