/* eslint-disable @next/next/no-img-element */
"use client"

import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";

type FooterProps = {
    onContactClick: () => void;
};

export default function Footer({ onContactClick }: FooterProps) {

    return (
        <footer className="border-t shadow-lg px-5">
            <div className="scale-90 sm:scale-100 container flex flex-row 
            justify-between gap-2 sm:flex-row py-3.5 w-full shrink-0 items-center 
            px-6 md:px-6">
                <ShinyButton onClick={onContactClick}>
                    Get In Touch
                </ShinyButton>

                <nav className="sm:ml-auto flex gap-4">
                    <a href="https://github.com/urhomeyrahul"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            aria-label="GitHub"
                            className="p-2 rounded-md border border-neutral-700 
               bg-white dark:bg-black 
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
                            <Image
                                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                                unoptimized
                                className="h-6 w-6 dark:invert"
                            />
                        </button>
                    </a>
                </nav>
            </div>
        </footer>
    )

}