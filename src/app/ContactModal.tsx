"use client"

import { Mail, User, MessageSquare } from "lucide-react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';

type ContactModalProps = {
    open: boolean;
    handleClose: () => void;
}

export default function ContactModal({ open, handleClose }: ContactModalProps) {

    const handleSubmit = () => {
        return false;
    }

    return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: Backdrop }}
                closeAfterTransition
                disableScrollLock
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

            )

}