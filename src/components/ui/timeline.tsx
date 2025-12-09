"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  showHeader?: boolean;
  headerTitle?: string;
  headerDescription?: string;
}

export const Timeline = ({ 
  data, 
  showHeader = false,
  headerTitle = "Changelog from my journey",
  headerDescription = "I've been working on Aceternity for the past 2 years. Here's a timeline of my journey."
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent dark:bg-transparent font-sans"
      ref={containerRef}
    >
      {showHeader && (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            {headerTitle}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            {headerDescription}
          </p>
        </div>
      )}

      <div ref={ref} className="relative max-w-5xl mx-auto pb-20 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-0 md:left-0 w-12 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400 flex items-center justify-center shadow-lg">
                <div className="h-6 w-6 rounded-full bg-white dark:bg-black" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-4xl font-bold bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-6 left-6 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-border to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-brand-500 via-accent-500 to-brand-600 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
