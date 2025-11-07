"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profileSummary, education, certifications, skills, softSkills, languages } from "@/data/resume";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <FadeIn direction="up">
          <SectionHeading title="About Me" subtitle="Get to know me better" />
        </FadeIn>

        <div className="mt-12 space-y-8">
          {/* Profile Summary */}
          <FadeIn direction="up" delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle>Profile Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{profileSummary}</p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Education */}
          <FadeIn direction="up" delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{education.degree}</h3>
                  <p className="text-foreground/70">{education.institution}</p>
                  <p className="text-sm text-foreground/60">
                    {education.period} • {education.location}
                  </p>
                  {education.gpa && (
                    <p className="text-sm text-primary font-medium mt-2">GPA: {education.gpa}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Certifications */}
          {certifications.length > 0 && (
            <FadeIn direction="up" delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>Certifications & Training</CardTitle>
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

          {/* Skills */}
          <FadeIn direction="up" delay={0.4}>
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-sm mb-2 text-primary">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-muted text-foreground rounded-md text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn direction="up" delay={0.5}>
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-foreground/70">{lang.level}</span>
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

