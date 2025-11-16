"use client";

import { Project } from "@/data/resume";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];
  const features = project.features || [];
  const hasGallery = images.length > 0;
  const isMobileApp = project.category === "Mobile App";

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-6 py-4">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  {project.status && (
                    <Badge variant="outline" className="bg-primary/10">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Overview Section */}
          {project.overview && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="text-sm px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Features with Images */}
          {features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-6">Features & Screenshots</h3>
              <div className="space-y-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-6 items-center`}
                  >
                    {/* Image */}
                    {feature.image && (
                      <motion.div 
                        className={`w-full ${isMobileApp ? 'md:w-2/5' : 'md:w-1/2'}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isMobileApp ? (
                          // Mobile app screenshot - no frame
                          <div className="relative max-w-[340px] mx-auto">
                            <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden">
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                            
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
                            <div className="absolute -inset-4 bg-linear-to-b from-primary/5 to-transparent blur-2xl -z-20 opacity-50" />
                          </div>
                        ) : (
                          // Desktop/web view
                          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </motion.div>
                    )}
                    
                    {/* Content */}
                    <div className={`w-full ${isMobileApp ? 'md:w-3/5' : 'md:w-1/2'} space-y-3`}>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </div>
                        <h4 className="text-xl font-semibold">{feature.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Image Gallery (if images but no features) */}
          {hasGallery && features.length === 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Gallery</h3>
              <div className="space-y-4">
                {/* Main Image */}
                {isMobileApp ? (
                  // Mobile app screenshot - no frame
                  <div className="relative max-w-[400px] mx-auto">
                    <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedImageIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={images[selectedImageIndex].src}
                            alt={images[selectedImageIndex].caption || project.title}
                            fill
                            className="object-contain"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
                    <div className="absolute -inset-4 bg-linear-to-b from-primary/5 to-transparent blur-2xl -z-20 opacity-50" />
                  </div>
                ) : (
                  // Desktop/web gallery view
                  <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={images[selectedImageIndex].src}
                          alt={images[selectedImageIndex].caption || project.title}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
                
                {/* Navigation Arrows */}
                {images.length > 1 && !isMobileApp && (
                  <div className="relative">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 z-10"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 z-10"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                )}

                {/* Caption */}
                {images[selectedImageIndex].caption && (
                  <div className="text-center space-y-1">
                    <p className="font-medium">{images[selectedImageIndex].caption}</p>
                    {images[selectedImageIndex].description && (
                      <p className="text-sm text-muted-foreground">
                        {images[selectedImageIndex].description}
                      </p>
                    )}
                  </div>
                )}

                {/* Navigation for mobile mockup */}
                {images.length > 1 && isMobileApp && (
                  <div className="flex justify-center gap-4 mt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={nextImage}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                )}

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                          index === selectedImageIndex
                            ? 'border-primary ring-2 ring-primary/20'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.caption || `Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Details */}
          {project.details && !project.overview && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Details</h3>
              <p className="text-muted-foreground leading-relaxed">{project.details}</p>
            </div>
          )}
        </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
