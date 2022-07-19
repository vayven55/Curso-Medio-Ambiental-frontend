import React, { useState } from 'react';
import mod1 from '../../../Css/Modulo1.module.css';
import educacionAmbiental from '../../../assets/img/Educacion_ambiental.jpg';
import educaAmb from './educaAmbien.module.css';
import Accordion from "react-bootstrap/Accordion";

const CompEducacAmbiental = () => {
    const [h3Primero, seth3Primero] = useState(true);
    const [h3Segundo, seth3Segundo] = useState(false);

    const h3Carateristicas = () => {
        seth3Segundo(false);
        seth3Primero(true)
    }

    const h3Objetivos = () => {
        seth3Primero(false)
        seth3Segundo(true);

    }

    const [opcion1, setOpcion1] = useState(false);
    const [opcion2, setOpcion2] = useState(false);
    const [opcion3, setOpcion3] = useState(false);
    const [opcion4, setOpcion4] = useState(false);

    const pregunta = e => {
        if (e.target.id === "opcion4") {
            setOpcion4(true);
            setOpcion3(false);
            setOpcion2(false);
            setOpcion1(false);
        };
        if (e.target.id === "opcion3") {
            setOpcion4(false);
            setOpcion3(true);
            setOpcion2(false);
            setOpcion1(false);
        }
        if (e.target.id === "opcion2") {
            setOpcion4(false);
            setOpcion3(false);
            setOpcion2(true);
            setOpcion1(false);
        }
        if (e.target.id === "opcion1") {
            setOpcion4(false);
            setOpcion3(false);
            setOpcion2(false);
            setOpcion1(true);
        }
    };

    const [pregunta_1, setPregunta_1] = useState('');
    const [pregunta_2, setPregunta_2] = useState('');
    const [pregunta_3, setPregunta_3] = useState('');
    const [pregunta_4, setPregunta_4]  = useState('');

    const pregunta1 = e => {
        if(e.target.id === 'Verdadero1'){
            setPregunta_1(false);
        }
        if(e.target.id === 'Falso1'){
            setPregunta_1(true);
        }        
    }
    const pregunta2 = e => {
        if(e.target.id === 'Verdadero2'){
            setPregunta_2(true);
        }
        if(e.target.id === 'Falso2'){
            setPregunta_2(false);
        }
    }
    const pregunta3 = e => {
        if(e.target.id === 'Verdadero3'){
            setPregunta_3(true);
        }
        if(e.target.id === 'Falso3'){
            setPregunta_3(false);
        }
    }
    const pregunta4 = e => {
        if(e.target.id === 'Verdadero4'){
            setPregunta_4(false);
        }
        if(e.target.id === 'Falso4'){
            setPregunta_4(true);
        }
    }

    return (
        <div id="" className={mod1.presentacion}>
            <section id="">
                <h2>4. La Educación Ambiental: carácter y objetivos</h2>
                <article className="" id="">
                    <div className="">
                        <p className={educaAmb.img}>
                            <img src={educacionAmbiental} alt="educacion ambiental" />
                        </p>
                        <p>
                            <span>Una definición bastante acertada para el
                                concepto de Educación Ambiental fue la que se dio en las conferencias de Belgrado y Tbilisi
                                en 1977
                            </span>
                        </p>
                        <p>
                            <span>“La Educación Ambiental es
                                un proceso permanente en el que los individuos y la comunidad se conciencien de su medio
                                ambiente y adquieren el conocimiento, los valores, destrezas y determinación que les
                                permitirá actuar individual y colectivamente en la resolución de los problemas presentes y
                                futuros” (Citado en Galiano y Sampalo, sf, p. 130)
                            </span>
                        </p>
                        <div className="">
                            <div className={educaAmb.parrafoOculto}>
                                <h3 className={h3Primero ? educaAmb.carateristicas : educaAmb.carateristicasHover} onClick={h3Carateristicas}>Características</h3>
                                <h3 className={h3Segundo ? educaAmb.carateristicas : educaAmb.carateristicasHover} onClick={h3Objetivos}>Objetivos</h3>
                            </div>

                            {h3Primero ?
                                <div className={educaAmb.carac_backgr}>
                                    <p>
                                        <span>
                                            A partir de esta definición  Galiano
                                            y Sampalo ofrecen un desglose  y caracterización del concepto de Educación
                                            Ambiental:
                                        </span>
                                    </p>
                                    <ol>
                                        <li><span>Es un proceso.</span></li>
                                        <li><span>Es permanente.</span></li>
                                        <li><span>De carácter concienciador.</span></li>

                                        <li><span>Proporciona conocimientos de la realidad.</span></li>
                                        <li><span>Establece una escala de valores.</span></li>
                                        <li><span>Desarrolla competencias.</span></li>

                                        <li><span> Proporciona experiencias.</span></li>

                                        <li><span> Llama a la actuación.</span></li>

                                        <li><span>Está dirigida al individuo y a la colectividad.</span></li>
                                        <li><span>Plantea problemáticas presentes y futuras.</span></li>
                                    </ol>
                                </div> : null

                            }

                            {h3Segundo ?
                                <div className={educaAmb.carac_backgr}>
                                    <p>
                                        <span>Como Martínez Castillo (2012) recoge
                                            hay una serie de objetivos encaminados a interrelacionar la dimensión actitudinal con la
                                            dimensión conceptual como propuesta de un itinerario que propicie un cambio de actitudes y
                                            una participación responsable:
                                        </span>
                                    </p>
                                    <ol>
                                        <li>
                                            <span>Fomentar la concienciación y la
                                                sensibilización hacia las problemáticas socio-ambientales por medio de la reflexión
                                                crítica y el planteamiento de problemas y soluciones
                                            </span>
                                        </li>
                                        <li>
                                            <span>Suscitar la conciencia  en lo que
                                                se refiere a las propias actitudes y conductas en relación al equilibrio del medio
                                                valorando sus repercusiones ambientales
                                            </span>
                                        </li>
                                        <li>
                                            <span>Transitar hacia
                                                una comprensión más compleja desde los conceptos más generales hacia la comprensión de
                                                la pertenencia a un sistema donde existe interacción y dependencia de los individuos y
                                                el entorno.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Fomentar valores y actitudes solidarios más
                                                allá de la separación medio natural y medio social considerando su
                                                interdependencia.
                                            </span>
                                        </li>
                                        <li>
                                            <span>Comprender que
                                                las acciones individuales y cotidianas que integran la sociedad pueden
                                                ser mejoradas por medio de actitudes y comportamientos más éticos.
                                            </span>
                                        </li>
                                    </ol>

                                </div> : null
                            }


                        </div>

                    </div>
                </article>
                <article>
                    <Accordion>
                        <Accordion.Item eventKey="0" className={educaAmb.fondo_acordeon}>
                            <div className={educaAmb.centrar}>
                                <Accordion.Header className={educaAmb.header}>
                                    <strong> ? </strong> Elige la respuesta correcta
                                </Accordion.Header>
                            </div>
                            <Accordion.Body>
                                <form className="">{/*name="" action="*" onSubmit="" */}
                                    <p className={educaAmb.pPregunta}>La Educación ambiental</p>
                                    <div className={educaAmb.inputs} onChange={pregunta}>
                                        <section className="">
                                            <p className="">
                                                <input type="radio" name="opcion" id="opcion1"
                                                    className=""
                                                />
                                                Incide mayormente en la conciencia individual.
                                            </p>
                                        </section>
                                        <section className="">
                                            <p className="">
                                                <input type="radio" name="opcion" id="opcion2" className="" />
                                                Se centra en las problemáticas ambientales presentes.
                                            </p>
                                        </section>
                                        <section className="">
                                            <p className="">
                                                <input type="radio" name="opcion" id="opcion3" className="" />
                                                Es un proceso que comienza y termina cuando cumple con sus objetivos.
                                            </p>
                                        </section>
                                        <section className="">
                                            <p className="">
                                                <input type="radio" name="opcion" id="opcion4" className="" />
                                                Proporciona experiencias.
                                            </p>
                                        </section>
                                        {opcion1 ?
                                            <p className={educaAmb.opcionInc}>
                                                Incorrecto. La educación ambiental se dirige tanto al individuo como a la colectividad.
                                            </p> : null
                                        }
                                        {opcion2 ?
                                            <p className={educaAmb.opcionInc}>
                                                Incorrecto. La educación ambiental pone el foco sobre las problemáticas que se dan en la realidad presente y plantea los problemas ambientales que pueden darse o que se darán en el futuro.
                                            </p> : null
                                        }
                                        {opcion3 ?
                                            <p className={educaAmb.opcionInc}>
                                                Incorrecto. La Educación ambiental se caracteriza por ser un proceso de carácter permanente.
                                            </p> : null
                                        }
                                        {opcion4 ?
                                            <p className={educaAmb.opcionCorrecto}>
                                                !Correcto! Combina la teoría y el aprendizaje experiencial a través del medio.
                                            </p> : null
                                        }
                                    </div>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className={educaAmb.fondo_acordeon}>
                            <div className={educaAmb.centrar}>
                                <Accordion.Header className={educaAmb.header}>
                                    <strong> ? </strong> Pregunta Verdadero-Falso
                                </Accordion.Header>
                            </div>
                            <Accordion.Body>
                                <article className="" id="">
                                    <div id="" className="">
                                        <p className={educaAmb.pPregunta}>
                                            A la hora de establecer relaciones entre lo afectivo y lo actitudinal hay  una serie de objetivos que consisten en:
                                        </p>
                                    </div>
                                    <section className="">
                                        <form name="" action="*" className="">
                                            <div id="" className={educaAmb.pregunta1}>
                                                <p>Evitar centrarnos en consideraciones complejas y generales</p>
                                            </div>
                                            <p className="" onChange={pregunta1}>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta1" id="Verdadero1" className="" />
                                                    Verdadero
                                                </label>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta1" id="Falso1" className="" /> Falso
                                                </label>
                                            </p>
                                            {pregunta_1 === true ? 
                                            <p className={educaAmb.correcto}><strong>Correcto</strong></p> :null }
                                            {pregunta_1 === false ? <p className="educaAmb.incorrecto"><strong>Incorrecto</strong></p> : null}
                                        </form>
                                        {/*<section id="" className="">
                                            <h2 className="">Retroalimentación</h2>
                                            <p><strong id="" className="">Falso</strong></p>

                                        </section>*/}
                                    </section>
                                    <section className="">
                                        <form name="" action="*" className="">
                                            <div id="" className={educaAmb.pregunta2}>
                                                <p>
                                                    Basarse en la reflexión crítica planteando problemas y respuestas de esta forma como medio para concienciación y la sensibilización.
                                                </p>
                                            </div>
                                            <p className="" onChange={pregunta2}>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta2" id="Verdadero2" className="" />
                                                    Verdadero
                                                </label>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta2" id="Falso2" className="" /> Falso
                                                </label>
                                            </p>
                                            {pregunta_2 === true ? 
                                            <p className={educaAmb.correcto}><strong>Correcto</strong></p> :null }
                                            {pregunta_2 === false ? <p className="educaAmb.incorrecto"><strong>Incorrecto</strong></p> : null}
                                        </form>
                                        {/*<section id="" className="">
                                            <h2 className="">Retroalimentación</h2>
                                            <p><strong id="" className="">Verdadero</strong></p>

                                        </section>*/}
                                    </section>
                                    <section className="">
                                        <form name="" action="*" className="">
                                            <div id="" className={educaAmb.pregunta3}>
                                                <p>
                                                    Poner el foco sobre los propios comportamientos y actitudes relacionadas con el medio valorando la repercusión que tienen
                                                </p>
                                            </div>
                                            <p className="" onChange={pregunta3}>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta3" id="Verdadero3" className="" />
                                                    Verdadero
                                                </label>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta3" id="Falso3" className="" /> Falso
                                                </label>
                                            </p>
                                            {pregunta_3 === true ? 
                                            <p className={educaAmb.correcto}><strong>Correcto</strong></p> :null }
                                            {pregunta_3 === false ? <p className="educaAmb.incorrecto"><strong>Incorrecto</strong></p> : null}
                                        </form>
                                        {/* <section id="" className="">
                                            <h2 className="">Retroalimentación</h2>
                                            <p><strong id="" className="">Verdadero</strong></p>

                                        </section>*/}
                                    </section>
                                    <section className="">
                                        <form name="" action="*" className="">
                                            <div id="" className={educaAmb.pregunta4}>
                                                <p>
                                                    Establecer los límites entre el medio natural y el social para centrarnos en los valores y actitudes que se dan en cada uno de ellos
                                                </p>
                                            </div>
                                            <p className="" onChange={pregunta4}>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta4" id="Verdadero4" className="" />
                                                    Verdadero
                                                </label>
                                                <label htmlFor="">
                                                    <input type="radio" name="pregunta4" id="Falso4" className="" /> Falso
                                                </label>
                                            </p>
                                            {pregunta_4 === true ? 
                                            <p className={educaAmb.correcto}><strong>Correcto</strong></p> :null }
                                            {pregunta_4 === false ? <p className="educaAmb.incorrecto"><strong>Incorrecto</strong></p> : null}
                                        </form>
                                        {/*<section id="" className="">
                                            <h2 className="">Retroalimentación</h2>
                                            <p><strong id="" className="">Falso</strong></p>

                                        </section>*/}
                                    </section>

                                </article>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>

                <article className={educaAmb.article}>
                    <div className="">
                        <h2 className={educaAmb.h2multimedia}>Recursos Multimedia</h2>
                        <div className={educaAmb.iframe}>
                            <p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/N7uZe5VWg_Q"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen="allowFullScreen"></iframe>
                            </p>

                            <p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fPvd5EiFobk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen="allowFullScreen">
                                </iframe>
                            </p>
                        </div>


                    </div>
                </article>
            </section>
        </div>
    )
}

export default CompEducacAmbiental

