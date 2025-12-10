import { Users, CheckCircle2, Briefcase, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function SimulationStats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                Track Record
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                <span className="text-black dark:text-white">Proven Results in </span>
                <span className="text-brand-500 dark:text-accent-500">Simulation Training</span>
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 text-left">
                Multiple domain-specialized tracks with strong recruiter feedback on job-readiness and proven improvement in onboarding performance.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Users className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  6,000+
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Learners
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Trained through simulation workflows
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <CheckCircle2 className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  5+
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Domains
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Domain-specialized tracks
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Briefcase className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  High
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Quality
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Strong recruiter feedback
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <TrendingUp className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  Proven
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Impact
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Improved onboarding performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SimulationStats };
