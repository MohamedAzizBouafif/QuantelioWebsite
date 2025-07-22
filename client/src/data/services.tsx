import { CheckCircle, BarChart3, Users } from "lucide-react";

export const services = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "SAP S/4HANA & BW/4HANA Consulting",
    description:
      "Process-oriented, strategic implementations of SAP's next-generation ERP and data warehouse solutions. We ensure smooth transitions and optimal system performance.",
    features: [
      "Strategic implementation planning",
      "System optimization & migration",
      "Best practice integration",
    ],
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    title: "SAP Analytics & Reporting",
    description:
      "Comprehensive BI, BW, HANA, SAC, Fiori, and Lumira solutions. Transform your data into valuable insights with predictive analytics capabilities.",
    features: [
      "Business Intelligence & Analytics",
      "Real-time dashboards & KPIs",
      "Predictive analytics solutions",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Application Management & Training",
    description:
      "Managed services, proactive monitoring, SLA support, comprehensive training programs, and detailed documentation for optimal system performance.",
    features: [
      "24/7 system monitoring",
      "Professional training programs",
      "Comprehensive documentation",
    ],
  },
];
