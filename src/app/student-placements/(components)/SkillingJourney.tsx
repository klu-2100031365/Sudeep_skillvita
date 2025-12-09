"use client";
import React from "react";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";

const journeySteps = [
  {
    imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    subheading: "Step 1",
    heading: "Build Your Profile",
    description: "Set up a clean, structured student profile that highlights your skills, interests, and goals. Start by identifying your strengths and career aspirations."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
    subheading: "Step 2",
    heading: "Build Skills Through Doing",
    description: "Strengthen your capability through guided, role-aligned tasks and hands-on execution. Learn by working on real-world projects that matter."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop",
    subheading: "Step 3",
    heading: "Create Proof-of-Work",
    description: "Complete projects and simulations that demonstrate real, job-ready skills. Build a portfolio that speaks for itself."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2487&auto=format&fit=crop",
    subheading: "Step 4",
    heading: "Strengthen Placement Readiness",
    description: "Refine your portfolio, communication, and clarity to prepare effectively for opportunities. Get ready to stand out in placements."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    subheading: "Step 5",
    heading: "Track Progress",
    description: "Every outcome becomes part of your SkillVita portfolio, helping you see growth clearly over time. Watch yourself improve with every step."
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

const SkillingJourney: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-8">
          <h5 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">Our Process</h5>
          <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Planning your{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              placement journey
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Our structured skilling journey begins with understanding where you are and creating a clear path forward.
          </p>
        </div>
      </div>

      {/* Parallax Scroll Steps */}
      {journeySteps.map((step, index) => (
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

export default SkillingJourney;
