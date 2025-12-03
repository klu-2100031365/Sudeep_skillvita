'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const events = [
  {
    title: 'Web3 Workshop',
    date: 'Dec 15, 2024',
    description: 'Learn blockchain development and smart contracts',
    image: '/events/web3-workshop.jpg',
  },
  {
    title: 'AI Hackathon',
    date: 'Dec 20, 2024',
    description: 'Build innovative AI solutions in 48 hours',
    image: '/events/ai-hackathon.jpg',
  },
  {
    title: 'Design Sprint',
    date: 'Dec 25, 2024',
    description: 'Master UI/UX design principles and tools',
    image: '/events/design-sprint.jpg',
  },
  {
    title: 'Cloud Computing Bootcamp',
    date: 'Jan 5, 2025',
    description: 'Deploy scalable applications on AWS and Azure',
    image: '/events/cloud-bootcamp.jpg',
  },
  {
    title: 'Mobile Dev Summit',
    date: 'Jan 10, 2025',
    description: 'Build cross-platform mobile applications',
    image: '/events/mobile-summit.jpg',
  },
];

export function EventsSection() {
  const router = useRouter();

  const handleEventClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/mentorship/events/${slug}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-2xl font-bold text-black mb-8">
          Events
        </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div 
            key={index}
            onClick={() => handleEventClick(event.title)}
            className="cursor-pointer"
          >
            <div className="flex flex-col rounded-xl border-2 border-gray-200 overflow-hidden h-full hover:border-gray-300 transition-colors">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  {event.date}
                </p>
                <p className="text-sm text-gray-600">
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
