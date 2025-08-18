"use client"

import { ShinyButton } from "@/components/magicui/shiny-button";

type FooterProps = {
    onContactClick: () => void;
};

export default function Footer({ onContactClick }: FooterProps) {

    return (
        <footer className="border-t shadow-lg px-15">
            <div className="container flex flex-col justify-between gap-2 sm:flex-row py-3.5 w-full shrink-0 items-center px-6 md:px-6">
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
                </nav>
            </div>
        </footer>
    )

}