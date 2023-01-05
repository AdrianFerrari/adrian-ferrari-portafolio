import Image from "next/image"
import style from "./proyectos.module.css"
import pastry from "../../public/screenshots/pastry_shop.jpeg"
import chat_app from "../../public/screenshots/chat_app_side.jpeg"
import quiz_app from "../../public/screenshots/quiz_app.jpeg"
import tenzies from "../../public/screenshots/tenzies.jpeg"
import pics_shop from "../../public/screenshots/pics_shop.jpeg"
import supplies_crud from "../../public/screenshots/supplies_crud_side.jpeg"
import profile_card from "../../public/screenshots/profile_card.jpeg"
import color_picker from "../../public/screenshots/color_picker.jpeg"

export default function Proyectos() {
    return(
        <div className={style.proyectos}>
            <h1>PROYECTOS</h1>
            <hr/>
            <div className={style.proyectos_grid}>
                <Image 
                    className={style.images}
                    src={pastry}
                    alt="pastry shop"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={chat_app}
                    alt="chat app"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={quiz_app}
                    alt="quiz app"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={pics_shop}
                    alt="pictures shop"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={supplies_crud}
                    alt="supplies crud app"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={profile_card}
                    alt="profile card"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={color_picker}
                    alt="color picker"
                    placeholder="blur"
                />
                <Image 
                    className={style.images}
                    src={tenzies}
                    alt="tenzies game"
                    placeholder="blur"
                />
            </div>
        </div>
    )
} 