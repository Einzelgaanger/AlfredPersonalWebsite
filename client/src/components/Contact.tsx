import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h3 className="text-3xl font-bold font-display">Let's work together</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm currently available for freelance work and full-time positions.
          If you have a project that needs some data magic or a web application that needs building,
          I'd love to hear from you.
        </p>
        
        <div className="space-y-6 mt-8">
          <ContactItem 
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value="alfredmulinge@gmail.com"
            href="mailto:alfredmulinge@gmail.com"
          />
          <ContactItem 
            icon={<Phone className="w-5 h-5" />}
            label="Phone"
            value="+254 700 000 000"
            href="tel:+254700000000"
          />
          <ContactItem 
            icon={<MapPin className="w-5 h-5" />}
            label="Location"
            value="Nairobi, Kenya"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <SocialButton icon="fab fa-github" href="#" />
          <SocialButton icon="fab fa-linkedin" href="#" />
          <SocialButton icon="fab fa-twitter" href="#" />
          <SocialButton icon="fab fa-instagram" href="#" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="p-8 bg-secondary/20 border-white/5 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                <Input id="name" placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
              <Input id="subject" placeholder="Project Inquiry" className="bg-background/50 border-white/10 focus:border-primary" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
              <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary" />
            </div>
            
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/40 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer w-full">
      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
        <p className="text-foreground font-semibold">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block w-full">{content}</a>;
  }
  return content;
}

function SocialButton({ icon, href }: { icon: string, href: string }) {
  return (
    <a 
      href={href} 
      className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/40 text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
    >
      <i className={icon}></i>
    </a>
  );
}
