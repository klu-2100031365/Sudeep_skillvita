"use client";

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { EventTestimonialsSection } from '@/components/events/testimonials-section';
import { EventCtaSection } from '@/components/events/event-cta-section';
import { getEventBySlug } from '@/data/mentorship-events';
import Image from 'next/image';
import { use } from 'react';
import { Users, Award, Code, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassmorphismProfileCard } from "@/components/ui/profile-card";
import { notFound } from 'next/navigation';

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params for Next.js 15
  const { slug } = use(params);
  
  // Get event data
  const event = getEventBySlug(slug);
  
  // If event not found, show 404
  if (!event) {
    notFound();
  }

  const hasWinners = event.winners.length > 0;
  const hasRunners = event.runners.length > 0;
  const hasTopPerformers = event.topPerformers.length > 0;
  const hasOrganizers = event.organizers.length > 0;
  const hasAnyPerformers = hasWinners || hasRunners || hasTopPerformers || hasOrganizers;

  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      {/* Hero Section */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-black dark:text-white text-center tracking-wide font-bold mb-6">
                {event.title}
              </h1>
              
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
                {event.about}
              </p>
            </>
          }
        >
          <Image
            src={event.heroImage}
            alt={event.title}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      
      {/* Stats Section */}
      <div className="w-full py-20 lg:py-40 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">Event Impact</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                  <span className="text-black dark:text-white">Making a Real </span>
                  <span className="text-brand-500 dark:text-accent-500">Difference</span>
                </h2>
                <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 text-left">
                  {event.about}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
                <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                  <Users className="w-5 h-5 mb-10 text-black dark:text-white" />
                  <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                    {event.stats.mentors}
                    <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                      Mentors
                    </span>
                  </h2>
                  <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                    Expert mentors available
                  </p>
                </div>
                <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                  <Award className="w-5 h-5 mb-10 text-black dark:text-white" />
                  <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                    {event.stats.participants}
                    <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                      People
                    </span>
                  </h2>
                  <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                    Participants attended
                  </p>
                </div>
                <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                  <Code className="w-5 h-5 mb-10 text-black dark:text-white" />
                  <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                    {event.stats.support}
                    <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                      Support
                    </span>
                  </h2>
                  <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                    Real-time support provided
                  </p>
                </div>
                <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                  <Lightbulb className="w-5 h-5 mb-10 text-black dark:text-white" />
                  <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                    {event.stats.satisfaction}
                    <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                      Rating
                    </span>
                  </h2>
                  <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                    Participant satisfaction rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      {event.testimonials.length > 0 && (
        <div className="w-full py-20 bg-gray-50 dark:bg-[#09090B]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-black dark:text-white">What </span>
              <span className="text-brand-500 dark:text-accent-500">Participants Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {event.testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl bg-white dark:bg-[#18181B]">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-black dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Performers Section */}
      {hasAnyPerformers && (
        <section className="w-full py-20 lg:py-32 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-black dark:text-white">Event </span>
              <span className="text-brand-500 dark:text-accent-500">Achievers</span>
            </h2>

            <Tabs defaultValue={hasWinners ? "winners" : hasRunners ? "runners" : hasTopPerformers ? "top" : "organizers"} className="w-full">
              <TabsList className={`grid w-full max-w-2xl mx-auto mb-12 ${hasWinners && hasRunners && hasTopPerformers && hasOrganizers ? 'grid-cols-4' : hasWinners && hasRunners && hasTopPerformers ? 'grid-cols-3' : hasWinners && hasRunners ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {hasWinners && <TabsTrigger value="winners">Winners</TabsTrigger>}
                {hasRunners && <TabsTrigger value="runners">Runners-Up</TabsTrigger>}
                {hasTopPerformers && <TabsTrigger value="top">Top Performers</TabsTrigger>}
                {hasOrganizers && <TabsTrigger value="organizers">Organizers</TabsTrigger>}
              </TabsList>

              {hasWinners && (
                <TabsContent value="winners" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {event.winners.map((performer, index) => (
                      <GlassmorphismProfileCard key={index} {...performer} />
                    ))}
                  </div>
                </TabsContent>
              )}

              {hasRunners && (
                <TabsContent value="runners" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {event.runners.map((performer, index) => (
                      <GlassmorphismProfileCard key={index} {...performer} />
                    ))}
                  </div>
                </TabsContent>
              )}

              {hasTopPerformers && (
                <TabsContent value="top" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {event.topPerformers.map((performer, index) => (
                      <GlassmorphismProfileCard key={index} {...performer} />
                    ))}
                  </div>
                </TabsContent>
              )}

              {hasOrganizers && (
                <TabsContent value="organizers" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {event.organizers.map((organizer, index) => (
                      <GlassmorphismProfileCard key={index} {...organizer} />
                    ))}
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </section>
      )}

      <EventTestimonialsSection />
      <EventCtaSection />
    </div>
  );
}
