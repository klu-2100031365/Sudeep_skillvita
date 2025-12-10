"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Head of Placements - Engineering College",
    message:
      "SkillVita Placement Tech has transformed how we manage our placement cell. The automated workflows save us countless hours, and the intelligent matching ensures our students get opportunities that truly fit their skills. Our placement rates have improved by 40% since implementation.",
    avatar: "/images/landing/testimonials/gouthami.png",
  },
  {
    name: "Prof. Meera Sharma",
    title: "Dean - Business School",
    message:
      "The market intelligence features are game-changing. We now make curriculum decisions based on real-time industry demand data. The platform's insights help us stay ahead of hiring trends and prepare our students for roles that actually exist in the market.",
    avatar: "/images/landing/testimonials/saikiran.png",
  },
  {
    name: "Dr. Anand Patel",
    title: "Placement Officer - Technical Institute",
    message:
      "Student engagement has skyrocketed since we adopted SkillVita. The personalized opportunity matching means students receive relevant notifications, and the integrated project system helps them build portfolios that recruiters actually value. It's a complete solution.",
    avatar: "/images/landing/testimonials/aparna.jpg",
  },
  {
    name: "Prof. Lakshmi Iyer",
    title: "Director - College of Arts & Sciences",
    message:
      "The white-label portal perfectly aligns with our institution's branding, and the recruiter interface has improved our relationships with hiring partners. The entire placement cycle is now transparent, efficient, and data-driven. This is the future of placement management.",
    avatar: "/images/landing/testimonials/sheetal.png",
  },
];

const PlacementTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, 5000);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    autoplay();
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    autoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [emblaApi, onSelect, autoplay]);

  const handleArrowClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const handleBackClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  return (
    <div className="bg-white dark:bg-black">
      <section className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-12 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-white/90 dark:from-black/90 to-transparent" />
        </div>

        <div className="absolute top-0 right-0 h-full w-12 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-l from-white/90 dark:from-black/90 to-transparent" />
        </div>

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center relative z-10 mb-8">
          <h2 className="text-xl md:text-3xl text-black dark:text-white font-normal">
            Institutions trust SkillVita,
            <br />
            <span className="font-medium text-xl md:text-3xl">
              <span className="text-black dark:text-white">And we </span>empower
              their success!
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative z-10" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-sm md:min-w-3xl lg:min-w-4xl xl:min-w-6xl px-4 md:px-8 box-border"
              >
                <div className="bg-accent-50 dark:bg-[#18181B] border border-accent-200 dark:border-[#27272A] p-6 md:p-8 rounded-2xl
                text-gray-800 dark:text-gray-100">
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-12 h-12"
                    />
                    <div>
                      <h3 className="text-black dark:text-white font-bold text-lg lg:text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-normal text-xs lg:text-sm mb-4">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-800 dark:text-gray-300 font-normal text-sm lg:text-[16px]">
                        {testimonial.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Bar with Arrows */}
        <div className="mt-4 flex justify-center items-center gap-4 relative z-10">
          <button
            type="button"
            onClick={handleBackClick}
            aria-label="Previous testimonial"
            className="p-2 transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ArrowLeft
              className="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
            />
          </button>

          <div className="w-20 md:w-40 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-brand-500 dark:bg-accent-500 rounded-full transition-all duration-300"
              style={{
                width: `${100 / testimonials.length}%`,
                left: `${(100 / testimonials.length) * selectedIndex}%`,
                position: "absolute",
                top: 0,
              }}
            />
          </div>
          
          <button
            type="button"
            onClick={handleArrowClick}
            aria-label="Next testimonial"
            className="ml-2 p-2 transition rounded-full hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <ArrowRight
              className="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlacementTestimonials;
