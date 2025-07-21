import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  Shield,
  Award,
  TrendingUp,
  Database,
  Settings,
  Clock,
  Star,
  ArrowRight,
  PlayCircle,
  Sparkles,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Send,
  User,
  Building,
  ArrowUp
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
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg hero-pattern"></div>
        
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
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full floating-element"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
                <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Leading SAP Consulting Firm
                </Badge>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Driving Digital 
                <span className="block bg-gradient-to-r from-[#60A5FA] to-white bg-clip-text text-transparent">
                  Transformation
                </span>
                with SAP Excellence
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                We help companies modernize SAP landscapes, make data‑driven decisions, and streamline business processes with expert consulting services tailored to your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-white text-[#1D4ED8] hover:bg-gray-50 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl group"
                >
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Talk to an Expert
                </Button>
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
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
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-white/80 text-sm">Faster Processing</div>
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
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">40% Efficiency</div>
                    <div className="text-sm text-gray-600">Process Improvement</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#1D4ED8] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
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
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 section-divider texture-bg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your partner for SAP S/4HANA & SAP Analytics with process-oriented, strategic implementations and expert consulting services that drive measurable business outcomes.
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
                        <div className="text-white">
                          {service.icon}
                        </div>
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
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features</h4>
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
                        onClick={() => scrollToSection('contact')}
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
                Explore our comprehensive range of SAP technologies and methodologies that drive business transformation
              </p>
            </div>

            <Tabs defaultValue="s4hana" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger value="s4hana" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <Database className="w-4 h-4 mr-2" />
                  S/4HANA
                </TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="support" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <Users className="w-4 h-4 mr-2" />
                  Support
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="s4hana" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-[#1F2937]">SAP S/4HANA Implementation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Transform your business with SAP's intelligent ERP suite. Our certified consultants ensure seamless migration from legacy systems to S/4HANA, optimizing your business processes for the digital age.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600 mb-2" />
                        <div className="font-semibold text-gray-900">Faster Processing</div>
                        <div className="text-sm text-gray-600">Real-time analytics</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
                        <div className="font-semibold text-gray-900">Cost Reduction</div>
                        <div className="text-sm text-gray-600">Up to 30% savings</div>
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
                    <h4 className="text-2xl font-bold text-[#1F2937]">SAP Analytics & Business Intelligence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Turn your data into valuable insights with our comprehensive analytics solutions. From SAP Analytics Cloud to embedded BW, we help you make data-driven decisions that drive growth.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-900">Real-time Dashboards</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Target className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-gray-900">Predictive Analytics</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <Database className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">Data Warehousing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="support" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-[#1F2937]">Application Management & Support</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Ensure your SAP systems run smoothly with our comprehensive application management services. From 24/7 monitoring to performance optimization, we keep your business running at peak efficiency.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-[#1D4ED8]">24/7</div>
                          <div className="text-sm text-gray-600">Monitoring</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#1D4ED8]">99.9%</div>
                          <div className="text-sm text-gray-600">Uptime SLA</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#1D4ED8]">&lt;2hr</div>
                          <div className="text-sm text-gray-600">Response Time</div>
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

      {/* Client Logos Marquee */}
      <section className="py-16 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-blue-100">Delivering exceptional SAP solutions for Fortune 500 companies</p>
          </motion.div>
          
          {/* Client Logos Scrolling */}
          <div className="relative">
            <div className="flex space-x-16 animate-marquee">
              {[
                "E.ON", "Bosch", "Telekom", "Roche", "Lidl", "Daimler",
                "E.ON", "Bosch", "Telekom", "Roche", "Lidl", "Daimler"
              ].map((company, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-lg">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-white to-gray-50">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Our Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional results for industry leaders across various sectors with measurable impact and proven expertise in SAP transformations.
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
                      <span className="text-yellow-700 font-bold text-2xl">E</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1F2937]">E.ON</h3>
                      <p className="text-gray-600">Energy & Utilities</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#1F2937] mb-4">Complete SAP S/4HANA Transformation</h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Led a comprehensive digital transformation initiative, migrating E.ON's legacy SAP systems to S/4HANA, implementing real-time analytics, and optimizing financial processes across multiple business units.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-green-600">40%</div>
                      <div className="text-sm text-gray-600">Faster month-end closing</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">€2M</div>
                      <div className="text-sm text-gray-600">Annual cost savings</div>
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
                        <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <span className={`${project.textColor} font-bold text-lg`}>{project.letter}</span>
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
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className={`${project.color} p-4 rounded-lg mb-4`}>
                      <div className={`flex items-center ${project.textColor}`}>
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <span className="font-semibold text-sm">{project.result}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full text-[#1D4ED8] hover:bg-[#1D4ED8]/5 group-hover:translate-x-1 transition-all">
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
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the ranks of industry leaders who have accelerated their digital transformation with our expert SAP consulting services.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#1D4ED8] hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-element"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-element" style={{animationDelay: '2s'}}></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Meet Our SAP Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A strong and competent team specializing in SAP S/4HANA, BW/4HANA, SAP Analytics, and Business Intelligence with decades of combined experience delivering exceptional results.
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
                    <p className="text-[#1D4ED8] font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.experience}</p>
                    
                    {/* Contact Info with enhanced styling */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 text-sm text-[#1D4ED8] hover:text-[#60A5FA] transition-colors group/email p-2 rounded-lg hover:bg-blue-50"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="group-hover/email:underline">{member.email}</span>
                      </a>
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors group/phone p-2 rounded-lg hover:bg-gray-50"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="group-hover/phone:underline">{member.phone}</span>
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
              <h3 className="text-3xl font-bold text-[#1F2937] mb-4">Our Values & Culture</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We spare neither work nor stress. You can rely on honest, transparent and professional consultation backed by our core values.
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
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#1D4ED8] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
                <h4 className="text-lg font-semibold text-[#1F2937] mb-4">Innovation Partnerships</h4>
                <p className="text-gray-600 mb-6">
                  We maintain strategic partnerships with innovation ecosystems including BearingPoint, IPAI, and 42 Heilbronn, and actively engage in local events like KI Festival to stay at the forefront of technological advancement.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["BearingPoint", "IPAI", "42 Heilbronn", "KI Festival"].map((partner, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-700 border-gray-200 px-4 py-2">
                      {partner}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-[#1D4ED8] relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your SAP S/4HANA and Analytics requirements and create a tailored solution that drives measurable business results.
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
                    <h3 className="text-2xl font-bold text-[#1F2937]">Send us a message</h3>
                  </div>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-[#1F2937] mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full mt-2 h-12 border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-[#1F2937] mb-2 flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full mt-2 h-12 border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#1F2937] mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full mt-2 h-12 border-gray-200 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-[#1F2937] mb-2 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
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
                    <h3 className="text-2xl font-bold text-[#1F2937]">Company Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <MapPin className="w-5 h-5 text-[#1D4ED8] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600 leading-relaxed">
                          SAPPCON GmbH<br />
                          Heilbronn, Germany<br />
                          Baden-Württemberg
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Phone className="w-5 h-5 text-[#1D4ED8] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <a href="tel:+49-7131-123456" className="text-[#1D4ED8] hover:text-blue-700 transition-colors">
                          +49 (0) 7131 123 456
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Mail className="w-5 h-5 text-[#1D4ED8] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:info@sappcon.de" className="text-[#1D4ED8] hover:text-blue-700 transition-colors">
                          info@sappcon.de
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Clock className="w-5 h-5 text-[#1D4ED8] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
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
                  <h3 className="text-xl font-bold text-[#1F2937] mb-6">Quick Connect</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl"
                      onClick={() => window.open('tel:+49-7131-123456')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white h-12 rounded-xl"
                      onClick={() => window.open('mailto:info@sappcon.de')}
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
                  We respond to all inquiries within 24 hours during business days. For urgent SAP support needs, call us directly.
                </p>
                <div className="flex items-center text-yellow-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">24-hour response commitment</span>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that have transformed their business with our SAP expertise. Schedule a free consultation today.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#1D4ED8] hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('home')}
              >
                <ArrowUp className="w-5 h-5 mr-2" />
                Back to Top
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
