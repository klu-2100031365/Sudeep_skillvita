import React from "react";

const benefits = [
  {
    title: "Verified Capability Reports",
    description: "Each student's work comes with a SkillVita-validated breakdown of skills, execution quality, strengths, and improvement points."
  },
  {
    title: "Transparent, Skill-Based Evaluation",
    description: "See how candidates think, build, and solve — before an interview."
  },
  {
    title: "Faster Shortlisting",
    description: "Direct access to performance-driven insights reduces screening time significantly."
  },
  {
    title: "Reduced Hiring Risk",
    description: "Hiring based on real project outcomes ensures stronger matches and higher success rates."
  },
  {
    title: "Access to Mentored Talent",
    description: "Every student works under expert mentors, ensuring high-quality submissions and industry-standard execution."
  },
  {
    title: "Custom Problem Statements",
    description: "Post your own challenges and see how candidates tackle problems specific to your needs."
  }
];

const RecruiterBenefits: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black dark:text-white mb-12">
          Recruiter <span className="text-accent-500">Benefits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
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
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterBenefits;
