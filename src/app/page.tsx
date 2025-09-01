"use client"

import { useState } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow, } from "@/components/magicui/scroll-based-velocity";
import { Mail } from "lucide-react";
import Image from "next/image";
import { AboutData } from '@/app/maindata'

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="flex flex-col flex-col justify-center px-1 sm:px-15 sm:py-20 py-17 space-y-32 z-10">
      <section className="max-w-3xl py-45 scale-80 sm:scale-100">
        <h1 className="font-bold text-6xl mb-4">The Programmer | C0d3r</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Front-End Developer crafting high-performance, responsive, and user-friendly web
          <br />applications using modern technologies
        </p>

        <div className="flex gap-4 mt-8">
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
            aria-label="GitHub"
            className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            <Image
              src="https://cdn.simpleicons.org/github/000000"
              alt="GitHub"
              width={24}
              unoptimized
              height={24}
              className="h-6 w-6 dark:invert"
            />
          </a>

          <a
            href="https://linkedin.com/in/raggarwa24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            <Image
              src="https://www.svgrepo.com/show/448234/linkedin.svg"
              alt="LinkedIn"
              width={24}
              unoptimized
              height={24}
              className="h-6 w-6 dark:invert"
            />
          </a>
        </div>
      </section>

      <section className="w-full max-w-10xl scale-85 sm:scale-80 sm:scale-100">

        <h1 className="font-bold text-6xl mb-4">About</h1>

        {AboutData.map((about, index) => (
          <div key={index} className="flex flex-col lg:flex-row justify-center gap-10">
            <section className="lg:w-1/3">


              <div className="">
                <Image
                  alt={about.title}
                  src={about.image}
                  height={200}
                  width={220}
                  className="rounded-4xl mt-8"
                />

                <p className="text-2xl text-bold text-gray-600 dark:text-gray-300 mt-6">
                  Rahul Aggarwal
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Software Engineer
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com/urhomeyrahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                  >
                    <Image
                      src="https://cdn.simpleicons.org/github/000000"
                      alt="GitHub"
                      width={24}
                      unoptimized
                      height={24}
                      className="h-6 w-6 dark:invert"
                    />
                  </a>

                  <a
                    href="https://linkedin.com/in/raggarwa24"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                  >
                    <Image
                      src="https://www.svgrepo.com/show/448234/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      unoptimized
                      height={24}
                      className="h-6 w-6 dark:invert"
                    />
                  </a>

                  <a
                    href="https://wa.me/+919205830413"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Whatsapp"
                    className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                  >
                    <Image
                      src="https://cdn.simpleicons.org/whatsapp/000000"
                      alt="Whatsapp"
                      width={24}
                      unoptimized
                      height={24}
                      className="h-6 w-6 dark:invert"
                    />
                  </a>

                  <a
                    href="http://instagram.com/urhomey.rahul1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                  >
                    <Image
                      src="https://cdn.simpleicons.org/instagram/000000"
                      alt="Instagram"
                      width={24}
                      unoptimized
                      height={24}
                      className="h-6 w-6 dark:invert"
                    />
                  </a>

                  <a
                    href="http://x.com/raggarwal413"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="p-2 rounded-md border border-neutral-700 bg-white dark:bg-black 
              hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                  >
                    <Image
                      src="https://cdn.simpleicons.org/x/000000"
                      alt="Twitter"
                      width={24}
                      unoptimized
                      height={24}
                      className="h-6 w-6 dark:invert"
                    />
                  </a>

                </div>
              </div>

            </section>

            <section className="flex flex-col gap-4 pt-3 lg:w-1/2 mb-25">
              <p>{about.description}</p>

              <ul className="list-disc pl-5 space-y-2">
                {about.additionalPoints.map((point, i) => (
                  <li key={i}>✅ {point}</li>
                ))}
              </ul>

              <p>{about.extraDescription}</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Capable of working on all layers of software development, from database to user interface.</li>
                <li>Strong problem-solving abilities and ability to adapt to new technologies quickly.</li>
                <li>Familiar with various operating systems, including Windows, Linux, and Unix, and their security features and vulnerabilities.</li>
              </ul>
            </section>
          </div>
        ))}

      </section>


      <section className="w-full max-w-10xl scale-85 sm:scale-80 sm:scale-100">
        <h2 className="font-bold text-5xl mb-8 py-2">Technology Stack</h2>

        <div className="relative flex flex-col items-center justify-center overflow-x-hidden">
          <div className="relative w-[100%] sm:w-[80%] rounded-3xl sm:rounded-3xl overflow-hidden mb-25 pt-9">
            <ScrollVelocityContainer>
              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-1">
                {IMAGES_ROW_A.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-4">
                    <Image
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={24}
                      unoptimized
                      height={24}
                      className="h-7 w-15 sm:h-8 sm:w-15 rounded-md"
                    />
                    <span className="mt-1 text-sm text-center">{item.label}</span>
                  </div>
                ))}
              </ScrollVelocityRow>

              <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                {IMAGES_ROW_B.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-4 my-6">
                    <Image
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={24}
                      unoptimized
                      height={24}
                      className="h-7 w-15 sm:h-8 sm:w-15 rounded-md"
                    />
                    <span className="mt-1 text-sm text-center">{item.label}</span>
                  </div>
                ))}
              </ScrollVelocityRow>

              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
                {IMAGES_ROW_C.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-4">
                    <Image
                      src={`${item.src}&ixlib=rb-4.0.3`}
                      alt={item.label}
                      width={24}
                      unoptimized
                      height={24}
                      className="h-7 w-15 sm:h-8 sm:w-15 rounded-md"
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
      </section>

    </main>
  );

}
