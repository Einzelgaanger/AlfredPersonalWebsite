import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Code, BarChart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImg from "@assets/myprofile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-background" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
              Hi, I'm <span className="text-gradient-primary">Alfred Mulinge Maweu</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 font-mono">
              Data Analyst | AI & Innovation Consultant | Full-Stack Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Innovative data analyst, AI consultant, and full-stack developer with extensive experience building enterprise-grade applications and delivering data-driven strategic insights. Specialized in productivity analytics, AI-powered platforms, blockchain solutions, and quantitative research.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 text-foreground rounded-full px-8 h-12 text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Profile Image & Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Image Container - REPLACE SRC WITH YOUR IMAGE */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20 group">
                <img 
                  src={portraitImg} 
                  alt="Alfred Mulinge Maweu" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Skill Cards */}
              <FloatingCard icon={<Database className="text-primary" />} label="Data Science" className="top-0 left-0 -translate-x-1/4 translate-y-1/2" delay={0.4} />
              <FloatingCard icon={<Code className="text-cyan-400" />} label="Full Stack" className="bottom-10 right-8 translate-x-0" delay={0.5} />
              <FloatingCard icon={<BarChart className="text-purple-400" />} label="AI Analytics" className="top-1/4 right-[-20px]" delay={0.6} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, label, className, delay }: { icon: React.ReactNode, label: string, className?: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute bg-card/80 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 ${className}`}
    >
      <div className="p-2 bg-background/50 rounded-lg text-primary">
        {/* Wrap in a styled div instead of cloning to avoid type issues */}
        <div className="w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
          {icon}
        </div>
      </div>
      <span className="font-display font-bold text-sm">{label}</span>
    </motion.div>
  );
}
