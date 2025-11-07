"use client";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/resume";

export function HeroSection() {
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{firstName}</span> {lastName}
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.6}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

