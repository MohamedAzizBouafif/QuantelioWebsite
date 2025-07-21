import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import {
  Menu,
  X,
  ChevronUp,
  CheckCircle,
  Zap,
  BarChart3,
  Users,
  Building2,
  Car,
  Radio,
  Factory,
  Heart,
  ShoppingBag,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  Target,
  Lightbulb,
  Shield
} from 'lucide-react';

const SappconWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { toast } = useToast();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Contact form mutation
  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; company?: string; email: string; message: string }) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
        duration: 5000,
      });
      setContactForm({ name: '', company: '', email: '', message: '' });
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
    name: '',
    company: '',
    email: '',
    message: ''
  });

  // Scroll spy and scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
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

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'What We Do' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "SAP S/4HANA & BW/4HANA Consulting",
      description: "Process-oriented, strategic implementations of SAP's next-generation ERP and data warehouse solutions. We ensure smooth transitions and optimal system performance.",
      features: [
        "Strategic implementation planning",
        "System optimization & migration", 
        "Best practice integration"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "SAP Analytics & Reporting",
      description: "Comprehensive BI, BW, HANA, SAC, Fiori, and Lumira solutions. Transform your data into valuable insights with predictive analytics capabilities.",
      features: [
        "Business Intelligence & Analytics",
        "Real-time dashboards & KPIs",
        "Predictive analytics solutions"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Application Management & Training",
      description: "Managed services, proactive monitoring, SLA support, comprehensive training programs, and detailed documentation for optimal system performance.",
      features: [
        "24/7 system monitoring",
        "Professional training programs",
        "Comprehensive documentation"
      ]
    }
  ];

  const industries = [
    { icon: <Zap className="w-6 h-6 text-yellow-600" />, name: "Energy", color: "bg-yellow-100" },
    { icon: <Car className="w-6 h-6 text-red-600" />, name: "Automotive", color: "bg-red-100" },
    { icon: <Radio className="w-6 h-6 text-blue-600" />, name: "Telecom", color: "bg-blue-100" },
    { icon: <Factory className="w-6 h-6 text-gray-600" />, name: "Manufacturing", color: "bg-gray-100" },
    { icon: <Heart className="w-6 h-6 text-green-600" />, name: "Pharma", color: "bg-green-100" },
    { icon: <ShoppingBag className="w-6 h-6 text-purple-600" />, name: "Trade", color: "bg-purple-100" },
    { icon: <Building2 className="w-6 h-6 text-indigo-600" />, name: "Public Sector", color: "bg-indigo-100" }
  ];

  const projects = [
    {
      company: "E.ON",
      sector: "Energy Sector",
      title: "SAP S/4HANA Implementation",
      description: "Complete SAP S/4HANA transformation enabling streamlined financial processes and enhanced reporting capabilities.",
      result: "40% faster month-end closing",
      color: "bg-yellow-100",
      textColor: "text-yellow-700",
      letter: "E"
    },
    {
      company: "Bosch",
      sector: "Automotive",
      title: "SAC Dashboard & Analytics",
      description: "Implementation of SAP Analytics Cloud dashboards with real-time KPI monitoring and predictive analytics.",
      result: "Real-time KPI monitoring",
      color: "bg-blue-100",
      textColor: "text-blue-700",
      letter: "B"
    },
    {
      company: "Telekom",
      sector: "Telecommunications",
      title: "SolMan Integration",
      description: "SAP Solution Manager integration with proactive monitoring and comprehensive support services.",
      result: "Proactive system support",
      color: "bg-purple-100",
      textColor: "text-purple-700",
      letter: "T"
    },
    {
      company: "Roche",
      sector: "Pharmaceutical",
      title: "SAP Data Migration",
      description: "Complex SAP BI/BW data migration project ensuring seamless transition and data integrity.",
      result: "Zero data loss migration",
      color: "bg-red-100",
      textColor: "text-red-700",
      letter: "R"
    },
    {
      company: "Lidl",
      sector: "Retail Trade",
      title: "Authorization Management",
      description: "Comprehensive SAP authorization management improvements enhancing security and compliance.",
      result: "Enhanced security compliance",
      color: "bg-yellow-100",
      textColor: "text-yellow-700",
      letter: "L"
    },
    {
      company: "Daimler",
      sector: "Automotive",
      title: "BW/4HANA Integration",
      description: "SAP BW/4HANA integration with legacy systems enabling unified data analytics and reporting.",
      result: "Unified data analytics",
      color: "bg-gray-100",
      textColor: "text-gray-700",
      letter: "D"
    }
  ];

  const teamMembers = [
    {
      name: "Ali Khan",
      role: "CEO & Founder",
      experience: "15+ years SAP consulting experience with deep expertise in strategic implementations and digital transformation.",
      email: "ali.khan@sappcon.de",
      phone: "+49 151 20150175",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Anwar Khan",
      role: "SAP Technical Consultant",
      experience: "15+ years BW/BI experience specializing in data warehousing, analytics, and business intelligence solutions.",
      email: "anwar.khan@sappcon.de",
      phone: "+49 172 3996805",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Mostafa Halawa",
      role: "SAP Solutions Advisor",
      experience: "Manufacturing industry expert with extensive knowledge in SAP solutions and process optimization.",
      email: "mostafa.halawa@sappcon.de",
      phone: "",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Andreas Steinbach",
      role: "Account Manager",
      experience: "Heilbronn office representative focused on client relationships and regional business development.",
      email: "andreas.steinbach@sappcon.de",
      phone: "",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const companyValues = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Honest & Transparent",
      description: "We provide clear, honest communication and transparent consulting processes with no hidden agendas."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
      title: "Innovation Focus",
      description: "We leverage cutting-edge SAP technologies and maintain partnerships with innovation ecosystems like IPAI and 42 Heilbronn."
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Professional Excellence",
      description: "Our team delivers professional consultation with deep expertise and commitment to your business success."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] transform-origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-[#E5E7EB] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1D4ED8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-3 text-xl font-bold text-[#1D4ED8]">SAPPCON</span>
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
                        ? 'text-[#1D4ED8] font-semibold'
                        : 'text-[#1F2937] hover:text-[#1D4ED8]'
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
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Driving Digital Transformation with{' '}
              <span className="block text-[#60A5FA]">SAP S/4HANA & Analytics</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              We help companies modernize SAP landscapes, make data‑driven decisions, and streamline business processes with expert consulting services.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-white text-[#1D4ED8] hover:bg-gray-50 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Talk to an Expert
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your partner for SAP S/4HANA & SAP Analytics with process-oriented, strategic implementations and expert consulting services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F2937] mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#1D4ED8] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Trusted by leading companies across diverse sectors</p>
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
                <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-3`}>
                  {industry.icon}
                </div>
                <span className="text-sm font-medium text-center">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Our Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional results for industry leaders across various sectors with measurable impact and proven expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mr-4`}>
                        <span className={`${project.textColor} font-bold text-lg`}>{project.letter}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1F2937]">{project.company}</h3>
                        <p className="text-gray-500">{project.sector}</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-[#1F2937] mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className={`${project.color} p-4 rounded-lg`}>
                      <div className={`flex items-center ${project.textColor}`}>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{project.result}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strong and competent team specializing in SAP S/4HANA, BW/4HANA, SAP Analytics, and Business Intelligence with decades of combined experience.
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">{member.name}</h3>
                    <p className="text-[#1D4ED8] font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="block text-sm text-[#1D4ED8] hover:text-[#60A5FA] transition-colors"
                      >
                        {member.email}
                      </a>
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="block text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors"
                        >
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with SAP S/4HANA and Analytics? Let's discuss your requirements and create a tailored solution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border border-[#E5E7EB]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Send us a message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-[#1F2937] mb-2">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-[#1F2937] mb-2">
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#1F2937] mb-2">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-[#1F2937] mb-2">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us about your SAP requirements and how we can help..."
                        className="w-full mt-2 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white"
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Main Contact */}
              <Card className="border border-[#E5E7EB]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Company Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1F2937]">SAPPCON GmbH</p>
                        <p className="text-gray-600">Kaiserstraße 40</p>
                        <p className="text-gray-600">74072 Heilbronn, Germany</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-[#1D4ED8] mr-3 flex-shrink-0" />
                      <a
                        href="tel:+4971312781969"
                        className="text-gray-600 hover:text-[#1D4ED8] transition-colors"
                      >
                        +49 7131 278 1969
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-[#1D4ED8] mr-3 flex-shrink-0" />
                      <a
                        href="mailto:info@sappcon.de"
                        className="text-gray-600 hover:text-[#1D4ED8] transition-colors"
                      >
                        info@sappcon.de
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Contacts */}
              <Card className="border border-[#E5E7EB]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-6">Direct Team Contacts</h3>
                  <div className="space-y-4">
                    <div className="border-b border-[#E5E7EB] pb-4">
                      <p className="font-semibold text-[#1F2937]">Ali Khan - CEO & Founder</p>
                      <div className="mt-2 space-y-1">
                        <a
                          href="mailto:ali.khan@sappcon.de"
                          className="block text-sm text-[#1D4ED8] hover:text-[#60A5FA] transition-colors"
                        >
                          ali.khan@sappcon.de
                        </a>
                        <a
                          href="tel:+4915120150175"
                          className="block text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors"
                        >
                          +49 151 20150175
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-[#1F2937]">Anwar Khan - Technical Consultant</p>
                      <div className="mt-2 space-y-1">
                        <a
                          href="mailto:anwar.khan@sappcon.de"
                          className="block text-sm text-[#1D4ED8] hover:text-[#60A5FA] transition-colors"
                        >
                          anwar.khan@sappcon.de
                        </a>
                        <a
                          href="tel:+491723996805"
                          className="block text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors"
                        >
                          +49 172 3996805
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#1D4ED8] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold">SAPPCON</span>
              </div>
              <p className="text-gray-300 mb-4">
                Professional SAP consulting services for digital transformation and business optimization.
              </p>
              <p className="text-sm text-gray-400">© 2024 SAPPCON GmbH. All rights reserved.</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>SAP S/4HANA Consulting</li>
                <li>SAP BW/4HANA</li>
                <li>SAP Analytics</li>
                <li>Application Management</li>
                <li>Training & Support</li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Energy & Utilities</li>
                <li>Automotive</li>
                <li>Manufacturing</li>
                <li>Telecommunications</li>
                <li>Pharmaceutical</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  Kaiserstraße 40<br />
                  74072 Heilbronn
                </p>
                <p>+49 7131 278 1969</p>
                <p>info@sappcon.de</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
