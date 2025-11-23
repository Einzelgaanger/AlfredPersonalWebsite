import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Data, AI & Innovation Consultant (Part-time)",
    company: "ProDG Studios",
    period: "April 2025 - Present",
    description: [
      "Architected VGG Holdings Portal, an enterprise-grade multi-company management platform featuring AI-powered assistant and real-time analytics.",
      "Conducted comprehensive Microsoft 365 productivity analysis for enterprise clients, identifying productivity bottlenecks.",
      "Led strategic proposal drafting for high-value clients including Safaricom telemedicine initiatives.",
      "Authored comprehensive litepaper for stablecoin client including tokenomics design and market positioning."
    ]
  },
  {
    role: "Full-Stack Developer & Data Consultant (Part-time)",
    company: "Collaborative Frontier Finance (CFF)",
    period: "June 2025 - Present",
    description: [
      "Built Fund Manager Portal for ESCP Network managing 260+ fund manager profiles.",
      "Engineered full-stack application with real-time analytics dashboard and searchable network directory.",
      "Implemented real-time data synchronization using Supabase (PostgreSQL + Realtime) with React/TypeScript.",
      "Developed version 2 of internal database management tool with enhanced data architecture."
    ]
  },
  {
    role: "Co-Founder & Business Development Lead",
    company: "Astarus AI",
    period: "October 2025 - Present",
    description: [
      "Co-founding innovative AI startup building GPT2xLUT, a continuous learning language model.",
      "Leading VC outreach, fundraising strategy, and investor relations for early-stage funding.",
      "Developed full-stack implementation with multi-tenant infrastructure."
    ]
  },
  {
    role: "Founder & Program Lead",
    company: "Santa's Heart Foundation",
    period: "July 2025 - Present",
    description: [
      "Founded youth-focused NGO providing free educational programs in financial literacy and AI awareness.",
      "Reached 50+ beneficiaries through structured outreach programs providing essential support.",
      "Building sustainable programs creating confident, tech-savvy future leaders."
    ]
  },
  {
    role: "Junior Data Analyst (Part-time, Pro Bono)",
    company: "Algum Africa Capital",
    period: "June 2025 - August 2025",
    description: [
      "Built multiple regression models forecasting LPG demand in Mozambique market.",
      "Developed custom secure database system for efficient data management.",
      "Applied econometric modeling techniques to support investment decision-making."
    ]
  },
  {
    role: "Web Platform Developer",
    company: "SecureAid",
    period: "May 2025",
    description: [
      "Prototyped digital solution mitigating corruption in aid fund disbursements using blockchain transparency principles.",
      "Deployed live platform: secureaid.online"
    ]
  },
  {
    role: "Algorithm Developer",
    company: "DealFuze (UK VC)",
    period: "April 2025 - May 2025",
    description: [
      "Developed intelligent matching algorithm connecting investors with founders based on aligned investment goals.",
      "Worked under mentorship of Senior Developers gaining advanced algorithm design experience."
    ]
  },
  {
    role: "Financial Consultant and Motivational Speaker",
    company: "Growth to Mathare City Movement",
    period: "March 2024 - Present",
    description: [
      "Delivered financial literacy workshops empowering community members with practical money management skills.",
      "Conducted motivational speeches inspiring youth development and entrepreneurship."
    ]
  },
  {
    role: "Mentee of Dr. Karanja Gacuca",
    company: "Wall Street Data Analyst Coaching",
    period: "February 2025 - March 2025",
    description: [
      "Handpicked for exclusive one-on-one mentorship based on exemplary analytical reporting.",
      "Developed advanced analytics frameworks, decision-making methodologies, and executive presentation skills."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Enkaare",
    period: "February 2025 - March 2025",
    description: [
      "Developed talent matching algorithms optimizing recruitment efficiency.",
      "Created data-driven marketing strategy through comprehensive market research and competitive analysis."
    ]
  },
  {
    role: "Data Analyst (Short-Term Consulting)",
    company: "USAID | ACDI/VOCA | RLA",
    period: "January 2025 - February 2025",
    description: [
      "Cleaned and structured large humanitarian datasets supporting Russia-Ukraine conflict analysis.",
      "Conducted research and exploratory analysis informing UN economic recovery strategies."
    ]
  },
  {
    role: "Crypto Economics Intern",
    company: "Black Panther TKN",
    period: "January 2025 - March 2025",
    description: [
      "Gained exposure to crypto project business operations and tokenomics design.",
      "Contributed mathematical modeling insights during strategic planning sessions."
    ]
  },
  {
    role: "Volunteer Research Note Taker",
    company: "MIT Kuo Sharper Currency Volatility Center",
    period: "2025",
    description: [
      "Documented detailed research discussions supporting currency volatility trend analysis."
    ]
  },
  {
    role: "Award-Winning Data Analyst",
    company: "iLab Africa",
    period: "October 2024 - November 2024",
    description: [
      "Delivered top-ranked analysis of Kenya food prices dataset, recognized for analytical depth and accuracy.",
      "Applied advanced statistical modeling, data visualization, R programming, and LaTeX documentation."
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0 group"
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border group-last:bottom-auto group-last:h-full transform -translate-x-1/2" />
            
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 transform md:-translate-x-1/2 mt-1.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300" />

            <div className={`md:flex gap-12 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Date Side */}
              <div className={`md:w-1/2 mb-2 md:mb-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-primary text-sm font-medium border border-primary/10">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2">
                <div className="bg-card/50 border border-white/5 p-6 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold font-display text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
