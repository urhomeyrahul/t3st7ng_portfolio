"use client"

import { motion } from "motion/react";
import { HeroHighlight, Highlight }
  from "../components/ui/hero-highlight";
import { useEffect, useState } from "react";

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

      <nav className={`fixed top-4 inset-x-0 z-[5000] w-[100%] duration-300 
         ${scroll ? "scale-[0.85] text-l" : ""}`}>
        <div className="max-w-5xl mx-auto z-[5000] font-bold 
        flex justify-between bg-white rounded-md px-6 py-3">

          <div className="font-bold flex space-x-10 justify-between">
            <a href="#" className="hover:underline">Heading</a>
            <a href="#" className="hover:underline">Contact me</a>
          </div>

          <div className="flex space-x-10 flex justify-between">
            <a href="#" className="hover:underline">Help </a>
            <a href="#" className="hover:underline">About me</a>
            <a href="#" className="hover:underline">Careers </a>
          </div>

        </div>
      </nav>

      <HeroHighlight
        containerClassName="w-full h-[800px]"
      >
        <div className="">

          <h1
            className="font-bold text-5xl text-center 
            flex flex-col justify-center"
          >
            The Programmer
          </h1>
          <p className="text-lg mt-4">
            this covers the entire width
          </p>

        </div >
      </HeroHighlight>
    </div>
  );


}