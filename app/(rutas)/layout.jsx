"use client"
import { AnimatePresence } from "framer-motion"

export default function Layout({children}){
    return (
        <AnimatePresence mode="wait">
            {children}
        </AnimatePresence>
    )
}