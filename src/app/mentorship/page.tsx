import { HeroSection } from '@/components/mentorship/hero-section';
import { DomainsSection } from '@/components/mentorship/domains-section';
import { WinnersSection } from '@/components/mentorship/winners-section';
import { EventsSection } from '@/components/mentorship/events-section';
import { EventCtaSection } from '@/components/events/event-cta-section';

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div className="w-full px-8 md:px-16">
        <hr className="border-t border-gray-200" />
      </div>
      <DomainsSection />
      <WinnersSection />
      <EventsSection />
      <EventCtaSection />
    </div>
  );
}
