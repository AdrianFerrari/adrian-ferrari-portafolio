/* eslint-disable @next/next/no-img-element */
import style from "./header.module.css"
import profile_pic from "../../public/profile-img.jpeg"
import Image from "next/image"
import HomeSVG from "../../public/icons/home.svg"
import AboutSVG from "../../public/icons/user.svg"
import TrajectoSVG from "../../public/icons/route.svg"
import ProjectosSVG from "../../public/icons/briefcase.svg"
import ContactoSVG from "../../public/icons/mail.svg"


export default function Header() {

    return(
        <header className={style.header}>
            <div className={style.profile_card}>
                <Image
                    className={style.image}
                    src={profile_pic}
                    alt="profile"
                />
                <h1>ADRIAN FERRARI</h1>
                <p>Desarrolador Web</p>
            </div>
            <nav className={style.nav_links}>
                <a><HomeSVG classname={style.icon}/><span>HOME</span></a>
                <a><AboutSVG/><span>ACERCA DE MI</span></a>
                <a><TrajectoSVG/><span>TRAJECTO DE APRENDIZAJE</span></a>
                <a href="/proyectos">
                    <ProjectosSVG classname={style.icon} />
                    <span>PROJECTOS</span>
                </a>
                <a><ContactoSVG/><span>CONTACTO</span></a>
            </nav>
        </header>
    )
}