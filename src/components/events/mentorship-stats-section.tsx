import { Users, Award, Code, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function MentorshipStats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">Mentorship</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                <span className="text-black dark:text-white">Guided Support Throughout Your </span>
                <span className="text-brand-500 dark:text-accent-500">Journey</span>
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 text-left">
                Our expert mentors provide real-time guidance during hackathons, helping teams overcome challenges, refine ideas, and build winning solutions. Get the support you need, when you need it.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Users className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  150+
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Active
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Expert mentors available
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Award className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  500+
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Success
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Teams mentored to victory
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Code className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  24/7
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Available
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Real-time support during events
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-[#E4E4E7] dark:border-[#27272A] rounded-xl hover:border-brand-400 dark:hover:border-accent-500 transition-colors bg-white dark:bg-[#18181B]">
                <Lightbulb className="w-5 h-5 mb-10 text-black dark:text-white" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-brand-500 dark:text-accent-500">
                  95%
                  <span className="text-gray-600 dark:text-gray-400 text-sm tracking-normal">
                    Rating
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 max-w-xl text-left">
                  Participant satisfaction rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MentorshipStats };
