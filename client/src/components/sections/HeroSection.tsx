import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  PlayCircle,
  ArrowRight,
  TrendingUp,
  Award,
  ArrowDown,
} from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Enhanced background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-element"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-lg floating-element"
          animate={{ y: [0, 30, 0], rotate: [0, -180, -360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full floating-element"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-blue-500/20 text-blue-100 border-blue-400/30 mb-4 px-4 py-2 text-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Leading SAP Consulting Firm
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Driving Digital
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Transformation
              </span>
              with SAP Excellence
            </h1>

            <p className="text-xl text-gray-100 leading-relaxed max-w-xl drop-shadow-md">
              We help companies modernize SAP landscapes, make data‑driven
              decisions, and streamline business processes with expert
              consulting services tailored to your industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl group border-0"
              >
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Talk to an Expert
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-white/10 hover:bg-white/20 hover:border-white text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats Row */}
            <motion.div
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">
                  15+
                </div>
                <div className="text-gray-200 text-sm drop-shadow-md">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">
                  50+
                </div>
                <div className="text-gray-200 text-sm drop-shadow-md">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">
                  40%
                </div>
                <div className="text-gray-200 text-sm drop-shadow-md">
                  Faster Processing
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="SAP Analytics Dashboard"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl backdrop-blur-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    40% Efficiency
                  </div>
                  <div className="text-sm text-gray-600">
                    Process Improvement
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="w-4 h-4 inline mr-1" />
              SAP Certified
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center text-gray-200 drop-shadow-md">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
};
