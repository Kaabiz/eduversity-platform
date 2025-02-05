import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Learn Without Limits
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Access world-class education from anywhere. Join our platform and start
            learning today with expert-led courses.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
              <Search className="w-5 h-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full px-4 py-2 focus:outline-none text-dark"
              />
              <Button className="bg-accent hover:bg-accent-light ml-2">
                Search
              </Button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-200">
            <div className="flex items-center">
              <span className="font-semibold mr-2">1000+</span> Courses
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">50K+</span> Students
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">4.8</span> Average Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;