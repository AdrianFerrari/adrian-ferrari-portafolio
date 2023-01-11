"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./projectcard.module.css";
import React from "react";
import he from "he";
import GlobalSVG from "../../public/icons/global.svg";
import GitHubSVG from "../../public/icons/github.svg";
import DownArrow from "../../public/icons/down-arrow.svg";


export default function ProjectCard({
    title,
    id,
    description,
    extra_description,
    screenshots,
    links,
}) {
    const [showMore, setShowMore] = React.useState(false);
    
    return (
        <div className={style.project_card + " " + style[id]}>
            <Image
                className={style.image}
                src={require(`../../public/screenshots/${screenshots[0]}.png`)}
                alt={`${id} app`}
                placeholder="blur"
            />

            <div className={style.titleholder}>
                <h3 className={style.title}>{title}</h3>
            </div>

            <div className={style.info}>
                    <div className={style.infowrapper + " " + (showMore && style.open)}>
                        <p>{he.decode(description)}</p>
                        <p>{he.decode(extra_description)}</p>
                    </div>
            </div>

            <button
                    onClick={() => setShowMore((prev) => !prev)}
                    className={style.showBtn}
                >
                    <p className={style.showtext}>{showMore ? "show less" : "show more"}</p>
                    <DownArrow className={showMore ? style.arrow_up : undefined}/>
            </button>

            <div className={style.buttons}>
                {links.map((item) => {
                    return (
                        <Link
                            target="_blank"
                            href={item.link}
                            key={item.name}
                            className={style[item.name.toLowerCase()]}
                        >
                            {item.name === "Github" && <GitHubSVG />}
                            {item.name === "Website" && <GlobalSVG />}
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
