import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MessageSquare,
  Send,
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  Clock,
  Zap,
  CheckCircle,
  ArrowUp,
} from "lucide-react";

interface ContactSectionProps {
  contactForm: {
    name: string;
    company: string;
    email: string;
    message: string;
  };
  setContactForm: (form: any) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
  contactMutation: any;
  scrollToSection: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactForm,
  setContactForm,
  handleContactSubmit,
  contactMutation,
  scrollToSection,
}) => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 to-[#1D4ED8] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your SAP S/4HANA and Analytics requirements and create
            a tailored solution that drives measurable business results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1D4ED8] rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">
                    Send us a message
                  </h3>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-[#1F2937] mb-2 flex items-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your full name"
                      className="w-full mt-2 h-12 border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-[#1F2937] mb-2 flex items-center"
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={contactForm.company}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          company: e.target.value,
                        })
                      }
                      placeholder="Your company name"
                      className="w-full mt-2 h-12 border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-[#1F2937] mb-2 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="your.email@company.com"
                      className="w-full mt-2 h-12 border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-[#1F2937] mb-2 flex items-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="Tell us about your SAP requirements and how we can help transform your business..."
                      className="w-full mt-2 resize-none border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    size="lg"
                    className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Contact Card */}
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">
                    Company Information
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-[#1D4ED8] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Quantelio GmbH
                        <br />
                        Heilbronn, Germany
                        <br />
                        Baden-Württemberg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Phone className="w-5 h-5 text-[#1D4ED8] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+49-7131-123456"
                        className="text-[#1D4ED8] hover:text-blue-700 transition-colors"
                      >
                        +49 (0) 7131 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Mail className="w-5 h-5 text-[#1D4ED8] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:info@sappcon.de"
                        className="text-[#1D4ED8] hover:text-blue-700 transition-colors"
                      >
                        info@sappcon.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-[#1D4ED8] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Weekend: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#1F2937] mb-6">
                  Quick Connect
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl"
                    onClick={() => window.open("tel:+49-7131-123456")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white h-12 rounded-xl"
                    onClick={() => window.open("mailto:info@sappcon.de")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Guarantee */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center text-white mb-4">
                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                <h4 className="font-bold text-lg">Response Guarantee</h4>
              </div>
              <p className="text-blue-100 mb-4">
                We respond to all inquiries within 24 hours during business
                days. For urgent SAP support needs, call us directly.
              </p>
              <div className="flex items-center text-yellow-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  24-hour response commitment
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their business
              with our SAP expertise. Schedule a free consultation today.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1D4ED8] hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("home")}
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
