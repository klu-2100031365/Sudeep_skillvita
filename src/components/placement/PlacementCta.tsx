'use client';

import { useState } from 'react';
import { CtaCard } from "@/components/ui/cta-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CollaborationForm from "@/components/ui/modern-payment-form";

export function PlacementCta() {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetStarted = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section id="contact" className="w-full py-20 lg:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <CtaCard
            title="Transform Your Placement Cell Today"
            subtitle="Join Leading Institutions Using SkillVita Placement Tech"
            description="Position your college ahead with modern, AI-powered infrastructure built for scale. From automated workflows to real-time market intelligence, we provide everything you need to revolutionize your placement operations and prepare students for the future of work."
            buttonText="Get Started"
            imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
            imageAlt="Students celebrating placement success on campus"
            onButtonClick={handleGetStarted}
          />
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-none shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Placement Tech Request</DialogTitle>
            <DialogDescription>
              Submit your institution details to get started with SkillVita Placement Tech
            </DialogDescription>
          </DialogHeader>
          <CollaborationForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
