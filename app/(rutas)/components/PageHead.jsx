import style from "./styles/pagehead.module.css"

export default function PageHead({nombre}) {
    return (
        <>
            <h1 className={style.titulo}>{nombre}</h1>
            <hr className={style.linea_separadora} />
        </>
    )
}