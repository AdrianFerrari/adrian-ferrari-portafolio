import style from "./pagehead.module.css"

export default function pageHead({nombre}) {
    return (
        <>
            <h1 className={style.titulo}>{nombre}</h1>
            <hr className={style.linea_separadora} />
        </>
    )
}