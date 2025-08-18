"use client"

import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Particles from '../blocks/Backgrounds/Particles/Particles';
import { SmoothCursor } from "../components/ui/smooth-cursor";
import { ScrollVelocityContainer, ScrollVelocityRow, } from "@/components/magicui/scroll-based-velocity";
import { Mail, User, MessageSquare } from "lucide-react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Footer from '@/app/Footer'

import { ShinyButton } from "@/components/magicui/shiny-button";


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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(scrollY > 35);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    return false;
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {/* <a href="#" className="hover:underline "> */}
            <ShinyButton>Heading</ShinyButton>
            {/* </a> */}
            {/* <a href="#" className="hover:underline " onClick={(e) => { e.preventDefault; handleOpen(); }}> */}
            <ShinyButton onClick={(e) => { e.preventDefault; handleOpen(); }}>
              Contact me
            </ShinyButton>
            {/* </a> */}
          </div>

          <div className="flex space-x-10 flex justify-between">
            {/* <a href="#" className="hover:underline "> */}
            <ShinyButton>About</ShinyButton>
            {/* </a> */}
            <AnimatedThemeToggler />
          </div>

        </div>
      </nav >

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
              className="font-bold text-5xl flex px-6 py-2"
            >
              The Programmer
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

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          slots={{ backdrop: Backdrop }}
          closeAfterTransition
          slotProps={{
            backdrop: { timeout: 500 },
          }}
        >
          <Fade in={open}>
            <Box
              className="
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    w-full max-w-md rounded-xl shadow-lg p-6 
    bg-black text-white 
    dark:bg-gray-900 dark:text-white
  "
            >
              <h2 className="font-bold text-3xl">Contact Me</h2>
              <p className="text-sm text-gray-300 mt-4">
                I typically respond quickly, so feel free to reach out!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 
                   bg-transparent text-white 
                   placeholder-gray-400"
                    placeholder="Name"
                    required
                  />
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 
                   bg-transparent text-white 
                   placeholder-gray-400"
                    placeholder="Email"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 
                   bg-transparent text-white 
                   placeholder-gray-400"
                    placeholder="Type your message"
                    required
                  />
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 rounded-md font-medium 
                   bg-gray-700 text-white 
                   hover:opacity-80 transition"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md font-medium 
                   bg-blue-600 text-white 
                   hover:opacity-80 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Box>

          </Fade>
        </Modal>

      </div>

      <Footer onContactClick={handleOpen} />

    </div >
  );

}
