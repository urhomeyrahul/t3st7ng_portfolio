"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Menu, X } from "lucide-react";

type HeaderProps = {
    handleOpen: () => void;
};

export default function Header({ handleOpen }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/timeline", label: "Timeline" },
    ];

    // pick "primary" tab (one shown on mobile without opening menu)
    const primaryTab = links.find((l) => l.href !== pathname) || links[0];
    const otherTabs = links.filter((l) => l.href !== primaryTab.href);

    return (
        <nav
            className={`fixed inset-x-0 z-[5000] w-full duration-300 
        top-2 sm:top-4
        scale-90 sm:scale-100
        ${scrolled ? "scale-[0.85] sm:scale-[0.95]" : ""}`}
        >
            <div
                className="max-w-5xl mx-auto font-bold flex justify-between items-center
          rounded-lg px-3 py-2 text-xs sm:text-md
          sm:px-6 sm:py-3 sm:text-base
          bg-white/20 dark:bg-black/20 backdrop-blur-md
          border border-white/40 dark:border-white/20 shadow-lg
          text-black dark:text-white"
            >

                <div className="hidden sm:flex gap-3">
                    {links
                        .filter((l) => l.href !== pathname)
                        .map((link) => (
                            <Link key={link.href} href={link.href}>
                                <ShinyButton>{link.label}</ShinyButton>
                            </Link>
                        ))}
                </div>

                <div className="flex sm:hidden items-center gap-2">
                    <Link href={primaryTab.href}>
                        <ShinyButton>{primaryTab.label}</ShinyButton>
                    </Link>
                    <button
                        className="p-2 rounded-lg bg-white/30 dark:bg-black/30"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div className="flex items-center space-x-5 sm:space-x-6">
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

            {menuOpen && (
                <div
                    className="sm:hidden mt-2 mx-3 rounded-lg bg-white/90 dark:bg-black/90
            backdrop-blur-md border border-white/30 dark:border-white/20 shadow-lg p-3 flex flex-col gap-2"
                >
                    {otherTabs.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            <ShinyButton className="w-full">{link.label}</ShinyButton>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
