import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { contactChannels, references } from "@/data/contactLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;
    const mailSubject = subject.trim() || "New Portfolio Inquiry";
    const mailBody = [
      `Hi Alfred,`,
      ``,
      `You have a new message from your portfolio contact form:`,
      ``,
      `Name: ${name || "N/A"}`,
      `Email: ${email || "N/A"}`,
      ``,
      `Message:`,
      `${message || "No message provided."}`,
      ``,
      `---`,
      `Reply to: ${email || "N/A"}`,
    ].join("\n");

    const mailtoLink = `mailto:binfred.ke@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

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
        
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {contactChannels.map(({ icon: Icon, title, description, action, href }) => (
            <ContactChannelCard
              key={title}
              icon={<Icon className="w-5 h-5" />}
              title={title}
              description={description}
              action={action}
              href={href}
            />
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <h4 className="text-xl font-display font-semibold text-center">References</h4>
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {references.map(({ name, role, email, phone, icon: Icon }) => (
              <ReferenceCard
                key={name}
                icon={<Icon className="w-5 h-5" />}
                name={name}
                role={role}
                email={email}
                phone={phone}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="p-8 bg-secondary/20 border-white/5 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-background/50 border-white/10 focus:border-primary"
                  value={formData.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background/50 border-white/10 focus:border-primary"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
              <Input
                id="subject"
                placeholder="Project Inquiry"
                className="bg-background/50 border-white/10 focus:border-primary"
                value={formData.subject}
                onChange={handleChange("subject")}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary"
                value={formData.message}
                onChange={handleChange("message")}
              />
            </div>
            
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium" type="submit">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}

function ContactChannelCard({
  icon,
  title,
  description,
  action,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-white/5 bg-background/40 hover:border-primary/30 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <Button asChild variant="outline" className="mt-4 w-full text-sm">
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {action}
        </a>
      </Button>
    </div>
  );
}

function ReferenceCard({
  icon,
  name,
  role,
  email,
  phone,
}: {
  icon: React.ReactNode;
  name: string;
  role: string;
  email: string;
  phone: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-white/5 bg-background/30 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
        <div>
          <h5 className="text-lg font-semibold">{name}</h5>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Button asChild variant="outline" className="flex-1">
          <a href={email}>Email</a>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <a href={phone}>Call</a>
        </Button>
      </div>
    </div>
  );
}

