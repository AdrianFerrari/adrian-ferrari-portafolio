/* eslint-disable @next/next/no-img-element */
import style from "./header.module.css"
import profile_pic from "../../public/profile-img.jpeg"
import Image from "next/image"
import Link from "next/link"
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
                <Link className={style.link} href="#"><HomeSVG classname={style.icon}/><span>HOME</span></Link>
                <Link className={style.link} href="#"><AboutSVG/><span>ACERCA DE MI</span></Link>
                <Link className={style.link} href="#"><TrajectoSVG/><span>TRAJECTO DE APRENDIZAJE</span></Link>
                <Link className={style.link} href="/proyectos">
                    <ProjectosSVG classname={style.icon} />
                    <span>PROJECTOS</span>
                </Link>
                <Link className={style.link} href="#"><ContactoSVG/><span>CONTACTO</span></Link>
            </nav>
        </header>
    )
}