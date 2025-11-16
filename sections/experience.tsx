"use client";

import { FadeIn } from "@/components/fade-in";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { workExperience } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <FadeIn direction="up">
          <SectionHeading title="Experience" subtitle="My professional journey" />
        </FadeIn>
        <div className="mt-12 space-y-6">
          {workExperience.map((exp, index) => (
            <FadeIn key={exp.title} direction="up" delay={0.2 * index}>
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company} • {exp.location} • {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

