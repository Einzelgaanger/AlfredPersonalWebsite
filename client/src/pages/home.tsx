import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import { GraduationCap, Brain, Trophy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated images for projects
import secureAidImg from '@assets/generated_images/secureaid_ngo_transparency_platform.png';
import transparentTrackImg from '@assets/generated_images/transparenttrack_blockchain_visualization.png';
import aiCommercializationImg from '@assets/generated_images/ai_commercialization_analytics_dashboard.png';
import gpt2Img from '@assets/generated_images/gpt2xlut_ai_architecture.png';
import foodPriceImg from '@assets/generated_images/food_price_econometrics_graph.png';
import studentPlatformImg from '@assets/generated_images/student_education_platform_ui.png';
import smeAppImg from '@assets/generated_images/sme_business_management_mobile_app.png';
import walletImg from '@assets/generated_images/mobile_money_wallet_concept.png';

export default function Home() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "R", "Django", 
    "Machine Learning", "GPT-2", "Deep Learning", "TensorFlow", 
    "SQL", "PostgreSQL", "Supabase", "Firebase", "MongoDB",
    "Tableau", "PowerBI", "Blockchain", "Hyperledger", "AWS"
  ];

  const projects = [
    {
      title: "SecureAid",
      description: "Digital solution mitigating corruption in NGO fund disbursements through transparent tracking and accountability mechanisms.",
      tags: ["Blockchain", "React", "Django", "Transparency"],
      link: "https://secureaid.online",
      imageUrl: secureAidImg
    },
    {
      title: "TransparentTrack NGO System",
      description: "End-to-end blockchain solution ensuring transparent fund disbursement for NGOs. Implemented with Django backend, React frontend, and Hyperledger Fabric blockchain infrastructure.",
      tags: ["Django", "React", "Hyperledger", "Blockchain"],
      link: "#",
      imageUrl: transparentTrackImg
    },
    {
      title: "AI Research Commercialization Tool",
      description: "Intelligent platform evaluating research commercialization potential using configurable metrics framework. Features default and custom scoring criteria with user-defined weightages, generates comprehensive analytics reports identifying strengths and market readiness scores.",
      tags: ["Python", "Machine Learning", "React", "Node.js"],
      link: "#",
      imageUrl: aiCommercializationImg
    },
    {
      title: "GPT2xLUT -- Continuous Learning AI",
      description: "Innovative language model combining GPT-2 with dynamic Lookup Table augmentation enabling real-time learning without full retraining. Features persistent knowledge storage via Supabase, user-specific personalization, multi-tenant architecture, and production-ready infrastructure.",
      tags: ["Python", "GPT-2", "Machine Learning", "Supabase"],
      link: "#",
      imageUrl: gpt2Img
    },
    {
      title: "TengaPesa Platform",
      description: "Proposed M-PESA enhancement enabling purpose-specific mini-wallets with configurable lock mechanisms and withdrawal conditions for disciplined financial planning and savings goals.",
      tags: ["React", "Node.js", "M-Pesa API", "Firebase", "Supabase"],
      link: "https://tengapesa.onrender.com",
      imageUrl: walletImg
    },
    {
      title: "BizLens SME Management Platform",
      description: "Comprehensive React Native business management solution helping SME owners manage accounting, inventory, and operations more efficiently and accurately with mobile-first design.",
      tags: ["React Native", "Firebase", "Computer Vision", "Python", "ML"],
      link: "#",
      imageUrl: smeAppImg
    },
    {
      title: "Bunifu Student Platform",
      description: "Comprehensive student platform consolidating study materials, job opportunities, event management, and career development tools. Features gamification elements enhancing engagement and collaborative learning spaces.",
      tags: ["React", "Node.js", "MongoDB", "Gamification"],
      link: "#",
      imageUrl: studentPlatformImg
    },
    {
      title: "Kenyan Food Price Analysis",
      description: "Award-winning longitudinal study (2006-2024) developing econometric models identifying price volatility drivers. Applied ARIMA and VAR methodologies producing policy recommendations.",
      tags: ["R", "LaTeX", "Statistical Modeling", "ARIMA", "Data Viz"],
      link: "#",
      imageUrl: foodPriceImg
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />

      <Section id="about" title="About Me" background="subtle">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-lg opacity-30" />
            <div className="relative bg-card border border-border p-8 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain className="w-32 h-32 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-primary">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                To leverage the power of data and technology to solve real-world problems. 
                I am passionate about uncovering hidden patterns in data and building 
                applications that make those insights accessible and actionable.
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                With a strong foundation in both mathematics and computer science, 
                I bridge the gap between theoretical algorithms and practical software engineering.
                I combine technical excellence in React, TypeScript, Python, and R with strategic 
                thinking to drive measurable business impact.
              </p>
              
              <div className="mt-8 relative z-10">
                <Button className="gap-2">
                  <Download className="w-4 h-4" /> Download Full Resume
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-display">Education</h4>
                <p className="text-foreground font-medium">B.Sc. Statistics & Data Science</p>
                <p className="text-muted-foreground">Strathmore University (2024 - 2025)</p>
                <div className="mt-2 text-sm text-muted-foreground space-y-1">
                  <p>• Produced top-ranked analysis of National Treasury food prices dataset</p>
                  <p>• Led Islamic banking customer acquisition research</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-display">Expertise</h4>
                <p className="text-muted-foreground">Data Science, Machine Learning, Full Stack Development, Blockchain Solutions, Predictive Analytics</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-display">Achievements</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• National Representative - East African Mathematics Olympiad (2024)</li>
                  <li>• 7th Place Nationwide - 2023 Mathematics Olympiad</li>
                  <li>• 4th Place - 2023 Brookside Contest</li>
                  <li>• Olympiad Teacher Certification (CEMASTEA & UoN)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Professional Journey" subtitle="My career path and key roles">
        <ExperienceTimeline />
      </Section>

      <Section id="projects" title="Featured Projects" background="subtle">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to bring ideas to life">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} index={index} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>

      <footer className="py-8 border-t border-border bg-background text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Alfred Mulinge Maweu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
