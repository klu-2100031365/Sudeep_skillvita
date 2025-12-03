import { MoveUpRight, Users, Award, Code, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function MentorshipStats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-black text-white hover:bg-gray-800">Mentorship</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-black">
                Guided Support Throughout Your Journey
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-gray-700 text-left">
                Our expert mentors provide real-time guidance during hackathons, helping teams overcome challenges, refine ideas, and build winning solutions. Get the support you need, when you need it.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                <Users className="w-5 h-5 mb-10 text-black" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                  150+
                  <span className="text-gray-600 text-sm tracking-normal">
                    Active
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                  Expert mentors available
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                <Award className="w-5 h-5 mb-10 text-black" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                  500+
                  <span className="text-gray-600 text-sm tracking-normal">
                    Success
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                  Teams mentored to victory
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                <Code className="w-5 h-5 mb-10 text-black" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                  24/7
                  <span className="text-gray-600 text-sm tracking-normal">
                    Available
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                  Real-time support during events
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                <Lightbulb className="w-5 h-5 mb-10 text-black" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                  95%
                  <span className="text-gray-600 text-sm tracking-normal">
                    Rating
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
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
