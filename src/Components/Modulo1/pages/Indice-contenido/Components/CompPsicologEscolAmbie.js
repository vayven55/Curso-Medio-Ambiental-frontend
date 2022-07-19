import React, { useState } from 'react';
import mod1 from '../../../Css/Modulo1.module.css';
import psicolologia from '../../../assets/img/psicologiaescolaryambiental.jpg';
import educaAmb from './educaAmbien.module.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";

const CompPsicologEscolAmbie = () => {
    const [h3Primero, seth3Primero] = useState(true);
    const [h3Segundo, seth3Segundo] = useState(false);
    const [h3Tercero, seth3Tercero] = useState(false);

    const h3Medio = () => {
        seth3Primero(true);
        seth3Segundo(false);
        seth3Tercero(false);
    }
    const h3Conducta = () => {
        seth3Primero(false);
        seth3Segundo(true);
        seth3Tercero(false);
    }
    const h3Mente = () => {
        seth3Primero(false);
        seth3Segundo(false);
        seth3Tercero(true);
    }

    const [instruccion, setIntruccion] = useState(true);
    const [escolar, setEscolar] = useState(false);
    const [ambiental, setAmbiental] = useState(false);

    const siguiente = () => {
        if (instruccion) {
            setIntruccion(false);
            setEscolar(true);
            setAmbiental(false);
        } else if (escolar) {
            setEscolar(false);
            setIntruccion(false);
            setAmbiental(true);
        } else if (ambiental) {
            setIntruccion(true);
            setEscolar(false);
            setAmbiental(false);
        }
    }

    const anterior = () => {
        if (instruccion) {
            setIntruccion(false);
            setEscolar(false);
            setAmbiental(true);
        } else if (escolar) {
            setEscolar(false);
            setIntruccion(true);
            setAmbiental(false);
        } else if (ambiental) {
            setIntruccion(false);
            setEscolar(true);
            setAmbiental(false);
        }
    }

    const uno = () => {
        setIntruccion(true);
        setEscolar(false);
        setAmbiental(false);
    }
    const dos = () => {
        setEscolar(true);
        setIntruccion(false);
        setAmbiental(false);
    }
    const tres = () => {
        setAmbiental(true);
        setEscolar(false);
        setIntruccion(false);
    }

    const [pregunta1, setPregunta1] = useState([]);
    const [pregunta2, setPregunta2] = useState([]);
    const [pregunta3, setPregunta3] = useState([]);
    const [pregunta4, setPregunta4] = useState([]);
    const [pregunta, setPregunta] = useState(false);

    const respuesta1 = (e) => {
        setPregunta(true);
        if (e.target.id === 'verdadero') {
            return setPregunta1([true, false, 'pregunta1']);
        }
        if (e.target.id === 'falso') {
            return setPregunta1([true, true, 'pregunta1']);

        }
    }
    const respuesta2 = (e) => {
        setPregunta(true);
        if (e.target.id === 'verdadero') {
            return setPregunta2([true, false, 'pregunta2']);
        }
        if (e.target.id === 'falso') {
            return setPregunta2([true, true, 'pregunta2']);
        }
    }
    const respuesta3 = (e) => {
        setPregunta(true);
        if (e.target.id === 'verdadero') {
            return setPregunta3([true, true, 'pregunta3']);
        }
        if (e.target.id === 'falso') {
            return setPregunta3([true, false, 'pregunta3']);
        }
    }
    const respuesta4 = (e) => {
        setPregunta(true);
        if (e.target.id === 'verdadero') {
            return setPregunta4([true, true, 'pregunta4']);
        }
        if (e.target.id === 'falso') {
            return setPregunta4([true, false, 'pregunta4']);
        }
    }

    const [aciertos, setAciertos] = useState(0);
    const [option, setOption] = useState({
        interrelaciones: false,
        atributos: false,
        la_persona: false,
        una_persona: false,
        desarrollo: false,
        ambiente: false,
        comportamiento: false
    });

    const select1 = (e) => {
        if(e.target.value === 'interrelaciones'){
            setOption({...option, interrelaciones: true });
            setAciertos(aciertos + 1);
        }      
    }
    const select2 = (e) => {
        if(e.target.value === 'la persona'){
            setOption({...option, la_persona: true });
        }
    }
    const select3 = (e) => {
        if(e.target.value === 'su ambiente.'){
            setOption({...option, ambiente: true });
        }
    }
    const select4 = (e) => {
        if(e.target.value === 'los atributos'){
            setOption({...option, atributos: true });
        }
    }
    const select5 = (e) => {
        if(e.target.value === 'una persona'){
            setOption({...option, una_persona: true });
        }
    }
    const select6 = (e) => {
        if(e.target.value === 'al desarrollo de su conducta.'){
            setOption({...option, desarrollo: true });
        }
    }
    const select7 = (e) => {
        if(e.target.value === 'al comportamiento de las personas'){
            setOption({...option, comportamiento: true });
        }
    }

    const [comprobacion, setComprobacion] = useState(false);
    const comprobar = (e) => {
        e.preventDefault();
        setComprobacion(true);
        const puntos = Object.values(option);
        const puntuacion = puntos.filter( punto => punto === true).length;
        setAciertos(puntuacion);    
    }
    const [mostrarTexto, setMostrarTexto] = useState(false); 
    const mostrar = (e) => {
        e.preventDefault();
        setMostrarTexto(true);
    }

    //console.log(aciertos);
    return (
        <div id="" className={mod1.presentacion}>
            <section id="">

                <h2>4.1 La psicología en el contexto escolar y la psicología de la Educación Ambiental
                </h2>

                <article className="" id="">
                    <div className="">
                        <div id="" className="">

                            <p className={educaAmb.img}><img src={psicolologia}
                                alt="Ilustración perfil de una niña con elementos de engranaje n su cabeza que proyecta hacia fuera en dirección a unos libros de texto"
                                title="La psicología escolar y ambiental" width="280" height="200"
                            /></p>
                            <p><span>Como apunta Estrada (2012) las personas
                                se desarrollan y aprenden en contextos formales e informales de manera integral abarcando
                                diversos niveles: cognitivo, social, emocional y moral. Durante este desarrollo el
                                comportamiento resulta de una interrelación entre:</span>
                            </p>

                            <div className="">
                                <div className={educaAmb.parrafoOculto}>
                                    <h4 className={h3Primero ? educaAmb.carateristicas : educaAmb.carateristicasHover} onClick={h3Medio}>Medio externo</h4>
                                    <h4 className={h3Segundo ? educaAmb.carateristicas : educaAmb.carateristicasHover} onClick={h3Conducta}>Conducta</h4>
                                    <h4 className={h3Tercero ? educaAmb.carateristicas : educaAmb.carateristicasHover} onClick={h3Mente}>Mente</h4>
                                </div>

                                {h3Primero ?
                                    <div className={educaAmb.carac_backgr}>
                                        <p>Demandas de la realidad y relaciones interpersonales.</p>
                                    </div> : null

                                }

                                {h3Segundo ?
                                    <div className={educaAmb.carac_backgr}>
                                        <p>
                                            Resultante de percepciones, interpretaciones y pensamientos originados por la mente que opera en función de objetivos, estrategias y habilidades que va  desplegando según sus capacidades y hábitos.
                                        </p>
                                    </div> : null
                                }
                                {h3Tercero ?
                                    <div className={educaAmb.carac_backgr}>
                                        <p>
                                            Analiza el medio para interpretarlo, razonarlo, solucionar problemas, etc generado variables internas (actitudes y expectativas)
                                        </p>

                                    </div> : null
                                }

                            </div>

                            <p className={educaAmb.margin_top}><span>Algunos ámbitos de la psicología serán
                                de utilidad para entender la relación de esta con la EA. Las de mayor interés son, Estrada(2018):</span>

                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className={`${educaAmb.div_icons} col2`}>
                                        <p onClick={anterior}><strong><BsChevronDoubleLeft /></strong></p>
                                    </div>
                                    <div className={`${educaAmb.div_texto} col`}>
                                        {instruccion ?
                                            <div>
                                                <h4>Psicología de la instrucción</h4>
                                                <p><span>Aportando modelos coherentes para
                                                    alcanzar los resultados propuestos, permitiendo ver el plan a desarrollar por el
                                                    profesorado, mostrando tanto conocimientos como instrumentos y técnicas de
                                                    utilidad.</span>
                                                </p>
                                            </div>
                                            : null
                                        }
                                        {escolar ?
                                            <div>
                                                <h4>Psicología escolar</h4>
                                                <p><span>Ámbito de los orientadores quienes
                                                    asisten a la comunidad en las labores de programación y desarrollo de las actividades,
                                                    resolviendo paralelamente dificultades afectivas, personales o sociales que afecten a los
                                                    procesos educativos. Es altamente recomendable que los equipos docentes  y los equipos de
                                                    orientación trabajen conjuntamente en la EA puesto que los procesos se enriquecen y se
                                                    rentabilizan.</span>
                                                </p>
                                            </div>
                                            : null

                                        }
                                        {ambiental ?
                                            <div>
                                                <h4>Psicología ambiental y psicología ecológica</h4>
                                                <p><span>La <strong> ambiental</strong> se
                                                    encarga de las <strong>interrelaciones</strong> entre la {' '}<strong>persona</strong> y su{' '}
                                                    <strong>ambiente</strong> y la<strong> ecológica</strong> de los{' '}
                                                    <strong>atributos</strong> del entorno de una persona y cómo afectan al desarrollo de su <strong>conducta</strong>. Dichas disciplinas han concluid
                                                    que el ambiente afecta al comportamiento de las personas aunque no sean
                                                    conscientes de ello.</span>
                                                </p>
                                            </div>
                                            : null
                                        }
                                    </div>

                                    <div className={`${educaAmb.div_icons} col2`}>
                                        <p onClick={siguiente}><strong><BsChevronDoubleRight /></strong></p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className={educaAmb.menu}><p onClick={uno}>1</p><p onClick={dos}>2</p><p onClick={tres}>3</p></h4>
                                </div>

                            </div>
                            <p><span>El entorno escolar debe potenciar
                                comportamientos sostenibles para detectar disfunciones en el comportamiento de los
                                estudiantes hacia el medio  y más tarde recabar la información sobre los alumnos planteando
                                un enfoque metodológico ambiental de manera que puedan revertirse esas actitudes.</span></p>
                            <p><span>Si bien es imprescindible el trabajo con
                                las familias ya que el entorno es un sistema próximo e influyente. De poco sirve que la
                                motivación del estudiante por lo que aprende si no está conectado con la estructura
                                cognoscitiva de las personas con las que se relaciona.</span></p>
                        </div>
                    </div>
                </article>
                <article className="" id="">
                    <Accordion>
                        <Accordion.Item eventKey="0" className={educaAmb.fondo_acordeon2}>
                            <div className={educaAmb.header}>
                                <Accordion.Header>
                                    <h3 className={educaAmb.header_h2}><span className={educaAmb.spanPregunta}>{' '}?{' '}</span>
                                        Pregunta Verdadero-Falso</h3>
                                </Accordion.Header>
                            </div>
                            <Accordion.Body>
                                <div className="">
                                    <section className="">
                                        <form name="" action="#" className="">
                                            <div id="" className="">
                                                <p>
                                                    1.  Las personas se desarrollan y aprenden en contextos formales e   informales de manera integral abarcando diversos niveles:{' '}
                                                    Conductual, cognitivo y emocional.

                                                </p>
                                            </div>
                                            <p onChange={respuesta1} className="">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option0"
                                                        id="verdadero"
                                                        className="" />
                                                    Verdadero
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option0"
                                                        id="falso"
                                                        className="" />
                                                    Falso
                                                </label>
                                            </p>
                                        </form>
                                        <section id=""
                                            className={
                                                pregunta && pregunta1[2] === 'pregunta1' ? educaAmb.Retroalimentacion1V : educaAmb.Retroalimentacion1F
                                            }>
                                            <p> {pregunta1[1] === true ?
                                                <strong id="" className={educaAmb.correcto}>Correcto</strong> :
                                                <strong id="" className={educaAmb.incorrecto}>Incorrecto</strong>
                                            }

                                            </p>
                                            <p className={pregunta1[1] === true ? educaAmb.correcto : educaAmb.Incorrecto}>
                                                <span>
                                                    Las personas se desarrollan y aprenden en contextos formales e informales de manera integral abarcando diversos niveles: cognitivo, social, emocional y
                                                    moral
                                                </span>
                                            </p>
                                        </section>
                                    </section>
                                    <section className="">
                                        <form name="" action="#" className="">
                                            <div id="" className="">
                                                <p>2. El medio externo está relacionado con
                                                    <span> las percepciones,      interpretaciones y
                                                        pensamientos originados por la mente.
                                                    </span>
                                                </p>
                                            </div>
                                            <p onChange={respuesta2} className="">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option1"
                                                        id="verdadero"
                                                        className=""
                                                    />
                                                    Verdadero
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option1"
                                                        id="falso"
                                                        className=""
                                                    /> Falso
                                                </label>
                                            </p>
                                        </form>
                                        <section id=""
                                            className={
                                                pregunta && pregunta2[2] === 'pregunta2' ? educaAmb.Retroalimentacion1V : educaAmb.Retroalimentacion1F
                                            }>
                                            <p> {pregunta2[1] === true ?
                                                <strong id="" className={educaAmb.correcto}>Correcto</strong> :
                                                <strong id="" className={educaAmb.incorrecto}>Incorrecto</strong>
                                            }
                                            </p>
                                            <p className={pregunta2[1] === true ? educaAmb.correcto : educaAmb.Incorrecto}>
                                                Está relacionado con las demandas de la realidad y relaciones
                                                interpersonales.
                                            </p>
                                        </section>
                                    </section>
                                    <section className="">
                                        <form name="" action="#" className="">
                                            <div id="" className="">
                                                <p>
                                                    3. Durante el desarrollo integral de las personas el comportamiento resulta de una interrelación entre:{' '}
                                                    El medio, la conducta y la mente.
                                                </p>
                                            </div>
                                            <p onChange={respuesta3} className="">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option2"
                                                        id="verdadero"
                                                        className=""
                                                    />
                                                    Verdadero
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option2"
                                                        id="falso"
                                                        className=""
                                                    />
                                                    Falso
                                                </label>
                                            </p>
                                        </form>
                                        <section id=""
                                            className={
                                                pregunta && pregunta3[2] === 'pregunta3' ? educaAmb.Retroalimentacion1V : educaAmb.Retroalimentacion1F
                                            }>
                                            <p> {pregunta3[1] === true ?
                                                <strong id="" className={educaAmb.correcto}>Correcto</strong> :
                                                <strong id="" className={educaAmb.incorrecto}>Incorrecto</strong>
                                            }
                                            </p>
                                            <p className={pregunta3[1] === true ? educaAmb.correcto : educaAmb.Incorrecto}>
                                                Las personas se desarrollan y aprenden en contextos formales e informales de manera integral abarcando diversos niveles: cognitivo, social emocional y moral. Durante este desarrollo el comportamiento resulta de una interrelación entre: El medio, la conducta y la mente.
                                            </p>
                                        </section>
                                    </section>
                                    <section className="">
                                        <form name="" action="#" className="">
                                            <div id="" className="">
                                                <p>
                                                    4. La conducta resulta de las percepciones, interpretaciones y       pensamientos originados por la mente que opera en función de objetivos, estrategias y habilidades que va desplegando según sus capacidades y hábitos.
                                                </p>
                                            </div>
                                            <p onChange={respuesta4} className="">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option3"
                                                        id="verdadero"
                                                        className=""
                                                    />
                                                    Verdadero
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option3"
                                                        id="falso"
                                                        className=""
                                                    />
                                                    Falso
                                                </label>
                                            </p>
                                        </form>
                                        <section id=""
                                            className={
                                                pregunta && pregunta4[2] === 'pregunta4' ? educaAmb.Retroalimentacion1V : educaAmb.Retroalimentacion1F
                                            }>
                                            <p> {pregunta4[1] === true ?
                                                <strong id="" className={educaAmb.correcto}>Correcto</strong> :
                                                <strong id="" className={educaAmb.incorrecto}>Incorrecto</strong>
                                            }
                                            </p>
                                            <p className={pregunta4[1] === true ? educaAmb.correcto : educaAmb.Incorrecto}>
                                                La conducta resulta de las percepciones, interpretaciones y pensamientos originados por la mente que opera en función de objetivos, estrategias y habilidades que va desplegando según sus capacidades y hábitos.
                                            </p>
                                        </section>
                                    </section>

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className={educaAmb.borde_item1}>
                            <div className={educaAmb.header}>
                                <Accordion.Header>
                                    <h3 className={educaAmb.header_h2}>Actividad desplegable</h3>
                                </Accordion.Header>
                            </div>
                            <Accordion.Body>
                                <article className="" id="">
                                    <div className="">
                                        <section id="" className="">
                                            <p><strong>Lea y complete</strong></p>
                                        </section>

                                        <section id="">
                                            <form name="" action="#" className="">
                                                <div className={educaAmb.select} id="">
                                                    <p>
                                                        La <strong> psicología ambiental</strong> se     encarga de las{/*interrelaciones */}
                                                        <select className={option.interrelaciones && comprobacion ? educaAmb.option : null} onChange={select1}>
                                                            <option></option>
                                                            <option value="los atributos">los atributos</option>
                                                            <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                            </option>
                                                            <option value="una persona">una persona</option>
                                                            <option value="interrelaciones">interrelaciones</option>
                                                            <option value="la persona">la persona</option>
                                                            <option value="su ambiente.">su ambiente.</option>
                                                            <option value="al comportamiento de las personas">al comportamiento de las
                                                            personas</option>
                                                        </select>
                                                        entre{/*la persona */}
                                                        <select className={option.la_persona && comprobacion ? educaAmb.option : null} onChange={select2}>
                                                            <option></option>
                                                            <option value="los atributos">los atributos</option>
                                                            <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                            </option>
                                                            <option value="una persona">una persona</option>
                                                            <option value="interrelaciones">interrelaciones</option>
                                                            <option value="la persona">la persona</option>
                                                            <option value="su ambiente.">su ambiente.</option>
                                                            <option value="al comportamiento de las personas">al comportamiento de las
                                                            personas</option>
                                                        </select>
                                                        y{/*su ambiente. */}
                                                        <select className={option.ambiente && comprobacion ? educaAmb.option : null} onChange={select3}>
                                                            <option></option>
                                                            <option value="los atributos">los atributos</option>
                                                            <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                            </option>
                                                            <option value="una persona">una persona</option>
                                                            <option value="interrelaciones">interrelaciones</option>
                                                            <option value="la persona">la persona</option>
                                                            <option value="su ambiente.">su ambiente.</option>
                                                            <option value="al comportamiento de las personas">al comportamiento de las
                                                            personas</option>
                                                        </select> 
                                                        La psicología <strong>ecológica</strong>  se encarga de{/*los atributos */}                 
                                                        <select className={option.atributos && comprobacion ? educaAmb.option : null} onChange={select4}>
                                                                <option></option>
                                                                <option value="los atributos">los atributos</option>
                                                                <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                                </option>
                                                                <option value="una persona">una persona</option>
                                                                <option value="interrelaciones">interrelaciones</option>
                                                                <option value="la persona">la persona</option>
                                                                <option value="su ambiente.">su ambiente.</option>
                                                                <option value="al comportamiento de las personas">al comportamiento de las
                                                                personas</option>
                                                            </select>
                                                        del entorno de{/*una persona */}
                                                        <select className={option.una_persona && comprobacion ? educaAmb.option : null} onChange={select5}>
                                                            <option></option>
                                                            <option value="los atributos">los atributos</option>
                                                            <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                            </option>
                                                            <option value="una persona">una persona</option>
                                                            <option value="interrelaciones">interrelaciones</option>
                                                            <option value="la persona">la persona</option>
                                                            <option value="su ambiente.">su ambiente.</option>
                                                            <option value="al comportamiento de las personas">al comportamiento de las
                                                                personas</option>
                                                        </select>
                                                        y cómo afectan{/*al desarrollo de su conducta. */}
                                                        <select className={option.desarrollo && comprobacion ? educaAmb.option : null} onChange={select6}>
                                                            <option></option>
                                                            <option value="los atributos">los atributos</option>
                                                            <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                            </option>
                                                            <option value="una persona">una persona</option>
                                                            <option value="interrelaciones">interrelaciones</option>
                                                            <option value="la persona">la persona</option>
                                                            <option value="su ambiente.">su ambiente.</option>
                                                            <option value="al comportamiento de las personas">al comportamiento de las
                                                            personas</option>                             
                                                            
                                                        </select>
                                                        Dichas disciplinas han concluido que el ambiente afecta al {/* al comportamiento de las
                                                                personas*/}
                                                        <select className={option.comportamiento && comprobacion ? educaAmb.option : null} onChange={select7}>
                                                            <option></option>
                                                            <option value="los atributos">los atributos</option>
                                                            <option value="al desarrollo de su conducta.">al desarrollo de su conducta.
                                                            </option>
                                                            <option value="una persona">una persona</option>
                                                            <option value="interrelaciones">interrelaciones</option>
                                                            <option value="la persona">la persona</option>
                                                            <option value="su ambiente.">su ambiente.</option>
                                                            <option value="al comportamiento de las personas">al comportamiento de las
                                                                personas</option>                             
                                                            
                                                        </select>
                                                        aunque no sean conscientes de ello.
                                                    </p>
                                                    <div className="">
                                                        <p>
                                                            <input 
                                                                className={educaAmb.botonComprobar} type="submit" 
                                                                name="" 
                                                                value="Comprobar"
                                                                id=""
                                                                onClick={comprobar}
                                                            />

                                                            <input 
                                                                type="button" 
                                                                name="" 
                                                                value="Texto completo"
                                                                className={educaAmb.botonTexto} 
                                                                onClick={mostrar}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                            {comprobacion ? <p>Su puntuación es <strong>{aciertos}</strong>/7.</p> : null}
                                        </section>
                                        <section id="" className="">
                                            {mostrarTexto ? 
                                                <p>
                                                La psicología ambiental se encarga de
                                                las <strong>interrelaciones</strong> entre{' '}
                                                <strong>la persona</strong> y <strong>su ambiente.</strong>
                                                La psicología ecológica se encarga de 
                                                <strong>los atributos</strong> del entorno de una persona y cómo
                                                afectan <strong>al desarrollo de su conducta</strong>. Dichas disciplinas han concluido que el ambiente afecta al <strong>comportamiento de las personas</strong> aunque no sean
                                                conscientes de ello.
                                            </p> : null
                                            }
                                            
                                        </section>
                                    </div>
                                </article>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className={educaAmb.borde_item1}>
                            <div className={educaAmb.header}>
                                <Accordion.Header>
                                    <h3 className={educaAmb.header_h2}>Recursos Multimedia</h3>
                                </Accordion.Header>
                            </div>
                            <Accordion.Body>
                                <div className="">
                                    <p className={educaAmb.iframe}>
                                        <iframe 
                                            width="560" height="315" src="https://www.youtube.com/embed/05JGuDon6Aw"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="allowFullScreen"></iframe> <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/Sa46bpJLNTQ" title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="allowFullScreen">   
                                        </iframe>
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item >
                    </Accordion>
                </article>

            </section>
        </div >
    )
}

export default CompPsicologEscolAmbie

