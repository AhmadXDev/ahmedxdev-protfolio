"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true, // Add particles on click (true/false)
              mode: "push", // What happens on click ("push", "remove", "bubble")
            },
            onHover: {
              enable: true, // React to mouse hover (true/false)
              mode: "repulse", // How particles react ("repulse", "grab", "bubble", "attract")
            },
            resize: true, // Adjust on window resize (true/false)
          },
          modes: {
            push: {
              quantity: 4, // Number of particles added per click
            },
            repulse: {
              distance: 200, // How far particles move away from cursor (pixels)
              duration: 0.4, // Animation duration (seconds)
            },
          },
        },
        particles: {
          color: {
            value: "#3b82f6", // Particle color (hex code)
          },
          links: {
            color: "#3b82f6", // Connection line color (hex code)
            distance: 100, // How far particles connect (lower = closer connections)
            enable: true, // Show connection lines (true/false)
            opacity: 0.2, // Line transparency (0-1)
            width: 1, // Line thickness (pixels)
          },
          move: {
            direction: "none", // Movement direction ("none", "top", "bottom", "left", "right")
            enable: true, // Enable movement (true/false)
            outModes: {
              default: "bounce", // What happens at edges ("bounce", "out", "destroy")
            },
            random: false, // Random movement (true/false)
            speed: 0.3, // Movement speed (lower = slower, try 0.1-2)
            straight: false, // Move in straight lines (true/false)
          },
          number: {
            density: {
              enable: true, // Auto-adjust particle count based on screen size (true/false)
              area: 800, // Screen area calculation (higher = fewer particles)
            },
            value: 80, // Total number of particles (try 50-150)
          },
          opacity: {
            value: 0.3, // Particle transparency (0-1, higher = more visible)
          },
          shape: {
            type: "circle", // Particle shape ("circle", "square", "triangle", "star")
          },
          size: {
            value: { min: 1, max: 3 }, // Particle size range (pixels)
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
