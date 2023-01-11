"use client";
import style from "./proyectos.module.css"
import useSWR from "swr"
import ProjectCard from "../components/ProjectCard";
import PageHead from "../components/PageHead"

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
            <div key={i} className={style[item.id] + " " + style.card}>
                <ProjectCard {...item}/>
            </div>
        )
    })
    
    return(
        <div className={style.proyectos}>
            <PageHead nombre="PROYECTOS"/>
            <div className={style.proyectos_grid}>
                {
                    dataHTML
                }
            </div>
        </div>
    )
} 

/*
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

*/