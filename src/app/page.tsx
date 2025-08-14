"use client"

import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Particles from '../blocks/Backgrounds/Particles/Particles';
import { SmoothCursor } from "../components/ui/smooth-cursor";
import { ScrollVelocityContainer, ScrollVelocityRow, } from "@/components/magicui/scroll-based-velocity";

export default function Home() {

  const [scroll, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(scrollY > 35);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[1280px] overflow-x-hidden">
      <ScrollProgress />
      <SmoothCursor />

      <nav className={`fixed top-4 inset-x-0 z-[5000] w-[100%] duration-300 
         ${scroll ? "scale-[0.90] text-l" : ""}`}>
        <div className="max-w-5xl mx-auto z-[5000] font-bold 
    flex justify-between rounded-md px-6 py-3
    bg-white/20 dark:bg-black/20 backdrop-blur-md
    border border-white/40 dark:border-white/20
    shadow-lg text-black dark:text-white">

          <div className="font-bold flex space-x-10 justify-between">
            <a href="#" className="hover:underline ">Heading</a>
            <a href="#" className="hover:underline ">Contact me</a>
          </div>

          <div className="flex space-x-10 flex justify-between">
            <a href="#" className="hover:underline ">Help </a>
            <a href="#" className="hover:underline ">About me</a>
            <a href="#" className="hover:underline ">Careers </a>
            <AnimatedThemeToggler />
          </div>

        </div>
      </nav>

      <div className="h-[1280px] w-full">
        {/* <DotPattern glow={true} /> */}

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

          <div className="absolute inset-0 flex flex-col justify-center px-15 z-10 pointer-events-none">
            <h1
              className="font-bold text-5xl flex px-6 py-2"
            >
              The Programmer
            </h1>
            <p className="text-lg flex flex-col px-6 py-2">
              Front-End Developer crafting high-performance, responsive, and user-friendly web
              <br />applications using modern technologies
            </p>


          </div>

        </div>
        <div className="py-20">
          <h1 className="font-bold text-5xl flex px-22 py-2">
            Technology Stack
          </h1>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
          <div className="relative w-[80%] rounded-3xl overflow-hidden">
            <ScrollVelocityContainer>
              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
                {IMAGES_ROW_A.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-6">
                    <img
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="h-15 w-20 rounded-md"
                    />
                    <span className="mt-1 text-sm text-center">{item.label}</span>
                  </div>
                ))}
              </ScrollVelocityRow>

              <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                {IMAGES_ROW_B.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-6 my-6">
                    <img
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="h-15 w-26 rounded-lg"
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



    </div>
  );


}