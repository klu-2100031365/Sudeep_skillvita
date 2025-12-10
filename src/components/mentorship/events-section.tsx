'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { mentorshipEvents } from '@/data/mentorship-events';

export function EventsSection() {
  const router = useRouter();

  const handleEventClick = (slug: string) => {
    router.push(`/mentorship/events/${slug}`);
  };

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-black dark:text-white">Upcoming </span>
          <span className="text-brand-500 dark:text-accent-500">Events</span>
        </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentorshipEvents.map((event) => (
          <div 
            key={event.id}
            onClick={() => handleEventClick(event.slug)}
            className="cursor-pointer"
          >
            <div className="flex flex-col rounded-xl border-2 border-[#E4E4E7] dark:border-[#27272A] overflow-hidden h-full hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {event.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
