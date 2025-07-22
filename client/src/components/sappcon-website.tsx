import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ChevronUp } from "lucide-react";
import {
  Navigation,
  HeroSection,
  ServicesOverview,
  IndustriesSection,
  ClientLogosMarquee,
  ProjectsSection,
  TeamCultureSection,
  ContactSection,
} from "./sections";

const SappconWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { toast } = useToast();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Contact form mutation
  const contactMutation = useMutation({
    mutationFn: async (data: {
      name: string;
      company?: string;
      email: string;
      message: string;
    }) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
        duration: 5000,
      });
      setContactForm({ name: "", company: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  // Scroll spy and scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !contactForm.name.trim() ||
      !contactForm.email.trim() ||
      !contactForm.message.trim()
    ) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    contactMutation.mutate(contactForm);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] transform-origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Services Overview */}
      <ServicesOverview scrollToSection={scrollToSection} />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Client Logos Marquee */}
      <ClientLogosMarquee />

      {/* Projects Section */}
      <ProjectsSection scrollToSection={scrollToSection} />

      {/* Team & Culture Section */}
      <TeamCultureSection />

      {/* Contact Section */}
      <ContactSection
        contactForm={contactForm}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
        contactMutation={contactMutation}
        scrollToSection={scrollToSection}
      />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#1D4ED8] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default SappconWebsite;
