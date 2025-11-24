import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 1-100
  index: number;
}

export default function SkillBadge({ name, icon, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group"
    >
      <div className="flex items-center gap-3 bg-secondary/30 border border-white/5 hover:border-primary/40 rounded-xl px-4 py-3 transition-all hover:bg-secondary/50 cursor-default">
        {icon && <span className="text-primary">{icon}</span>}
        <span className="font-medium text-foreground">{name}</span>
      </div>
    </motion.div>
  );
}
