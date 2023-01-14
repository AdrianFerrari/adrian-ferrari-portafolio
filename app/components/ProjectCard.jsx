"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/projectcard.module.css";
import he from "he";
import GlobalSVG from "../../public/icons/global.svg";
import GitHubSVG from "../../public/icons/github.svg";


export default function ProjectCard({
    title,
    id,
    description,
    tags,
    screenshots,
    links,
}) {
    
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
                        <p>{he.decode(description)}</p>
                        <div className={style.info_tags}>{tags.map(tag => {
                            return (
                                <div className={style.info_tag} key={tag}>{tag}</div>
                            )
                            })}
                        </div>
            </div>

            <div className={style.buttons}>
                {links.map((item) => {
                    return (
                        <Link
                            target="_blank"
                            href={item.link}
                            key={item.name}
                            className={style[item.name.toLowerCase()]}
                        >
                            {item.name === "Github" && <GitHubSVG width={24} height={24}/>}
                            {item.name === "Website" && <GlobalSVG width={24} height={24}/>}
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
