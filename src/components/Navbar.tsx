import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-poppins font-bold text-primary">
                Edu<span className="text-accent">Next</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-dark hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#features" className="text-dark hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-dark hover:text-primary transition-colors">
              About
            </a>
            <Button variant="default" className="bg-accent hover:bg-accent-light">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#courses"
                className="block px-3 py-2 text-dark hover:text-primary transition-colors"
              >
                Courses
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-dark hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-dark hover:text-primary transition-colors"
              >
                About
              </a>
              <Button
                variant="default"
                className="w-full bg-accent hover:bg-accent-light mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;