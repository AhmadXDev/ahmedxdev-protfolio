"use client";

import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";
import { GradientOrbs } from "@/components/gradient-orbs";
import { ParticleBackground } from "@/components/particle-background";
import { TypingEffect } from "@/components/typing-effect";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function HeroSection() {
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const typingTexts = [
    "AI-Driven Developer",
    "Full-Stack Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Multiple layered animated backgrounds */}
      <ParticleBackground />
      <GradientOrbs />
      <FloatingIcons />

      <div className="container mx-auto text-center relative z-10">
        <FadeIn direction="up" delay={0.2}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="gradient-text inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {firstName}
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [-1, 1, -1],
                  transition: { duration: 0.3 }
                }}
              >
                {lastName}
              </motion.span>
            </motion.h1>
          </motion.div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <TypingEffect texts={typingTexts} className="font-semibold text-primary" />
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </motion.div>
            <p>{personalInfo.tagline}</p>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn direction="up" delay={0.5}>
          <div className="flex gap-4 justify-center mb-8">
            {personalInfo.github && (
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors relative group"
              >
                <Github className="w-6 h-6" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            )}
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors relative group"
            >
              <Linkedin className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors relative group"
            >
              <Mail className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="group relative overflow-hidden">
                <a href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <motion.span
                    className="ml-2 inline-block relative z-10"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ↓
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild className="group">
                <a href="#contact">
                  <span>Get In Touch</span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    👋
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
