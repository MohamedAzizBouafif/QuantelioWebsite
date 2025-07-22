import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, Mail, Phone } from "lucide-react";
import { teamMembers, companyValues } from "@/data";

export const TeamCultureSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-element"></div>
        <div
          className="absolute top-40 right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-6 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Meet Our SAP Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A strong and competent team specializing in SAP S/4HANA, BW/4HANA,
            SAP Analytics, and Business Intelligence with decades of combined
            experience delivering exceptional results.
          </p>
        </motion.div>

        {/* Team Members Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full text-center card-hover border-none shadow-xl bg-white overflow-hidden relative">
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1D4ED8]/5 to-transparent"></div>

                <CardContent className="p-8 relative">
                  {/* Profile Image with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto relative">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-4 ring-white shadow-lg"></div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1F2937] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#1D4ED8] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {member.experience}
                  </p>

                  {/* Contact Info with enhanced styling */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-[#1D4ED8] hover:text-[#60A5FA] transition-colors group/email p-2 rounded-lg hover:bg-blue-50"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="group-hover/email:underline">
                        {member.email}
                      </span>
                    </a>
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors group/phone p-2 rounded-lg hover:bg-gray-50"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="group-hover/phone:underline">
                          {member.phone}
                        </span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Values - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1F2937] mb-4">
              Our Values & Culture
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We spare neither work nor stress. You can rely on honest,
              transparent and professional consultation backed by our core
              values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    index === 0
                      ? "bg-gradient-to-br from-blue-500 to-blue-600" // Honest & Transparent - Blue
                      : index === 1
                      ? "bg-gradient-to-br from-amber-500 to-orange-500" // Innovation Focus - Orange/Yellow
                      : "bg-gradient-to-br from-green-500 to-emerald-600" // Professional Excellence - Green
                  }`}
                >
                  <div className="text-white">
                    {React.cloneElement(value.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#1D4ED8] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Partnership Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#1F2937] mb-4">
                Innovation Partnerships
              </h4>
              <p className="text-gray-600 mb-6">
                We maintain strategic partnerships with innovation ecosystems
                including BearingPoint, IPAI, and 42 Heilbronn, and actively
                engage in local events like KI Festival to stay at the forefront
                of technological advancement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["BearingPoint", "IPAI", "42 Heilbronn", "KI Festival"].map(
                  (partner, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-100 text-gray-700 border-gray-200 px-4 py-2"
                    >
                      {partner}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
