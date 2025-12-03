'use client';

import { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassmorphismProfileCard } from "@/components/ui/profile-card";
import { Button } from "@/components/ui/button";
import { winners, runners, topPerformers, organizers } from '@/data/event-data';

export function PerformersSection() {
  const [showAllWinners, setShowAllWinners] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const displayedWinners = showAllWinners ? winners : winners.slice(0, 3);
  
  const handleToggleWinners = () => {
    if (showAllWinners && sectionRef.current) {
      // Scroll to top of section when closing
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAllWinners(!showAllWinners);
  };
  return (
    <section ref={sectionRef} className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Event Achievers
        </h2>

        <Tabs defaultValue="winners" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="winners">Winners</TabsTrigger>
            <TabsTrigger value="runners">Runners-Up</TabsTrigger>
            <TabsTrigger value="top">Top Performers</TabsTrigger>
            <TabsTrigger value="organizers">Organizers</TabsTrigger>
          </TabsList>

          <TabsContent value="winners" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {displayedWinners.map((performer, index) => (
                <GlassmorphismProfileCard key={index} {...performer} />
              ))}
            </div>
            {winners.length > 3 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleToggleWinners}
                  className="text-black font-medium hover:underline cursor-pointer"
                >
                  {showAllWinners ? 'Show Less' : `Show All (${winners.length})`}
                </button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="runners" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {runners.map((performer, index) => (
                <GlassmorphismProfileCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="top" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {topPerformers.map((performer, index) => (
                <GlassmorphismProfileCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="organizers" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {organizers.map((organizer, index) => (
                <GlassmorphismProfileCard key={index} {...organizer} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
