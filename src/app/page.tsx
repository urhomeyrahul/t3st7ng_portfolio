"use client"

import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Particles from '../blocks/Backgrounds/Particles/Particles';
import { SmoothCursor } from "../components/ui/smooth-cursor";

export default function Home() {

  const [scroll, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(scrollY > 35);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[1280px]">
      <ScrollProgress />
      <SmoothCursor />

      <nav className={`fixed top-4 inset-x-0 z-[5000] w-[100%] duration-300 
         ${scroll ? "scale-[0.75] text-l" : ""}`}>
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
            particleCount={200}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="absolute inset-0 z-0"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-5 z-10 pointer-events-none">
            <h1
              className="font-bold text-5xl flex px-6"
            >
              The Programmer
            </h1>
            <p className="text-lg flex flex-col px-6 py-2">
              Front-End Developer crafting high-performance, responsive, and user-friendly web
              <br />applications using modern technologies
            </p>
          </div>

        </div>

      </div>

    </div>
  );


}