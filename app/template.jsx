"use client"
import { AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"

export default function Template({ children }) {
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