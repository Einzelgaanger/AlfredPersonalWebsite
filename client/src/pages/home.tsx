import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { GraduationCap, Brain, Trophy } from "lucide-react";

export default function Home() {
  const skills = [
    "Python", "R", "SQL", "Tableau", "PowerBI", 
    "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch",
    "React", "TypeScript", "Node.js", "Tailwind CSS",
    "Git", "Docker", "AWS", "Statistics"
  ];

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Developed a machine learning model to predict customer churn for a telecom company using Python and Scikit-learn. Achieved 85% accuracy and identified key churn drivers.",
      tags: ["Python", "Scikit-learn", "Pandas", "ML"],
      github: "#",
      link: "#"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Interactive dashboard built with Tableau and SQL to visualize sales trends and forecast future revenue. Helped management make data-driven decisions.",
      tags: ["Tableau", "SQL", "Data Viz", "Analytics"],
      github: "#",
      link: "#"
    },
    {
      title: "Image Classification App",
      description: "End-to-end deep learning application for classifying plant diseases from leaf images. Built with PyTorch and deployed using Flask and React.",
      tags: ["PyTorch", "React", "Flask", "Deep Learning"],
      github: "#",
      link: "#"
    },
    {
      title: "E-commerce Recommendation System",
      description: "Collaborative filtering recommendation engine for an online bookstore. Improved user engagement by 20% through personalized book suggestions.",
      tags: ["Python", "Collaborative Filtering", "API"],
      github: "#",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />

      <Section id="about" title="About Me" background="subtle">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-lg opacity-30" />
            <div className="relative bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-display mb-4 text-primary">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To leverage the power of data and technology to solve real-world problems. 
                I am passionate about uncovering hidden patterns in data and building 
                applications that make those insights accessible and actionable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in both mathematics and computer science, 
                I bridge the gap between theoretical algorithms and practical software engineering.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Education</h4>
                <p className="text-muted-foreground">BSc. Mathematics & Computer Science</p>
                <p className="text-sm text-muted-foreground/60">First Class Honors</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Expertise</h4>
                <p className="text-muted-foreground">Data Science, Machine Learning, Full Stack Development</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Certifications</h4>
                <p className="text-muted-foreground">Certified Data Science Professional</p>
                <p className="text-muted-foreground">AWS Certified Cloud Practitioner</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to bring ideas to life">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} index={index} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects" background="subtle">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
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
