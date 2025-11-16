"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/resume";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <FadeIn direction="up">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-center text-foreground/80">
                  I'm always open to discussing new projects, creative ideas, or opportunities to
                  be part of your visions.
                </p>

                <div className="space-y-3 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild>
                    <a href={`mailto:${personalInfo.email}`}>Send Email</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

