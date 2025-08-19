"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import Particles from '../blocks/Backgrounds/Particles/Particles';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SmoothCursor } from "../components/ui/smooth-cursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

    return (
        <>
            <Header handleOpen={handleOpen} />

            <div className="fixed inset-0 -z-10">
                <Particles
                    particleColors={["#22ddc12f", "#2467ccff"]}
                    particleCount={800}
                    particleSpread={20}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                    className="absolute inset-0"
                />
            </div>

            <main className="min-h-screen overflow-x-hidden">
                <ScrollProgress />
                <SmoothCursor />
                {children}
            </main>

            <Footer onContactClick={handleOpen} />
            <ContactModal open={isModalOpen} handleClose={handleClose} />
        </>

    );
}
