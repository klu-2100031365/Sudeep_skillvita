"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

interface Benefit {
  title: string
  description: string
  category: string
  image: string
}

const benefits: Benefit[] = [
  {
    title: "Learn Skills Together",
    description: "Interactive, real-time sessions with peers who share your interests and ambitions",
    category: "Learning",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Vibrant Peer Network",
    description: "Connect with like-minded students building the future together",
    category: "Community",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Hands-On Projects",
    description: "Build real projects and participate in hackathons across all domains",
    category: "Experience",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Portfolio-Driven",
    description: "Every contribution becomes verified proof-of-work in your growing portfolio",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Mentorship & Guidance",
    description: "Expert-led workshops, mentor hours, and personalized capability insights",
    category: "Support",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Real Opportunities",
    description: "Priority access to internships, freelancing, and skill-based challenges",
    category: "Career",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2487&auto=format&fit=crop",
  },
]

export function CommunityBenefitsShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-16 rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundImage: hoveredIndex !== null ? `url(${benefits[hoveredIndex].image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        }}
      />
      
      <div className="relative space-y-0">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="group block cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 border-t border-zinc-800">
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-zinc-900/30 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-white font-semibold text-xl tracking-tight">
                      <span className="relative">
                        {benefit.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-[#22c55e]
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`
                        w-4 h-4 text-zinc-400
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0 text-[#22c55e]"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  <p
                    className={`
                      text-zinc-400 text-base mt-2 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-zinc-300" : "text-zinc-400"}
                    `}
                  >
                    {benefit.description}
                  </p>
                </div>

                <span
                  className={`
                    text-xs font-medium text-zinc-500 tabular-nums px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-[#22c55e] border-[#22c55e]/30" : ""}
                  `}
                >
                  {benefit.category}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="border-t border-zinc-800" />
      </div>
    </section>
  )
}
