"use client";
import React from "react";
import { SimulationHero } from "@/components/HiringSimulation/SimulationHero";
import { SimulationIntro } from "@/components/HiringSimulation/SimulationIntro";
import { WhySimulationTalent } from "@/components/HiringSimulation/WhySimulationTalent";
import { SimulationFeatures } from "@/components/HiringSimulation/SimulationFeatures";
import RecruiterReceives from "@/components/HiringSimulation/RecruiterReceives";
import { SimulationStats } from "@/components/HiringSimulation/SimulationStats";
import { EnterpriseBenefits } from "@/components/HiringSimulation/EnterpriseBenefits";
import PlacementTestimonialsEditorial from "@/components/placement/PlacementTestimonialsEditorial";
import { PlacementCta } from "@/components/placement/PlacementCta";
import FAQs from "@/components/course-overview/faqs";

const simulationFAQs = [
  {
    question: "What are role simulations?",
    answer: "Role simulations are structured, mentor-evaluated tasks that mirror real job responsibilities. Students work through scenarios that test execution, communication, problem-solving, and role understanding."
  },
  {
    question: "How are simulations evaluated?",
    answer: "Each simulation deliverable is reviewed by experienced mentors for clarity, execution quality, and impact. Students receive detailed feedback and performance scores across multiple dimensions."
  },
  {
    question: "What roles are covered?",
    answer: "Simulations are built for Software Engineering, Product Management, Design, Marketing, and Operations roles. Each track is aligned with real-world responsibilities and industry expectations."
  },
  {
    question: "How do I access candidate portfolios?",
    answer: "Every simulation-trained candidate has a verified SkillVita portfolio containing all their work, evaluations, mentor feedback, and performance data. You receive direct access during the hiring process."
  },
  {
    question: "Why hire simulation-trained candidates?",
    answer: "They enter the job with practiced capability, not just theoretical knowledge. They understand real workflows, communicate decisively, and require less orientation during onboarding."
  },
  {
    question: "What makes SkillVita simulations different?",
    answer: "Our simulations are mentor-led, structured around real responsibilities, and produce verifiable deliverables. Every candidate's work is evaluated consistently, giving you objective, comparable data."
  }
];

export default function HiringSimulationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      <SimulationHero />
      <SimulationIntro />
      <WhySimulationTalent />
      <SimulationFeatures />
      <RecruiterReceives />
      <SimulationStats />
      <EnterpriseBenefits />
      <PlacementTestimonialsEditorial />
      <PlacementCta />
      <FAQs faqs={simulationFAQs} />
    </div>
  );
}
