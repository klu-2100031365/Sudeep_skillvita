"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "SkillVita Placement Tech transformed how we manage our placement cell. The automated workflows save us countless hours, and the intelligent matching ensures our students get opportunities that truly fit their skills.",
    author: "Dr. Rajesh Kumar",
    role: "Head of Placements",
    company: "Engineering College",
    image: "/images/landing/testimonials/gouthami.png",
  },
  {
    id: 2,
    quote: "The market intelligence features are game-changing. We now make curriculum decisions based on real-time industry demand data. The platform's insights help us stay ahead of hiring trends.",
    author: "Prof. Meera Sharma",
    role: "Dean",
    company: "Business School",
    image: "/images/landing/testimonials/saikiran.png",
  },
  {
    id: 3,
    quote: "Student engagement has skyrocketed since we adopted SkillVita. The personalized opportunity matching means students receive relevant notifications, and the integrated project system helps them build portfolios that recruiters actually value.",
    author: "Dr. Anand Patel",
    role: "Placement Officer",
    company: "Technical Institute",
    image: "/images/landing/testimonials/aparna.jpg",
  },
  {
    id: 4,
    quote: "The white-label portal perfectly aligns with our institution's branding, and the recruiter interface has improved our relationships with hiring partners. The entire placement cycle is now transparent, efficient, and data-driven.",
    author: "Prof. Lakshmi Iyer",
    role: "Director",
    company: "College of Arts & Sciences",
    image: "/images/landing/testimonials/sheetal.png",
  },
]

export default function PlacementTestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleChange = useCallback((index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }, [active, isTransitioning])

  const handleNext = useCallback(() => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }, [active, handleChange])

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1
    handleChange(newIndex)
  }

  // Auto-play functionality with progress
  useEffect(() => {
    if (isPaused) return

    setProgress(0)
    const startTime = Date.now()
    const duration = 3000 // 3 seconds

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (elapsed >= duration) {
        clearInterval(progressInterval)
      }
    }, 16) // Update roughly 60fps

    const changeInterval = setTimeout(() => {
      handleNext()
    }, duration)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(changeInterval)
    }
  }, [active, isPaused, handleNext])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const current = testimonials[active]

  return (
    <section className="w-full py-20 lg:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Institutions <span className="text-brand-500 dark:text-accent-500">Trust</span> SkillVita
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leading placement cells share their experience transforming operations with our platform
          </p>
        </div>

        {/* Editorial Testimonial */}
        <div 
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large index number */}
          <div className="flex items-start gap-4 md:gap-8">
            <span
              className="text-[80px] md:text-[120px] font-light leading-none text-foreground/10 select-none transition-all duration-500"
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 pt-4 md:pt-6">
              {/* Quote */}
              <blockquote
                className={`text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground tracking-tight transition-all duration-300 ${
                  isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                }`}
              >
                {current.quote}
              </blockquote>

              {/* Author info with hover reveal */}
              <div
                className={`mt-8 md:mt-10 group cursor-default transition-all duration-300 delay-100 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-foreground/10 group-hover:ring-foreground/30 transition-all duration-300">
                    <Image
                      src={current.image}
                      alt={current.author}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base md:text-lg text-foreground">{current.author}</p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {current.role}
                      <span className="mx-2 text-foreground/20">/</span>
                      <span className="group-hover:text-foreground transition-colors duration-300">{current.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-500 dark:bg-accent-500 transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Navigation - horizontal line selector */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 md:gap-6 order-2 sm:order-1">
              <div className="flex items-center gap-2 md:gap-3">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => handleChange(index)} className="group relative py-3 md:py-4">
                    <span
                      className={`block h-px transition-all duration-500 ease-out ${
                        index === active
                          ? "w-10 md:w-12 bg-foreground"
                          : "w-5 md:w-6 bg-foreground/20 group-hover:w-7 md:group-hover:w-8 group-hover:bg-foreground/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1 order-1 sm:order-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
