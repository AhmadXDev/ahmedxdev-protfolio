"use client";

import { FadeIn } from "@/components/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Palette, Code2, Layers, Box } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript } from "react-icons/si";

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smooth Animations",
      description: "Built with Framer Motion for fluid, performant animations",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Modern Design",
      description: "Tailwind CSS and Shadcn/UI for beautiful, accessible components",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "TypeScript First",
      description: "Full type safety with the latest TypeScript features",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Next.js 15 with React 19 for optimal performance",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Component Library",
      description: "Pre-built components with Shadcn/UI integration",
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Flexible Styling",
      description: "SCSS, CSS Modules, and utility-first CSS support",
    },
  ];

  const techStack = [
    { icon: <SiNextdotjs className="h-8 w-8" />, name: "Next.js 15" },
    { icon: <FaReact className="h-8 w-8" />, name: "React 19" },
    { icon: <SiTypescript className="h-8 w-8" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="h-8 w-8" />, name: "Tailwind CSS" },
    { icon: <SiFramer className="h-8 w-8" />, name: "Framer Motion" },
    { icon: <FaNodeJs className="h-8 w-8" />, name: "Node.js" },
  ];

  return (
    <main className="from-background via-background to-accent/5 min-h-screen bg-gradient-to-br">
      {/* Hero Section */}
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <FadeIn className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border-border bg-card mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm"
          >
            <Sparkles className="text-primary h-4 w-4" />
            <span>Built with Next.js 15 + React 19</span>
          </motion.div>

          <h1 className="from-foreground to-foreground/70 mb-6 bg-gradient-to-br bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Profit.io
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            A highly interactive and visually polished web application. Experience smooth
            animations, modern design, and cutting-edge technology.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-lg transition-all hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-border bg-card hover:bg-accent inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold shadow-sm transition-all"
            >
              View Components
            </motion.button>
          </div>
        </FadeIn>

        {/* Tech Stack */}
        <FadeIn delay={0.3} className="mt-20 w-full max-w-4xl">
          <p className="text-muted-foreground mb-8 text-center text-sm font-medium tracking-wider uppercase">
            Powered By Modern Technology
          </p>
          <StaggerContainer className="grid grid-cols-3 gap-8 sm:grid-cols-6">
            {techStack.map((tech, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="border-border bg-card flex flex-col items-center gap-3 rounded-xl border p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-foreground">{tech.icon}</div>
                  <span className="text-muted-foreground text-xs font-medium">{tech.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <FadeIn className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A complete setup with best practices and modern tooling for building exceptional user
            experiences.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="group border-border bg-card h-full rounded-2xl border p-6 shadow-sm transition-all"
              >
                <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-lg p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <FadeIn>
          <div className="border-border from-primary/10 via-primary/5 to-accent/5 relative overflow-hidden rounded-3xl border bg-gradient-to-br p-12 text-center shadow-xl">
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Start creating beautiful, interactive interfaces with this modern tech stack.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-foreground text-background inline-flex items-center gap-2 rounded-lg px-8 py-4 font-semibold shadow-lg transition-all hover:shadow-xl"
              >
                Start Building
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-0">
              <div className="bg-primary/20 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
              <div className="bg-accent/20 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-border border-t py-8">
        <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
          <p>Built with ❤️ using Next.js 15, React 19, and modern web technologies</p>
        </div>
      </footer>
    </main>
  );
}
