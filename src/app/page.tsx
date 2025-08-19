/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Particles from '../blocks/Backgrounds/Particles/Particles';
import { SmoothCursor } from "../components/ui/smooth-cursor";
import { ScrollVelocityContainer, ScrollVelocityRow, } from "@/components/magicui/scroll-based-velocity";
import { Mail } from "lucide-react";

export default function Home() {

  const IMAGES_ROW_A = [
    { label: "JavaScript", src: "https://cdn.simpleicons.org/javascript?viewbox=auto&size=20" },
    { label: "React", src: "https://cdn.simpleicons.org/react?viewbox=auto&size=20" },
    { label: "TypeScript", src: "https://cdn.simpleicons.org/typescript?viewbox=auto&size=20" },
    { label: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs?viewbox=auto&size=20" },
    { label: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss?viewbox=auto&size=20" },
    { label: "Vue.js", src: "https://cdn.simpleicons.org/vuedotjs?viewbox=auto&size=20" },
    { label: "Android Studio", src: "https://cdn.simpleicons.org/androidstudio?viewbox=auto&size=20" },
    { label: "Nuxt.js", src: "https://cdn.simpleicons.org/nuxt?viewbox=auto&size=20" },
    { label: "CSS", src: "https://cdn.simpleicons.org/css?viewbox=auto&size=20" },
  ];

  const IMAGES_ROW_B = [
    { label: "GitHub", src: "https://cdn.simpleicons.org/github?viewbox=auto&size=20" },
    { label: "GitHub Copilot", src: "https://cdn.simpleicons.org/githubcopilot?viewbox=auto&size=20" },
    { label: "Postman", src: "https://cdn.simpleicons.org/postman?viewbox=auto&size=20" },
    { label: "Docker", src: "https://cdn.simpleicons.org/docker?viewbox=auto&size=20" },
    { label: "Git", src: "https://cdn.simpleicons.org/git?viewbox=auto&size=20" },
    { label: "Figma", src: "https://cdn.simpleicons.org/figma?viewbox=auto&size=20" },
  ];

  const IMAGES_ROW_C = [
    { label: "Wireshark", src: "https://cdn.simpleicons.org/wireshark?viewbox=auto&size=20" },
    { label: "OWASP", src: "https://cdn.simpleicons.org/owasp?viewbox=auto&size=20" },
    { label: "Cyber Security", src: "https://cdn.simpleicons.org/cyberdefenders?viewbox=auto&size=20" },
    { label: "Metasploit", src: "https://cdn.simpleicons.org/metasploit?viewbox=auto&size=20" },
    { label: "Linux", src: "https://cdn.simpleicons.org/linux?viewbox=auto&size=20" },
    { label: "Kali Linux", src: "https://cdn.simpleicons.org/kalilinux?viewbox=auto&size=20" },
    { label: "Burp Suite", src: "https://cdn.simpleicons.org/burpsuite?viewbox=auto&size=20" },
    { label: "ZAP", src: "https://cdn.simpleicons.org/zap?viewbox=auto&size=20" },
    { label: "Red Hat", src: "https://cdn.simpleicons.org/redhat?viewbox=auto&size=20" },
  ];

  const handleSubmit = () => {
    return false;
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="min-h-[1280px] overflow-y-hidden overflow-x-hidden">
      <ScrollProgress />
      <SmoothCursor />
      <div className="h-[1280px] w-full">

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Particles
            particleColors={['#2ddc12ff', '#2467ccff']}
            particleCount={800}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="absolute inset-0 z-0"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-15 z-10">
            <h1
              className="font-bold text-6xl flex px-6 py-2"
            >
              The Programmer | C0d3r
            </h1>
            <p className="text-lg flex flex-col px-6 py-2">
              Front-End Developer crafting high-performance, responsive, and user-friendly web
              <br />applications using modern technologies
            </p>

            <div className="flex gap-4 mt-8 px-4">

              <a
                href="mailto:rahul.aa.2015@gmail.com"
                aria-label="Hire me via email"
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium shadow hover:shadow-md transition 
             bg-black text-white dark:bg-white dark:text-black"
              >
                <Mail className="w-4 h-4" />
                Hire me
              </a>
              <a
                href="https://github.com/urhomeyrahul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  aria-label="GitHub"
                  className="p-2 rounded-md border border-neutral-700 
               bg-white dark:bg-black 
               hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                >
                  <img
                    src="https://cdn.simpleicons.org/github/000000"
                    alt="GitHub"
                    className="h-6 w-6 dark:invert"
                  />
                </button>
              </a>

              <a
                href="https://linkedin.com/in/raggarwa24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  aria-label="LinkedIn"
                  className="p-2 rounded-md border border-neutral-700 
               bg-white dark:bg-black 
               hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                    alt="LinkedIn"
                    className="h-6 w-6 dark:invert"
                  />
                </button>
              </a>

            </div>

          </div>


        </div>
        <div className="py-25">
          <h1 className="font-bold text-5xl flex px-22 py-2">
            Technology Stack
          </h1>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
          <div className="relative w-[80%] rounded-3xl overflow-hidden">
            <ScrollVelocityContainer>
              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-1">
                {IMAGES_ROW_A.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-4">
                    <img
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-15 rounded-md"
                    />
                    <span className="mt-1 text-sm text-center">{item.label}</span>
                  </div>
                ))}
              </ScrollVelocityRow>

              <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                {IMAGES_ROW_B.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-4 my-6">
                    <img
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-15 rounded-lg"
                    />
                    <span className="mt-1 text-sm text-center">{item.label}</span>
                  </div>
                ))}
              </ScrollVelocityRow>

              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
                {IMAGES_ROW_C.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-4">
                    <img
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-15 rounded-md"
                    />
                    <span className="mt-1 text-sm text-center">{item.label}</span>
                  </div>
                ))}
              </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>

      </div>

    </div >
  );

}
