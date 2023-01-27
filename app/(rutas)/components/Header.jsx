/* eslint-disable @next/next/no-img-element */
"use client"
import style from "./styles/header.module.css";
import profile_pic from "public/profile-img.jpeg";
import Image from "next/image";
import Link from "next/link";
import HomeSVG from "public/icons/home.svg";
import AboutSVG from "public/icons/user.svg";
import TrajectoSVG from "public/icons/route.svg";
import ProjectosSVG from "public/icons/briefcase.svg";
import ContactoSVG from "public/icons/mail.svg";
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"


export default function Header() {
    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState("")
    
    useEffect(() => {
        setActiveLink(pathname)
    }, [pathname])

    return (
        <header className={style.header}>
            <div className={style.profile_card}>
                <Image
                    className={style.image}
                    src={profile_pic}
                    alt="profile"
                    priority
                />
                <h1>Adrian Ferrari</h1>
                <p>Portafolio</p>
            </div>
            <nav className={style.nav_links}>
                <Link className={(activeLink === "/home" && style.focused) + " " + style.link} href="/home">
                    <HomeSVG className={style.icon} />
                    <span>HOME</span>
                </Link>
                <Link className={(activeLink === "/about" && style.focused) + " " + style.link} href="/about">
                    <AboutSVG className={style.icon} />
                    <span>SOBRE MI</span>
                </Link>
                <Link className={(activeLink === "/competencias" && style.focused) + " " + style.link} href="/competencias">
                    <TrajectoSVG className={style.icon} />
                    <span>COMPETENCIAS</span>
                </Link>
                <Link className={(activeLink === "/proyectos" && style.focused) + " " + style.link} href="/proyectos">
                    <ProjectosSVG className={style.icon} />
                    <span>PROJECTOS</span>
                </Link>
                <Link className={(activeLink === "/contacto" && style.focused) + " " + style.link} href="/contacto">
                    <ContactoSVG className={style.icon} />
                    <span>CONTACTO</span>
                </Link>
            </nav>
        </header>
    );
}
