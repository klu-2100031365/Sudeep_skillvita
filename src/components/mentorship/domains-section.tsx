'use client';

import { useRef } from 'react';

const domains = [
  {
    title: 'Web Development',
    description: 'Master modern web technologies, frameworks, and best practices',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive user experiences',
    icon: '🎨',
  },
  {
    title: 'Agentic AI',
    description: 'Build intelligent agents and AI-powered systems',
    icon: '🤖',
  },
  {
    title: 'Mobile Development',
    description: 'Develop native and cross-platform mobile applications',
    icon: '📱',
  },
  {
    title: 'Cloud Computing',
    description: 'Deploy and scale applications on cloud infrastructure',
    icon: '☁️',
  },
  {
    title: 'Data Science',
    description: 'Extract insights from data using analytics and ML',
    icon: '📊',
  },
  {
    title: 'DevOps',
    description: 'Streamline development and deployment workflows',
    icon: '⚙️',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect systems and data from security threats',
    icon: '🔒',
  },
  {
    title: 'Blockchain',
    description: 'Build decentralized applications and smart contracts',
    icon: '⛓️',
  },
  {
    title: 'Game Development',
    description: 'Create immersive gaming experiences',
    icon: '🎮',
  },
  {
    title: 'AR/VR',
    description: 'Develop augmented and virtual reality applications',
    icon: '🥽',
  },
  {
    title: 'IoT',
    description: 'Connect and program Internet of Things devices',
    icon: '📡',
  },
];

export function DomainsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-black dark:text-white">Explore </span>
          <span className="text-brand-500 dark:text-accent-500">Domains</span>
        </h2>

      {/* Scrollable Carousel */}
      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {domains.map((domain, index) => (
          <div
            key={index}
            className="min-w-[calc(25%-18px)] w-[calc(25%-18px)] flex-shrink-0"
          >
            <div className="flex flex-col items-start justify-between p-6 rounded-xl border-2 border-[#E4E4E7] dark:border-[#27272A] h-full min-h-[200px] bg-white dark:bg-[#18181B] hover:border-brand-400 dark:hover:border-accent-500 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{domain.icon}</span>
                <h3 className="text-base font-semibold text-black dark:text-white">
                  {domain.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {domain.description}
              </p>
            </div>
          </div>
        ))}
      </div>


        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
