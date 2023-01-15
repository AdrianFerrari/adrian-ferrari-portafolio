"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";

export default function Template({ children }) {
    const paginas = ["/home", "/about", "/competencias", "/proyectos", "/contacto"]
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                className="pages_motion" 
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                layout
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}