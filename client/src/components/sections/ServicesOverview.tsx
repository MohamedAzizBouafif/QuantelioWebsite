import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  CheckCircle,
  Star,
  ChevronRight,
  Database,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Target,
} from "lucide-react";
import { services } from "@/data";

interface ServicesOverviewProps {
  scrollToSection: (sectionId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 section-divider texture-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-[#1D4ED8]/10 text-[#1D4ED8] border-[#1D4ED8]/20 mb-6 px-4 py-2">
            <Settings className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Services Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your partner for SAP S/4HANA & SAP Analytics with process-oriented,
            strategic implementations and expert consulting services that drive
            measurable business outcomes.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-none shadow-xl card-hover bg-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1D4ED8]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <Star className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] group-hover:text-[#1D4ED8] transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-gray-700 p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      className="w-full text-[#1D4ED8] hover:bg-[#1D4ED8]/5 group-hover:translate-x-1 transition-all"
                      onClick={() => scrollToSection("contact")}
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1F2937] mb-4">
              Deep Dive into Our SAP Solutions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of SAP technologies and
              methodologies that drive business transformation
            </p>
          </div>

          <Tabs defaultValue="s4hana" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger
                value="s4hana"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <Database className="w-4 h-4 mr-2" />
                S/4HANA
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <Users className="w-4 h-4 mr-2" />
                Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="s4hana" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-[#1F2937]">
                    SAP S/4HANA Implementation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Transform your business with SAP's intelligent ERP suite.
                    Our certified consultants ensure seamless migration from
                    legacy systems to S/4HANA, optimizing your business
                    processes for the digital age.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">
                        Faster Processing
                      </div>
                      <div className="text-sm text-gray-600">
                        Real-time analytics
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
                      <div className="font-semibold text-gray-900">
                        Cost Reduction
                      </div>
                      <div className="text-sm text-gray-600">
                        Up to 30% savings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="SAP S/4HANA Dashboard"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative order-2 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="SAP Analytics Cloud"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h4 className="text-2xl font-bold text-[#1F2937]">
                    SAP Analytics & Business Intelligence
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Turn your data into valuable insights with our comprehensive
                    analytics solutions. From SAP Analytics Cloud to embedded
                    BW, we help you make data-driven decisions that drive
                    growth.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">
                        Real-time Dashboards
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">
                        Predictive Analytics
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Database className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">
                        Data Warehousing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-[#1F2937]">
                    Application Management & Support
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure your SAP systems run smoothly with our comprehensive
                    application management services. From 24/7 monitoring to
                    performance optimization, we keep your business running at
                    peak efficiency.
                  </p>
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#1D4ED8]">
                          24/7
                        </div>
                        <div className="text-sm text-gray-600">Monitoring</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1D4ED8]">
                          99.9%
                        </div>
                        <div className="text-sm text-gray-600">Uptime SLA</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1D4ED8]">
                          &lt;2hr
                        </div>
                        <div className="text-sm text-gray-600">
                          Response Time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                    alt="IT Support Team"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
