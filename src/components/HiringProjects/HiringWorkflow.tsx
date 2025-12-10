"use client";
import React from "react";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";

const workflowSteps = [
  {
    imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 1",
    heading: "Explore Student Projects",
    description: "Browse ongoing and completed projects across tech, business, design, research, and more. View deliverables, timelines, and performance metrics to find the right talent."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 2",
    heading: "Choose or Submit a Problem Statement",
    description: "Select from SkillVita's library of ready-made industry problem statements OR submit your own custom challenge. SkillVita converts it into a structured, mentor-led project and assigns it to the right students."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    subheading: "Step 3",
    heading: "Track Student Progress in Real Time",
    description: "Get access to a smart dashboard showing task completions, milestones, mentor feedback, skill assessments, work quality, and project submissions—all in one place."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 4",
    heading: "Evaluate Capability Before Hiring",
    description: "Review final outputs, compare candidate performance, and shortlist with confidence. See real deliverables—code, designs, reports, or solutions—before making a hiring decision."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2487&auto=format&fit=crop",
    subheading: "Step 5",
    heading: "Hire the Best Fit",
    description: "Make hiring decisions backed by real proof-of-work, not assumptions. Every project is validated by SkillVita, ensuring authentic, structured, and reliable work."
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

const HiringWorkflow: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-8">
          <h5 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">The Process</h5>
          <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            A Transparent{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              Hiring Workflow
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            From exploring projects to hiring the best fit—our structured workflow gives you complete visibility into student capabilities.
          </p>
        </div>
      </div>

      {/* Parallax Scroll Steps */}
      {workflowSteps.map((step, index) => (
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

export default HiringWorkflow;
