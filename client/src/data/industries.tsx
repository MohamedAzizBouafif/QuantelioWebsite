import { 
  Zap, 
  Car, 
  Radio, 
  Factory, 
  Heart, 
  ShoppingBag, 
  Building2 
} from "lucide-react";

export const industries = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    name: "Energy",
    color: "bg-yellow-100",
  },
  {
    icon: <Car className="w-6 h-6 text-red-600" />,
    name: "Automotive",
    color: "bg-red-100",
  },
  {
    icon: <Radio className="w-6 h-6 text-blue-600" />,
    name: "Telecom",
    color: "bg-blue-100",
  },
  {
    icon: <Factory className="w-6 h-6 text-gray-600" />,
    name: "Manufacturing",
    color: "bg-gray-100",
  },
  {
    icon: <Heart className="w-6 h-6 text-green-600" />,
    name: "Pharma",
    color: "bg-green-100",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-purple-600" />,
    name: "Trade",
    color: "bg-purple-100",
  },
  {
    icon: <Building2 className="w-6 h-6 text-indigo-600" />,
    name: "Public Sector",
    color: "bg-indigo-100",
  },
];
