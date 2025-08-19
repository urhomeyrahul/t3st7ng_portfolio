"use client"

import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ShinyButton } from "@/components/magicui/shiny-button";

type HeaderProps = {
    handleOpen: () => void;
}

export default function Header({ handleOpen }: HeaderProps) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>

            <nav className={`fixed top-4 inset-x-0 z-[5000] w-[100%] duration-300 
         ${scrolled ? "scale-[0.90] text-l" : ""}`}>
                <div className="max-w-5xl mx-auto z-[5000] font-bold 
    flex justify-between rounded-md px-6 py-3
    bg-white/20 dark:bg-black/20 backdrop-blur-md
    border border-white/40 dark:border-white/20
    shadow-lg text-black dark:text-white">

                    <div className="font-bold flex space-x-10 justify-between">
                        {/* <a href="#" className="hover:underline "> */}
                        <ShinyButton>Projects</ShinyButton>
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

        </>
    )

}