import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-[#E5E7EB] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="Quantelio Logo"
                className="h-10 w-10 mr-3 object-contain"
              />
              <span className="ml-0 text-xl font-bold text-[#1D4ED8]">
                Quantelio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-[#1D4ED8] font-semibold"
                      : "text-[#1F2937] hover:text-[#1D4ED8]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1F2937] hover:text-[#1D4ED8] focus:outline-none focus:text-[#1D4ED8]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#E5E7EB]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
