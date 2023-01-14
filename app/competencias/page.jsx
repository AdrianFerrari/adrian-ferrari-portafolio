import style from "./competencias.module.css";
import PageHead from "../components/PageHead";

export default function competencias() {
    return (
        <main className="page_container">
            <PageHead nombre="Competencias" />
            <main className={style.contenedor_listas}>
                <section>
                    <h2 className={style.main_title}>Facultad</h2>
                    <div className={style.listas}>
                        <h4 className={style.title}>
                            Diseño Orientado a Objetos
                        </h4>
                        <ul>
                            <li>Grafos</li>
                            <li>Arboles</li>
                            <li>C</li>
                            <li>C++</li>
                        </ul>

                        <h4 className={style.title}>
                            Estructura de Datos y Algoritmos
                        </h4>
                        <ul>
                            <li>Haskell</li>
                            <li>Funciones de Orden Superior</li>
                            <li>Recursion</li>
                            <li>Induccion</li>
                            <li>Monoides</li>
                        </ul>

                        <h4 className={style.title}>
                            Arquitectura de las Computadoras
                        </h4>
                        <ul>
                            <li>
                                Procesador
                                <ul>
                                    <li>Ciclos y Multiciclos</li>
                                </ul>
                            </li>
                            <li>
                                Lenguaje de Maquinas
                                <ul>
                                    <li>Assembly</li>
                                </ul>
                            </li>
                            <li>
                                Memoria
                                <ul>
                                    <li>Cache</li>
                                    <li>Memoria Virtual</li>
                                </ul>
                            </li>
                            <li>Segmentacion</li>
                        </ul>

                        <h4 className={style.title}>Talleres</h4>
                        <ul>
                            <li>Java</li>
                            <li>Oracle</li>
                            <li>MySQL</li>
                            <li>HTML y CSS</li>
                        </ul>

                        <h4 className={style.title}>Teoria de Lenguajes</h4>
                        <ul>
                            <li>Compiladores</li>
                        </ul>

                        <h4 className={style.title}>Sistemas Operativos</h4>
                        <ul>
                            <li>Kernel</li>
                            <li>Procesos</li>
                            <li>Shell Scripts</li>
                            <li>Semaforos</li>
                            <li>File Systems</li>
                            <li>Threads</li>
                        </ul>

                        <h4 className={style.title}>Redes</h4>
                        <ul>
                            <li>Protocolos</li>
                            <li>Tramas</li>
                            <li>Topologias</li>
                            <li>Modelo OSI</li>
                        </ul>

                    </div>
                </section>

                <section>
                    <h2 className={style.main_title}>Desarrollo Web</h2>
                    <div className={style.listas}>
                        <h4 className={style.title}>React</h4>
                        <ul>
                            <li>useHooks</li>
                            <li>React-Router</li>
                            <li>
                                State Managment
                                <ul>
                                    <li>useContext</li>
                                    <li>Redux Toolkit</li>
                                </ul>
                            </li>
                            <li>Rest API</li>
                            <li>NextJs</li>
                        </ul>
                        <h4 className={style.title}>Javascript</h4>
                        <h4 className={style.title}>NodeJS</h4>
                        <h4 className={style.title}>ExpressJS</h4>
                        <h4 className={style.title}>MongoDB</h4>
                        <ul>
                            <li>Mongooose</li>
                        </ul>
                        <h4 className={style.title}>Authentication</h4>
                        <ul>
                            <li>Json Web Tokens</li>
                        </ul>
                        <h4 className={style.title}>Testing</h4>
                        <ul>
                            <li>Jest</li>
                            <li>
                                Cypress
                                <ul>
                                    <li>CD/CI con Github Actions</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </main>
    );
}
