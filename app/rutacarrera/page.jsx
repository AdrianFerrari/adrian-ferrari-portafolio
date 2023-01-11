import roadMap from "../../public/roadmap.drawio.png"
import style from "./rutacarrera.module.css"
import Image from "next/image"
import PageHead from "../components/PageHead"

export default function rutaCarrera() {
    return (
        <div className={style.rutacarrera}>
                <PageHead nombre="Ruta de aprendizaje"/>
                <div className={style.contenedor_roadmap}>
                    <Image className={style.imagen} src={roadMap} alt="ruta de aprendizaje" placeholder="blur"/>
                </div>
        </div>
    )
}