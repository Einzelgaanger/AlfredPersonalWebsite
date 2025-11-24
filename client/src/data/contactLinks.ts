import {
  Mail,
  Phone,
  MessageCircle,
  Globe,
  Linkedin,
  Github,
  Layers,
  Twitter,
  Instagram,
  Code2,
  BookUser,
} from "lucide-react";

export const contactChannels = [
  {
    title: "Email",
    description: "For professional inquiries and collaborations",
    href: "mailto:binfred.ke@gmail.com",
    action: "Send Email",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    description: "For quick messages and informal communication",
    href: "https://wa.me/254700861129",
    action: "Message",
    icon: MessageCircle,
  },
  {
    title: "Phone",
    description: "For direct calls and urgent matters reach out via call.",
    href: "tel:+254700861129",
    action: "Call Now",
    icon: Phone,
  },
  {
    title: "LinkedIn",
    description: "For professional networking and career opportunities",
    href: "https://www.linkedin.com/in/alfred-mulinge-7586582a9",
    action: "View Profile",
    icon: Linkedin,
  },
];

export const references = [
  {
    name: "Noella Spitz",
    role: "CTO, ProDG Studios",
    email: "mailto:noella@prodg.xyz",
    phone: "tel:+447852432181",
    icon: BookUser,
  },
  {
    name: "Dr. Richard Kyalo",
    role: "Technical Lead Data Analytics, USAID",
    email: "mailto:kyalorichard11@gmail.com",
    phone: "tel:+254710359903",
    icon: BookUser,
  },
];

export const socialLinks = [
  { label: "Website", href: "https://mralfred.onrender.com", icon: Globe },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfred-mulinge-7586582a9", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Einzelgaanger", icon: Github },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/30068579/alfred-mulinge?tab=profile", icon: Layers },
  { label: "Email", href: "mailto:binfred.ke@gmail.com", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/254700861129", icon: MessageCircle },
  { label: "Phone", href: "tel:+254700861129", icon: Phone },
  { label: "Twitter / X", href: "https://x.com/MulingeAl", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/mfalmefred/profilecard/?igsh=MXdlcmxhMWM1d3ZvYQ==", icon: Instagram },
  { label: "CodePen", href: "https://codepen.io/Alfred-Mulinge", icon: Code2 },
];

