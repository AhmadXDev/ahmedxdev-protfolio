"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { ExperienceSection } from "@/sections/experience";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
