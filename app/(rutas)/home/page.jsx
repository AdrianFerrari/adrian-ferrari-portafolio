"use client"
import { useState } from "react";
import style from "./page.module.css";
import useInterval from "../utils/useInterval"

export default function Home() {
    const [shownTitle, setShownTitle] = useState("")
    const [count, setCount] = useState(0)
    
    useInterval(() => {
        const array = ["frontend", "backend", "fullstack"]
        setShownTitle(() => array[count])
        setCount(prev => prev===2 ? 0 : prev+1)
    }, 3000)

  

    return (
        <main className={style.main}>
            <div className={style.container}>
                <h1 className={style.nombre}>Adrian Ferrari</h1>
                <div className={style.subtitulo}>
                    <p className={style.p_first}>Desarrollador</p>
                    <p className={style.p + " " + (shownTitle === "frontend" ? style.show : "")} style={{color:"orangered"}}>FrontEnd</p>
                    <p className={style.p + " " + (shownTitle === "backend" ? style.show : "")} style={{color:"lawngreen"}}>BackEnd</p>
                    <p className={style.p + " " + (shownTitle === "fullstack" ? style.show : "")} style={{color:"gold"}}>FullStack</p>
                </div>
            </div>
        </main>
    );
}
