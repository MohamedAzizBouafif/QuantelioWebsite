import React from "react";
import { motion } from "framer-motion";
import { industries } from "@/data";

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading companies across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-3`}
              >
                {industry.icon}
              </div>
              <span className="text-sm font-medium text-center">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
