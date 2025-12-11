"use client";
import Hero from "../../components/hiringportal/Hero";
import Overview from "../../components/hiringportal/Overview";
import WhySkillVita from "../../components/hiringportal/WhySkillVita";
import PortfolioDetail from "../../components/hiringportal/PortfolioDetail";
import Steps from "../../components/hiringportal/Steps";
import TalentPerformance from "../../components/hiringportal/TalentPerformance";
import Categories from "../../components/hiringportal/Categories";

export default function HiringPortalPage() {
  return (
    <main className="min-h-screen font-sans text-white bg-black selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden">
      <Hero
        eyebrow=""
        title={(
          <>
            Hire <span className="text-green-500 relative inline-block">
              Better
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span>
            </span>. <span className="text-green-500 relative inline-block">
              Faster
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span>
            </span>. <br className="hidden lg:block" />
            With <span className="text-white relative inline-block">Verified</span>{" "}
            <span className="text-green-500 relative inline-block">
              Proof-of-Work
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span>
            </span>.
          </>
        )}
        subtitle="Access a curated pipeline of job-ready students with portfolios built through real simulations, projects, team workflows, and capability assessments."
        ctaLabel="Start Hiring"
        ctaHref="#"
      />
      <Overview />
      <WhySkillVita />
      <PortfolioDetail />
      <Steps />
      <TalentPerformance />
      <Categories />
      
    </main>
  );
}
