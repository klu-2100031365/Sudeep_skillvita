'use client';

import * as React from 'react';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';
import { galleryItems } from '@/data/event-data';
import Image from 'next/image';

// --- Reusable Card Component ---
const TestimonialCard = ({ feedback, mainImage }: { profileImage: string; name: string; feedback: string; mainImage: string }) => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={mainImage}
      alt={feedback}
      width={800}
      height={1200}
      className="w-full h-auto object-cover"
    />
  </div>
);

// --- Testimonials Section Component ---
export function EventTestimonialsSection() {
  const [columns, setColumns] = React.useState(4);

  // Function to determine columns based on screen width
  const getColumns = (width: number) => {
    if (width < 640) return 1;    // sm
    if (width < 1024) return 2;   // lg
    if (width < 1280) return 3;   // xl
    return 4;                     // 2xl and up
  };

  React.useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize(); // Set initial columns on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full min-h-screen py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-black dark:text-white">Event </span>
          <span className="text-brand-500 dark:text-accent-500">Gallery</span>
        </h2>
        <MasonryGrid columns={columns} gap={2}>
          {galleryItems.map((card, index) => (
            <TestimonialCard key={index} {...card} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}
