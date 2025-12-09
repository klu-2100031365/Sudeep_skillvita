import { NetBackground } from '@/components/net-background';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] px-4 overflow-hidden">
      <NetBackground />
      <div className="relative z-10 max-w-6xl">
        <h1 className="text-5xl md:text-7xl text-black dark:text-white text-center tracking-wide">
          <span className="font-light">Mentoring the Next Generation </span>
          <span className="font-bold">of Builders</span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center mt-10 mb-12">
          Seek industry level mentorship and collaborations at right time
        </p>
        
        <div className="flex gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="text-base px-8 rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Explore More
          </Button>
          <Button 
            size="lg"
            className="text-base px-8 bg-brand-500 hover:bg-brand-600 text-accent-500 rounded-lg shadow-lg transition-all duration-300"
          >
            Request Now
          </Button>
        </div>
      </div>
    </section>
  );
}
