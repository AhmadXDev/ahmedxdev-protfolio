"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profileSummary, education, certifications, skills, softSkills, languages } from "@/data/resume";
import { GraduationCap, Award, Code, Heart, Languages as LanguagesIcon } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn direction="up">
          <SectionHeading title="About Me" subtitle="Get to know me better" />
        </FadeIn>

        <div className="mt-12 space-y-8">
          {/* Profile Summary */}
          <FadeIn direction="up" delay={0.1}>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <p className="text-foreground/80 leading-relaxed text-lg">{profileSummary}</p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <FadeIn direction="up" delay={0.2}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{education.degree}</h3>
                    <p className="text-foreground/70">{education.institution}</p>
                    <p className="text-sm text-foreground/60">
                      {education.period} • {education.location}
                    </p>
                    {education.gpa && (
                      <Badge variant="outline" className="mt-2 bg-primary/10">
                        GPA: {education.gpa}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Certifications */}
            {certifications.length > 0 && (
              <FadeIn direction="up" delay={0.3}>
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      Certifications & Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-sm text-foreground/70">{cert.issuer}</p>
                          {cert.period && (
                            <p className="text-sm text-foreground/60">{cert.period}</p>
                          )}
                          {cert.details && (
                            <p className="text-sm text-foreground/70 mt-2">{cert.details}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            )}
          </div>

          {/* Skills */}
          <FadeIn direction="up" delay={0.4}>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <h3 className="font-semibold text-sm mb-3 text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn direction="up" delay={0.5}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LanguagesIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center p-2 rounded-lg hover:bg-primary/5 transition-colors">
                        <span className="font-medium">{lang.name}</span>
                        <Badge variant="secondary">{lang.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
