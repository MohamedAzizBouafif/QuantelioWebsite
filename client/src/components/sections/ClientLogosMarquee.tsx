import React from "react";
import { motion } from "framer-motion";

export const ClientLogosMarquee: React.FC = () => {
  const companies = [
    "E.ON",
    "Bosch",
    "Telekom",
    "Roche",
    "Lidl",
    "Daimler",
    "E.ON",
    "Bosch",
    "Telekom",
    "Roche",
    "Lidl",
    "Daimler",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-blue-100">
            Delivering exceptional SAP solutions for Fortune 500 companies
          </p>
        </motion.div>

        {/* Client Logos Scrolling */}
        <div className="relative">
          <div className="flex space-x-16 animate-marquee">
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-lg">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
