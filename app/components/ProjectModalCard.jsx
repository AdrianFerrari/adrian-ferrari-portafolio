"use client"
import Image from "next/image"
import style from "./projectmodalcard.module.css"
import React from "react"

export default function ProjectModalCard({title, id, description, screenshots, github_link, web_link}){
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Image 
                    className={style.image}
                    src={screenshots[0]}
                    alt={`${id} app`}
                    placeholder="blur"
                    onClick={() => setShowModal(true)}
            />
        {showModal &&
            <div className={style.wrapper} onClick={() => setShowModal(false)}>
            <div className={style.project_card}>
                <h3>{title}</h3>
                <div className={style.project_info}>
                    <Image 
                        className={style.image}
                        src={screenshots[0]}
                        alt={`${id} app`}
                        placeholder="blur"
                    />
                    <div className={style.info}>
                        <p className="description">
                            {description}
                        </p>
                        <a href={github_link}>{github_link}</a>
                        {web_link !== "" && <a href={web_link}>{web_link}</a>}
                    </div>
                </div>
                <div className={style.screenshots_container}>
                    {screenshots.map((img, i) => {
                        return (
                            <Image 
                                className={style.screenshots}
                                src={img.screenshots[i]}
                                alt="screenshot"
                                placeholder="blur"
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>
            </div>
        }
        </>
    )
}