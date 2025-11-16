"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { projects, Project } from "@/data/resume";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <FadeIn direction="up">
          <SectionHeading 
            title="Projects" 
            subtitle="Showcasing my work across web, mobile, and AI development" 
          />
        </FadeIn>

        {/* Featured Projects Grid */}
        <div className="mt-12 space-y-6">
          {/* First row - Featured project (Flacardy) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-6">
              <ProjectCard
                project={projects.find(p => p.title.includes("Flacardy")) || projects[0]}
                onViewDetails={() => handleViewDetails(projects.find(p => p.title.includes("Flacardy")) || projects[0])}
              />
            </div>
          </motion.div>

          {/* Other projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => !p.title.includes("Flacardy"))
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onViewDetails={() => handleViewDetails(project)}
                />
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg">
            Want to see more? Check out my{" "}
            <a
              href="https://github.com/AhmadXDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              GitHub profile
            </a>
            {" "}for additional projects and contributions.
          </p>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
