"use client"
import style from "./competencias.module.css";
import PageHead from "../components/PageHead";
import useSWR from "swr"
import he from "he"

async function getData(...args) {
    const res = await fetch(...args)
    if(!res.ok) throw new Error('Failed to fetch data');
    return res.json()
}

export default function Competencias() {
    const { data, error, isLoading } = useSWR('/api/competencias', getData);
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div className="loading-data-screen"><span>Loading...</span></div>
    const competenciasData = JSON.parse(data)

    const listaDesarrolloWeb = competenciasData.web.map((tecnologia) => {
        return (
            <div key={tecnologia.title} className={style.materia}>
                <h3>{tecnologia.title}</h3>
                <ul>
                    {tecnologia.temas.map((tema, i) => <li key={i}>{he.decode(tema)}</li>)}
                </ul>
            </div>
        )
    })

    const listaFacultad = competenciasData.facultad.map((materia) => {
        return (
            <div key={materia.title} className={style.materia}>
                <h3>{materia.title}</h3>
                <ul>
                    {materia.temas.map((tema, i) => <li key={i}>{he.decode(tema)}</li>)}
                </ul>
            </div>
        )
    })

    return (
        <main className="page_container">
            <PageHead nombre="Competencias" />
            <main className={style.contenedor_listas}>

                <section className={style.contenedor_lista}>
                    <h1>WEB</h1>
                    <div className={style.materias}>
                        {listaDesarrolloWeb}
                    </div>
                </section>

                <section className={style.contenedor_lista}>
                    <h1>FACULTAD</h1>
                    <div className={style.materias}>
                        {listaFacultad}
                    </div>
                </section>

            </main>
        </main>
    );
}