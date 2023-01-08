"use client"
import Image from "next/image"
import style from "./projectmodalcard.module.css"
import React from "react"
import he from "he"

export default function ProjectModalCard({title, id, description, screenshots, github_link, web_link}){
    const [showModal, setShowModal] = React.useState(false)

    return (
        <>
            <Image 
                    className={style.image + " " + style[id]}
                    src={require(`../../public/screenshots/${screenshots[0]}.jpeg`)}
                    alt={`${id} app`}
                    placeholder="blur"
                    onClick={() => setShowModal(true)}
            />
        {showModal &&
            <div className={style.wrapper}>
                <div className={style.background} onClick={() => setShowModal(false)}></div>
                <div className={style.project_card}>
                    <h3 className={style.title}>{title}</h3>
                    <Image 
                        className={style.main_screenshot}
                        src={require(`../../public/screenshots/${screenshots[0]}.jpeg`)}
                        alt={`${id} app`}
                        placeholder="blur"
                    />

                    <div className={style.small_screenshots_container}>
                        {screenshots.map((img, i) => {
                        if(i===0) return
                        return (
                            <Image 
                                className={style.small_screenshots}
                                src={require(`../../public/screenshots/${img}.jpeg`)}
                                alt="screenshot"
                                placeholder="blur"
                                key={i}
                            />
                        )
                        })}
                    </div>
                    
                    <div className={style.info}>
                        <p>{he.decode(description)}</p>
                        <a href={github_link}>Github Link</a>
                        {web_link !== "" && <a href={web_link}>Website</a>}
                    </div>
                </div>   
            </div>
        }
        </>
    )
}

{/* <p>
Simple app for signup login and posting comments on a thread.
Link to website: https://login-chat-app-production.up.railway.app/
Technologies used:

<ul>
    <li>ReactJS</li>
    <ul>
        <li>useContext</li>
        <li>react-router</li>
        <li>axios</li>
    </ul>
    <li>nodejs</li>
    <li>expressjs</li>
    <li>mongoose</li>
    <li>JWT for authorization and authentication</li>
    <li>Cypress for CI testing</li>
</ul>

It implement CRUD methods for the user account and the comments posted by them.
</p> */}