"use client";
import Image from "next/image"
import style from "./proyectos.module.css"
import useSWR from "swr"
import ProjectModalCard from "../components/ProjectModalCard";

//imagenes
import pastry_shop_home from "../../public/screenshots/pastry_shop_home.jpeg"
import chat_app from "../../public/screenshots/chat_app.jpeg"
import quiz_app from "../../public/screenshots/quiz_app.jpeg"
import tenzies from "../../public/screenshots/tenzies.jpeg"
import pics_shop from "../../public/screenshots/pics_shop.jpeg"
import supplies_crud from "../../public/screenshots/supplies_crud.jpeg"
import profile_card from "../../public/screenshots/profile_card.jpeg"
import color_picker from "../../public/screenshots/color_picker.jpeg"

async function getData(...args) {
    const res = await fetch(...args)
    if(!res.ok) throw new Error('Failed to fetch data');
    return res.json()
}

export default function Proyectos() {
    const { data, error, isLoading } = useSWR('/api/projectosdata', getData);
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>

    const proyectsData = JSON.parse(data)
    const dataHTML = proyectsData.map((item, i) => {
        return(
            <ProjectModalCard key={i} {...item}/>
        )
    })
    

    return(
        <div className={style.proyectos}>
            <h1>PROYECTOS</h1>
            <hr/>
            <div className={style.proyectos_grid}>
                <Image 
                    className={[style.images, style.pastry].join(" ")}
                    src={pastry_shop_home}
                    alt="pastry shop"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.chat].join(" ")}
                    src={chat_app}
                    alt="chat app"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.quiz].join(" ")}
                    src={quiz_app}
                    alt="quiz app"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.pics].join(" ")}
                    src={pics_shop}
                    alt="pictures shop"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.supplies].join(" ")}
                    src={supplies_crud}
                    alt="supplies crud app"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.profile].join(" ")}
                    src={profile_card}
                    alt="profile card"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.color_picker].join(" ")}
                    src={color_picker}
                    alt="color picker"
                    placeholder="blur"
                />
                <Image 
                    className={[style.images, style.tenzies].join(" ")}
                    src={tenzies}
                    alt="tenzies game"
                    placeholder="blur"
                />
            </div>
        </div>
    )
} 