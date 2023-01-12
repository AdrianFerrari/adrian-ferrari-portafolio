import PageHead from "../components/PageHead"
import style from "./about.module.css"

export default function About() {
    return (
        <main className="page_container">
            <PageHead nombre="Sobre mi" />
            <div className={style.about}>
                <section className={style.bio}>
                    <h2>Bio</h2>
                    <p>Hola, soy un electricista en busca de su primer empleo formal en el mundo del desarrollo web.</p>
                    <p className={style.grey}>Me gradue de tecnico electronico en 2006, desde entonces llevo mas de una decada y media ejerciendo esta profesion, desde mantenimiento de edificios, instalaciones electricas, puesto en marcha de grupos electrogenos, motores y generadores, instalaciones de alarmas, sistemas telefonicos, etc.</p>
                    <p>Ser electricista no tiene una correlacion directa con el mundo del desarrollo de software pero hay muchas habilidades claves que son comunes a ambos sectores y me han servido de mucho en el campo de la programacion.</p>
                    <p className={style.grey}>Por ejemplo los electricistas habitualmente trabajamos con sistemas complejos, la capacidad para resolver problemas y un buen olfato para la deteccion de fallas son aptitudes que cual persona en mi profesion debe tener. Ademas trabajamos con una amplia cantidad de herramientas y constantemente tenemos que adaptarnos y aprender nuevas tecnologias, algo comun en el campo de desarrollo web. Por ultimo, habitualmente trabajo en equipos con otros electricistas, saber trabajar y comunicarse con miembros del equipo es fundamental para alguien en este rubro.</p>
                </section>

                <section className={style.pregunta_estudio}>
                    <h2>Por que estudio desarrollo web?</h2>
                    <p>Cuando me recibi my primer inclinacion fue estudiar programacion, por desgracia no supe encarar la carrera, que estudiar o donde, y en su lugar estudie ingenieria electrica y en paralelo me volque en el trabajo.</p>
                    <p>Finalmente despues de años puede darme el gusto y comenze la carrera de Analista de Sistemas la cual me encuentro cursando. Algo que puede rescatar de mis estudios de ingeniera es que me dejo una fuerte experiencia en la matematica, la cual sirvio mucho en mis actuales estudios y el desarrollo de programas.</p>
                </section>
                
                <aside className={style.educacion_container}>
                    <h2>Educacion</h2>

                    <div className={style.educacion_seccion}>
                        <div className={style.year_top}>2000</div>
                            <div className={style.educacion_info}>
                                <h4>Tecnico electronico</h4>
                                <p>Escuela de Educacion Tecnica Nº464, Rosario</p>
                            </div>
                        <div className={style.year_bottom}>2006</div>
                    </div>

                    <div className={style.educacion_seccion}>
                        <div className={style.year_top}>2008</div>
                            <div className={style.educacion_info}>
                                <h4>Ingenieria electrica</h4>
                                <p>Universidad Tecnologia Nacional</p>
                                <em>Abandonada</em>
                            </div>
                        <div className={style.year_bottom}>2014</div>
                    </div>

                    <div className={style.educacion_seccion}>
                        <div className={style.year_top}>2018</div>
                            <div className={style.educacion_info}>
                                <h4>Tecnico electronico</h4>
                                <p>Universidad Nacional de Rosario</p>
                                <em>Cursando</em>
                            </div>
                        <div className={style.year_bottom}>2022</div>
                    </div>

                </aside>
            </div>

        </main>
    )
}