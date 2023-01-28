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
    if (isLoading) return <div className="loading-data-screen"><span>Loading...</span></div>

    const proyectsData = JSON.parse(data)
    const dataHTML = proyectsData.map((item, i) => {
        return(
            <div key={i} className={style.card}>
                <ProjectCard {...item}/>
            </div>
        )
    })
    
    return(
        <main className="page_container">
            <PageHead nombre="Proyectos"/>
            <div className={style.proyectos_grid}>
                {
                    dataHTML
                }
            </div>
        </main>
    )
}