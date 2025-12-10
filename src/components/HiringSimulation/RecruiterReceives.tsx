import React from "react";

const items = [
  {
    title: "Candidate Shortlists by Role",
    description: "Pre-filtered talent pools organized by domain and role type—ready for immediate evaluation."
  },
  {
    title: "Project Samples and Deliverables",
    description: "Complete access to actual work outputs—code, designs, reports, presentations, and more."
  },
  {
    title: "Clarity and Communication Evaluations",
    description: "Assessment of how well candidates document, explain, and articulate their work and decisions."
  },
  {
    title: "Mentor Insights",
    description: "Direct feedback from mentors on work quality, responsiveness, ability to iterate, and professionalism."
  },
  {
    title: "Capability Scorecards",
    description: "Structured performance metrics covering execution quality, technical depth, problem-solving, and collaboration."
  },
  {
    title: "Complete SkillVita Portfolio Links",
    description: "Verified digital portfolios containing all simulation work, evaluations, and progression history."
  }
];

const RecruiterReceives: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
          What Recruiters <span className="text-accent-500">Receive</span>
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          This reduces screening time and raises interview quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gray-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" className="fill-brand-100 dark:fill-brand-900/30" />
                  <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-500" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterReceives;
