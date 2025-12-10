import { PlacementHero } from "@/components/placement/PlacementHero";
import { IntroSection } from "@/components/placement/IntroSection";
import { WhyPlacementMatters } from "@/components/placement/WhyPlacementMatters";
import { CorePlatformFeatures } from "@/components/placement/CorePlatformFeatures";
import { PlacementStats } from "@/components/placement/PlacementStats";
import { ValueSection } from "@/components/placement/ValueSection";
import { WhyNowSection } from "@/components/placement/WhyNowSection";
import { HowItWorks } from "@/components/placement/HowItWorks";
import PlacementTestimonialsEditorial from "@/components/placement/PlacementTestimonialsEditorial";
import { PlacementCta } from "@/components/placement/PlacementCta";

export default function PlacementForColleges() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      <PlacementHero />
      <IntroSection />
      <WhyPlacementMatters />
      <CorePlatformFeatures />
      <HowItWorks />
      <PlacementStats />
      <ValueSection />
      <WhyNowSection />
      <PlacementTestimonialsEditorial />
      <PlacementCta />
    </div>
  );
}
