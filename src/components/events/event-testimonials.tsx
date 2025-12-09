'use client';

import { useEffect, useState } from 'react';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { eventTestimonials } from '@/data/event-data';

export function EventTestimonialsCarousel() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const colors = isDark ? {
    name: "#ffffff",
    designation: "#a3a3a3",
    testimony: "#d4d4d4",
    arrowBackground: "#ffffff",
    arrowForeground: "#000000",
    arrowHoverBackground: "#32FE6B",
  } : {
    name: "#000000",
    designation: "#525252",
    testimony: "#262626",
    arrowBackground: "#000000",
    arrowForeground: "#ffffff",
    arrowHoverBackground: "#014051",
  };

  return (
    <section className="w-full py-20 lg:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-black dark:text-white">What </span>
          <span className="text-brand-500 dark:text-accent-500">Witnesses </span>
          <span className="text-black dark:text-white">Say</span>
        </h2>
        
        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={eventTestimonials}
            autoplay={true}
            colors={colors}
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
