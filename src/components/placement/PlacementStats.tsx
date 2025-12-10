import { Building2, Users, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function PlacementStats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                Placement Intelligence
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                <span className="text-black dark:text-white">Streamlined Operations, </span>
                <span className="text-brand-500 dark:text-accent-500">Better Outcomes</span>
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 text-left">
                Our platform eliminates manual workflows, provides real-time insights, and connects your students with the right opportunities at the right time.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Building2 className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  50K+
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Institutions
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Colleges across India
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Users className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  40M+
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Students
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Enrolled annually
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <TrendingUp className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  3x
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Faster
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Placement cycle time
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Award className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  85%
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Higher
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Student engagement rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlacementStats };
