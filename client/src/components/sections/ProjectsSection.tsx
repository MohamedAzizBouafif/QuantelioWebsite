import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  TrendingUp,
  ChevronRight,
  ExternalLink,
  PlayCircle,
  Zap,
} from "lucide-react";
import { projects } from "@/data";

interface ProjectsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-6 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional results for industry leaders across various
            sectors with measurable impact and proven expertise in SAP
            transformations.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden shadow-2xl border-none">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="E.ON Digital Transformation"
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-yellow-500 text-white border-none">
                    <Zap className="w-3 h-3 mr-1" />
                    Energy Sector
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 bg-gradient-to-br from-white to-blue-50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-yellow-700 font-bold text-2xl">
                      E
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F2937]">E.ON</h3>
                    <p className="text-gray-600">Energy & Utilities</p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#1F2937] mb-4">
                  Complete SAP S/4HANA Transformation
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Led a comprehensive digital transformation initiative,
                  migrating E.ON's legacy SAP systems to S/4HANA, implementing
                  real-time analytics, and optimizing financial processes across
                  multiple business units.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-gray-600">
                      Faster month-end closing
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">€2M</div>
                    <div className="text-sm text-gray-600">
                      Annual cost savings
                    </div>
                  </div>
                </div>

                <Button className="bg-[#1D4ED8] hover:bg-[#1e40af]">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full card-hover border-none shadow-lg bg-white overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/10 to-[#60A5FA]/10"></div>
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <span
                          className={`${project.textColor} font-bold text-lg`}
                        >
                          {project.letter}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-700 border-none shadow-sm">
                        {project.sector}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                    {project.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className={`${project.color} p-4 rounded-lg mb-4`}>
                    <div className={`flex items-center ${project.textColor}`}>
                      <TrendingUp className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-sm">
                        {project.result}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-[#1D4ED8] hover:bg-[#1D4ED8]/5 group-hover:translate-x-1 transition-all"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have accelerated their
              digital transformation with our expert SAP consulting services.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1D4ED8] hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
