"use client"
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

let lastIndex = 0

export default function Template({ children }) {
    const [windowWidth, setWindowWidth] = useState(() => {
        if (typeof window !== 'undefined') return window.innerWidth
    })
    const paginas = ["/home", "/about", "/competencias", "/proyectos", "/contacto"]
    const pathname = usePathname()
    const currentIndex = paginas.indexOf(pathname)

    useEffect(() => {
        lastIndex = paginas.indexOf(pathname)
    }, [pathname])

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
      
        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    const deArriba = [{ y: 300, opacity: 0}, { y: 0, opacity: 1}]
    const deAbajo = [{ y: -300, opacity: 0}, { y: 0, opacity: 1}]

    const deDerecha = [{ x: 300, opacity: 0}, { x: 0, opacity: 1}]
    const deIzquierda = [{ x: -300, opacity: 0}, { x: 0, opacity: 1}]

    return (
        <motion.div
            key={pathname}
            className="pages_motion" 
            initial={windowWidth < 660 ? (currentIndex > lastIndex ? deDerecha[0] : deIzquierda[0]) : currentIndex > lastIndex ? deArriba[0] : deAbajo[0]}
            animate={windowWidth < 660 ? (currentIndex > lastIndex ? deDerecha[1] : deIzquierda[1]) : currentIndex > lastIndex ? deArriba[1] : deAbajo[1]}
            exit={{ x: 300, opacity: 0 }}
            layout
        >
            {children}
        </motion.div>
    )
}