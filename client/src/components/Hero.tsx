import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Code, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import generatedImage from '@assets/generated_images/abstract_data_science_background.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={generatedImage} 
          alt="Data Science Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Data Analyst | AI & Innovation Consultant | Full-Stack Developer
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Innovative data analyst and full-stack developer building enterprise-grade applications and delivering data-driven strategic insights. Specialized in productivity analytics, AI-powered platforms, and blockchain solutions.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Abstract decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
              <div className="space-y-4 mt-8">
                <Card icon={<Database className="h-6 w-6 text-primary" />} title="Data Engineering" delay={0.3} />
                <Card icon={<BarChart className="h-6 w-6 text-purple-400" />} title="Analytics" delay={0.4} />
              </div>
              <div className="space-y-4">
                <Card icon={<Code className="h-6 w-6 text-cyan-400" />} title="Full Stack Dev" delay={0.5} />
                <Card icon={<div className="h-6 w-6 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 font-bold text-xs">AI</div>} title="Artificial Intelligence" delay={0.6} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon, title, delay }: { icon: React.ReactNode, title: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl shadow-xl hover:border-primary/30 transition-colors group"
    >
      <div className="mb-4 p-3 bg-background/50 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
    </motion.div>
  );
}
