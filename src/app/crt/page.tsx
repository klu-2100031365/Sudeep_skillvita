import { PartnershipHero } from "@/components/CollegePartnership/PartnershipHero";
import { PartnershipOverview } from "@/components/CollegePartnership/PartnershipOverview";
import { ModernCollegeNeeds } from "@/components/CollegePartnership/ModernCollegeNeeds";
import { NewStandard } from "@/components/CollegePartnership/NewStandard";
import { WhyShiftMatters } from "@/components/CollegePartnership/WhyShiftMatters";
import { CRTProgram } from "@/components/CollegePartnership/CRTProgram";
import { StudentJourney } from "@/components/CollegePartnership/StudentJourney";
import { PartnershipWorkflow } from "@/components/CollegePartnership/PartnershipWorkflow";
import { PartnershipCta } from "@/components/CollegePartnership/PartnershipCta";

export default function CollegePartnership() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      <PartnershipHero />
      <PartnershipOverview />
      <ModernCollegeNeeds />
      <NewStandard />
      <WhyShiftMatters />
      <CRTProgram />
      <StudentJourney />
      <PartnershipWorkflow />
      <PartnershipCta />
    </div>
  );
}
