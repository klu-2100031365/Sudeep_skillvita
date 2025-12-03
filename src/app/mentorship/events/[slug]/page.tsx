"use client";

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { MentorshipStats } from '@/components/events/mentorship-stats-section';
import { PerformersSection } from '@/components/events/performers-section';
import { EventTestimonialsCarousel } from '@/components/events/event-testimonials';
import { EventTestimonialsSection } from '@/components/events/testimonials-section';
import { EventCtaSection } from '@/components/events/event-cta-section';
import Image from 'next/image';
import { use } from 'react';

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params for Next.js 15
  const { slug } = use(params);
  
  // Convert slug back to readable title
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-black text-center tracking-wide font-bold mb-6">
                {title}
              </h1>
              
              <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto">
                Join us for an incredible learning experience and connect with industry experts
              </p>
            </>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80"
            alt={title}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      
      <MentorshipStats />
      <EventTestimonialsCarousel />
      <PerformersSection />
      <EventTestimonialsSection />
      <EventCtaSection />
    </div>
  );
}
