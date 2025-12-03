'use client';

import { useRef, useState } from 'react';

const winners = [
  {
    name: 'Alex Johnson',
    avatar: '👨‍💻',
    ring: 'ring-green-400',
    isHirable: true,
  },
  {
    name: 'Sarah Chen',
    avatar: '👩‍🎨',
    ring: 'ring-green-400',
    isHirable: true,
  },
  {
    name: 'Michael Smith',
    avatar: '👨‍🔬',
    ring: 'ring-green-400',
    isHirable: false,
  },
  {
    name: 'Emily Davis',
    avatar: '👩‍💼',
    ring: 'ring-green-400',
    isHirable: true,
  },
  {
    name: 'David Wilson',
    avatar: '👨‍🚀',
    ring: 'ring-green-400',
    isHirable: false,
  },
];

export function WinnersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showHireCursor, setShowHireCursor] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Custom Hire Cursor */}
        {showHireCursor && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="px-8 py-2.5 bg-black text-white text-base font-medium rounded-full shadow-lg">
            Hire Now
          </div>
        </div>
      )}
      <h2 className="text-2xl font-bold text-black mb-8">
        Winners
      </h2>

      {/* Scrollable Carousel */}
      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth py-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {winners.map((winner, index) => (
          <div
            key={index}
            className={`min-w-[110px] flex-shrink-0 ${index === 0 ? 'ml-4' : ''}`}
          >
            <div className="flex flex-col items-start">
              <div 
                className={`w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl ring-2 ${winner.ring} ${
                  winner.isHirable ? 'cursor-none' : ''
                }`}
                onMouseEnter={(e) => {
                  if (winner.isHirable) {
                    setShowHireCursor(true);
                  }
                }}
                onMouseLeave={() => {
                  if (winner.isHirable) {
                    setShowHireCursor(false);
                  }
                }}
                onMouseMove={(e) => {
                  if (winner.isHirable) {
                    setCursorPos({ x: e.clientX, y: e.clientY });
                  }
                }}
                onClick={() => {
                  if (winner.isHirable) {
                    window.location.href = 'https://skill.coursevita.com';
                  }
                }}
              >
                {winner.avatar}
              </div>
              <h3 className="text-xs font-semibold text-black text-left mt-2">
                {winner.name}
              </h3>
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
