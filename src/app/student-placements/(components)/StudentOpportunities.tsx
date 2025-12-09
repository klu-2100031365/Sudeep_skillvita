import React from "react";
import { BentoGridWithFeatures, type BentoFeature } from "@/components/ui/bento-grid";

interface Opportunity {
  title: string;
  icon: string;
  gradient: string;
}

interface StudentOpportunitiesProps {
  badge?: string;
  title: string;
  description: string;
  opportunities: Opportunity[];
  footerText?: string; // Optional, not used in component
}

const StudentOpportunities: React.FC<StudentOpportunitiesProps> = ({
  badge = "Opportunities",
  title,
  description,
  opportunities,
}) => {
  // Map opportunities to BentoFeature format - only show first 4 (2 rows)
  const bentoFeatures: BentoFeature[] = [
    // First row - 2 cards
    {
      id: "opp-0",
      title: opportunities[0]?.title,
      description: "Build real-world projects that demonstrate your technical capabilities and problem-solving skills.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      id: "opp-1",
      title: opportunities[1]?.title,
      description: "Complete industry-recognized certification challenges to validate your skills.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b dark:border-neutral-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
    },
    // Second row - 2 cards
    {
      id: "opp-2",
      title: opportunities[2]?.title,
      description: "Work on real industry tasks that mirror actual job responsibilities and workflows.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 md:border-r dark:border-neutral-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20"
    },
    {
      id: "opp-3",
      title: opportunities[3]?.title,
      description: "Collaborate in team environments with realistic workflows and project simulations.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 dark:border-neutral-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-950/50 dark:via-black dark:to-gray-950/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800">
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">{badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">{title}</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGridWithFeatures features={bentoFeatures} />
      </div>
    </section>
  );
};

export default StudentOpportunities;
