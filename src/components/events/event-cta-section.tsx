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

export function EventCtaSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollaborate = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section className="w-full py-20 lg:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <CtaCard
            title="Partner With Us"
            subtitle="Invite Us to Your Campus or Event"
            description="Bring industry-leading hackathons and mentorship programs to your institution. We collaborate with universities and organizations to create transformative learning experiences that empower the next generation of innovators and builders."
            buttonText="Let's Collaborate"
            imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
            imageAlt="Students collaborating on campus during a tech event"
            onButtonClick={handleCollaborate}
          />
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-none shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Collaboration Request</DialogTitle>
            <DialogDescription>
              Submit your details to start collaborating with us
            </DialogDescription>
          </DialogHeader>
          <CollaborationForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
