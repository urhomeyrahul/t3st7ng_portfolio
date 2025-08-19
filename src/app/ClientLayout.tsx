"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

    return (
        <>
            <Header handleOpen={handleOpen} />
            {children}
            <Footer onContactClick={handleOpen} />
            <ContactModal open={isModalOpen} handleClose={handleClose} />
        </>
    );
}
