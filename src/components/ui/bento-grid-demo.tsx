"use client"

import React from "react"
import Image from "next/image"
import {
  BentoGridWithFeatures,
  type BentoFeature,
} from "@/components/ui/bento-grid"

const getTimeOfDayGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning!"
  if (hour < 18) return "Good afternoon!"
  return "Good evening!"
}

export default function BentoGridDemo() {
  const timeOfDayGreeting = getTimeOfDayGreeting()

  const features: BentoFeature[] = [
    {
      id: "1",
      title: "About Us",
      description: `${timeOfDayGreeting} We are a team of experienced professionals dedicated to creating beautiful digital experiences.`,
      content: <SkeletonAbout />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-2 border-b md:border-r dark:border-neutral-800",
    },
    {
      id: "2",
      title: "UI Design",
      description:
        "Discover beautifully crafted typefaces for every creative project — from modern displays to vintage-inspired designs.",
      content: (
        <div className="mt-6 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl h-32 w-full" />
        </div>
      ),
      className:
        "col-span-1 md:col-span-3 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
    },
    {
      id: "3",
      title: "Agency Services",
      description:
        "Get agency-level designs without the agency price. A flat monthly rate for all your design needs.",
      content: (
        <div className="mt-6 flex items-center justify-center">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl h-32 w-full" />
        </div>
      ),
      className:
        "col-span-1 md:col-span-6 md:border-b lg:border-r-0 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      id: "4",
      title: "",
      description: "",
      content: (
        <div className="flex items-center justify-center h-full">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000"
            alt="Workspace"
            width={800}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      ),
      className:
        "col-span-1 md:col-span-6 lg:col-span-6 border-b lg:border-r-0 dark:border-neutral-800",
    },
    {
      id: "5",
      title: "Graphics",
      description: `Discover the essence of creativity in our exquisite collection of top-tier abstract design assets.`,
      content: (
        <div className="mt-6 flex items-center justify-center">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl h-32 w-full" />
        </div>
      ),
      className:
        "col-span-1 md:col-span-3 lg:col-span-2 md:border-r dark:border-neutral-800",
    },
    {
      id: "6",
      title: "Typography",
      description:
        "Discover beautifully crafted typefaces for every creative project — from modern displays to vintage-inspired lettering.",
      content: (
        <div className="mt-6 flex items-center justify-center">
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl h-32 w-full" />
        </div>
      ),
      className:
        "col-span-1 md:col-span-3 lg:col-span-2 lg:border-r dark:border-neutral-800",
    },
    {
      id: "7",
      title: "Visuals",
      description:
        "Discover beautifully websites for design and project — from modern displays to vintage-inspired designs.",
      content: (
        <div className="mt-6 flex items-center justify-center">
          <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl h-32 w-full" />
        </div>
      ),
      className:
        "col-span-1 md:col-span-6 lg:border-r-0 lg:col-span-2 dark:border-neutral-800",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Bento Grid
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A flexible bento grid layout for showcasing your work and services
        </p>
      </div>
      <BentoGridWithFeatures features={features} />
    </div>
  )
}

const SkeletonAbout = () => {
  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="group flex h-full w-full">
        <div className="relative w-full">
          <div className="group inline-block w-full text-center">
            <div
              className="w-full rounded-xl border-2 border-brand-500 p-2 transition-all duration-500 ease-out"
              style={{ height: 180 }}
            >
              <div
                className="grid h-full place-items-center rounded-lg border-2 border-brand-400 bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-950 dark:to-accent-950"
                style={{ boxShadow: "8px 8px 1px 0px rgb(var(--brand-500) / 0.3) inset" }}
              >
                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400">
                  SkillVita
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
