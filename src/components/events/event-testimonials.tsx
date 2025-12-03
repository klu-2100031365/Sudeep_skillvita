'use client';

import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { eventTestimonials } from '@/data/event-data';

export function EventTestimonialsCarousel() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black">
          What Witnesses Say
        </h2>
        
        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={eventTestimonials}
            autoplay={true}
            colors={{
              name: "#0a0a0a",
              designation: "#454545",
              testimony: "#171717",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#6366f1",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "18px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
