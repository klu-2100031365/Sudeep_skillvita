"use client";
import React from "react";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";

const urgencySteps = [
  {
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    subheading: "The Challenge",
    heading: "AI-Disrupted Job Market",
    description: "With over 40 million students enrolled annually across 50,000+ Indian colleges, placement competition has never been sharper. SkillVita positions your institution ahead with AI-powered automation that adapts to the rapidly evolving recruitment landscape. Stay competitive as traditional placement methods become obsolete."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    subheading: "Strategic Advantage",
    heading: "Data-Driven Decisions",
    description: "Make informed strategic choices backed by real-time analytics and comprehensive market intelligence. Our platform provides actionable insights on hiring trends, skill demand patterns, and placement outcomes—enabling curriculum improvements and stronger industry partnerships that directly impact student success."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop",
    subheading: "Future-Ready",
    heading: "Scalable Infrastructure",
    description: "Built to grow with your institution, our platform handles increasing complexity without manual overhead. From 500 to 5,000 students, the system scales seamlessly while maintaining speed and reliability. Future-proof your placement operations with technology designed for long-term institutional growth."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
    subheading: "Purpose-Built",
    heading: "For Educational Institutions",
    description: "Purpose-designed for placement cells, not adapted from generic HR software. Every feature addresses real placement challenges faced by colleges—from eligibility management to recruiter coordination. Benefit from continuous enhancement through feedback from leading institutions nationwide."
  },
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

export function WhyNowSection() {
  return (
    <section className="bg-white dark:bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-8">
          <h5 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">The Urgency</h5>
          <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Why Now —{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              Act Before It&apos;s Too Late
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            SkillVita positions your college ahead in an increasingly competitive placement landscape.
          </p>
        </div>
      </div>

      {/* Parallax Scroll Steps */}
      {urgencySteps.map((step, index) => (
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
}
