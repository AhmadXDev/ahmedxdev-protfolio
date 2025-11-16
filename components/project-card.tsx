"use client";

import { Project } from "@/data/resume";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const thumbnail = project.images?.[0]?.src || project.features?.[0]?.image;
  const bannerImage = project.banner || thumbnail;
  const hasDetails = project.features || project.images;
  const isMobileApp = project.category === "Mobile App";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
    >
      <Card 
        className="h-full flex flex-col overflow-hidden group bg-linear-to-br from-background to-background/50 border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer relative"
        onClick={hasDetails ? onViewDetails : undefined}
      >
        {/* Hover overlay with "Click to explore" */}
        {hasDetails && (
          <motion.div 
            className="absolute inset-0 bg-primary/95 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={{ opacity: 0 }}
          >
            <motion.div 
              className="text-center text-primary-foreground space-y-3"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Zap className="w-16 h-16 mx-auto drop-shadow-lg" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Zap className="w-16 h-16 mx-auto" />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-xl font-bold tracking-wide"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Click to explore
              </motion.p>
              <motion.div
                className="flex gap-1 justify-center"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        <CardHeader className="pt-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex gap-2 flex-wrap">
              {/* Category Badge */}
              {project.category && (
                <Badge variant="secondary">
                  {project.category}
                </Badge>
              )}
              
              {/* Status Badge */}
              {project.status && (
                <Badge variant="outline" className="bg-primary/10 border-primary/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {project.status}
                </Badge>
              )}
            </div>
          </div>

          {/* Banner Image */}
          {bannerImage && (
            <div className="relative w-full h-100 rounded-lg overflow-hidden bg-linear-to-br from-primary/5 to-primary/10">
              <Image
                src={bannerImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col gap-4">
          {/* Overview */}
          {project.overview && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.overview}
            </p>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge 
                key={tech} 
                variant="outline"
                className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="text-sm text-muted-foreground space-y-1 flex-1">
              {project.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Actions */}
          <div className="flex gap-2 mt-auto pt-4">
            {project.github && (
              <Button 
                asChild 
                variant="outline" 
                size="icon"
                className="hover:bg-primary/10"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.link && (
              <Button 
                asChild 
                variant="outline" 
                size="icon"
                className="hover:bg-primary/10"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
