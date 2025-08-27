"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ShinyButton } from "@/components/magicui/shiny-button";

type HeaderProps = {
    handleOpen: () => void;
};

export default function Header({ handleOpen }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let mainNavLink

    if (pathname === "/projects") {
        mainNavLink = (
            <>
                <Link href="/">
                    <ShinyButton>Home</ShinyButton>
                </Link>
                <Link href="/timeline">
                    <ShinyButton>Timeline</ShinyButton>
                </Link>
            </>
        )
    } else if (pathname === "/") {
        mainNavLink = (
            <>
                <Link href="/projects">
                    <ShinyButton>Projects</ShinyButton>
                </Link>
                <Link href="/timeline">
                    <ShinyButton>Timeline</ShinyButton>
                </Link>
            </>
        )
    } else if (pathname === "/timeline") {
        mainNavLink = (
            <>
                <Link href="/">
                    <ShinyButton>Home</ShinyButton>
                </Link>
                <Link href="/projects">
                    <ShinyButton>Projects</ShinyButton>
                </Link>
            </>
        )
    }

    return (
        <nav
            className={`
    fixed inset-x-0 z-[5000] w-full duration-300
    top-2 sm:top-4
    scale-90 sm:scale-100
    ${scrolled ? "scale-[0.85] sm:scale-[0.95]" : ""} 
  `}
        >
            <div
                className="
      max-w-5xl mx-auto font-bold flex justify-between items-center
      rounded-lg 
      px-3 py-2 text-xs sm:text-md
      sm:px-6 sm:py-3 sm:text-base
      bg-white/20 dark:bg-black/20 backdrop-blur-md
      border border-white/40 dark:border-white/20 shadow-lg
      text-black dark:text-white
    "
            >
                {mainNavLink}

                <div className="flex items-center space-x-5 sm:space-x-6 ">
                    <ShinyButton
                        textClassName="text-[10px] sm:text-lg"
                        onClick={(e) => {
                            e.preventDefault();
                            handleOpen();
                        }}
                    >
                        Contact me
                    </ShinyButton>

                    <AnimatedThemeToggler />
                </div>
            </div>
        </nav>
    );
}
