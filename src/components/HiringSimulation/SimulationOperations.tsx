"use client";
import React from "react";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";

const operationSteps = [
  {
    imgUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 1",
    heading: "Role-Aligned Tracks",
    description: "Simulations built for Software, Product, Design, Marketing, and Operations roles. Each track mirrors real job responsibilities and challenges."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 2",
    heading: "Guided Task Execution",
    description: "Students work through structured tasks that reflect real responsibilities. Each task has clear objectives, timelines, and deliverable requirements."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 3",
    heading: "Mentor Evaluation",
    description: "Each deliverable reviewed for clarity, execution, and impact by experienced mentors. Feedback provided to ensure continuous improvement."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 4",
    heading: "Capability Summary",
    description: "Candidates receive performance scores, insights, and progression data. Complete visibility into strengths, weaknesses, and growth trajectory."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2673&auto=format&fit=crop",
    subheading: "Step 5",
    heading: "Portfolio Proof",
    description: "All work is consolidated into a verified SkillVita portfolio. Recruiters get direct access to real deliverables and performance data."
  }
];

const StepContent = ({ description }: { description: string }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12">
    <div className="col-span-1">
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const SimulationOperations: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-8">
          <h5 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">How It Works</h5>
          <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            How SkillVita{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              Simulations Operate
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            From structured task execution to verified portfolios—our simulation framework ensures every candidate is evaluated on real capability.
          </p>
        </div>
      </div>

      {/* Parallax Scroll Steps */}
      {operationSteps.map((step, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={step.imgUrl}
          subheading={step.subheading}
          heading={step.heading}
        >
          <StepContent description={step.description} />
        </TextParallaxContent>
      ))}
    </section>
  );
};

export default SimulationOperations;
