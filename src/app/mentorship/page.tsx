import { HeroSection } from '@/components/mentorship/hero-section';
import { DomainsSection } from '@/components/mentorship/domains-section';
import { WinnersSection } from '@/components/mentorship/winners-section';
import { EventsSection } from '@/components/mentorship/events-section';
import { EventCtaSection } from '@/components/events/event-cta-section';

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-gray-200 dark:border-gray-800" />
      </div>
      <DomainsSection />
      <WinnersSection />
      <EventsSection />
      <EventCtaSection />
    </div>
  );
}
