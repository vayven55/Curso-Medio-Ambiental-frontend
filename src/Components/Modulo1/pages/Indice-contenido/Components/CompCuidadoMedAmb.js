import React, { useState } from 'react'
import mod1 from '../../../Css/Modulo1.module.css';
import cuidado from './cuidado.module.css';
import Accordion from "react-bootstrap/Accordion";
import hierba from '../../../assets/img/medioambentecomodimensioncalidad.jpg';
import { EducarEn, EducarSobre, EducarPara } from './componentes/component-cuidado/Educar';
import estrella from '../../../assets/icons/estrella-blanca.svg';

const CompCuidadoMedAmb = () => {
    const analespedagogia = () => {
        "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');return false;"
    };

    const [educaEnEl, setEducaEnEl] = useState(true);
    const enel = () => {
        setEducaEnEl(true);
        setEducaSobre(false);
        setEducaPara(false)
    };

    const [educaSobre, setEducaSobre] = useState(false);
    const sobre = () => {
        setEducaSobre(true);
        setEducaEnEl(false);
        setEducaPara(false)
    };

    const [educaPara, setEducaPara] = useState(false);
    const para = () => {
        setEducaPara(true);
        setEducaEnEl(false);
        setEducaSobre(false);
    };

    const [respuesta, setRespuesta] = useState(false);
    const [respuesta1, setRespuesta1] = useState(false);
    const [respuesta2, setRespuesta2] = useState(false);

    const correcto = () => {
        setRespuesta(true);
        setRespuesta1(false);
        setRespuesta2(false);
    };
    const incorrecto1 = () => {
        setRespuesta1(true);
        setRespuesta2(false);
        setRespuesta(false);
    };    
    const incorrecto2 = () => {
        setRespuesta2(true);
        setRespuesta1(false);
        setRespuesta(false);
    };            
        
    const [comprobacion, setComprobacion] = useState(false);
    const [comprobIncorrecto, setComprobIncorrecto] = useState(false);
    const comprobar = () => {
        if (respuesta) {
            setComprobacion(true);
            setComprobIncorrecto(false);
        } else {
            setComprobIncorrecto(true);
            setComprobacion(false);
        };

    };

    const reset = () => {
        window.location.reload();
    }

    return (
        <div id="" className={mod1.presentacion}>
            <section id="main">

                <h2>
                    3.2 El cuidado del medio ambiente como dimensión de la calidad
                    educativa
                </h2>

                <article className="" id="">
                    <div className="">
                        <div id="" className="">
                            <p className={cuidado.imagen}>
                                <img
                                    src={hierba}
                                    alt="Hierba verde"
                                    title="El cuidado del medio ambiente como dimensión de la calidad educativa"
                                    width="340"
                                    height="260"
                                />
                            </p>
                            <p>
                                <span>Las organizaciones educativas se caracterizan por ser
                                    dinámicas y están sujetas a variables de carácter afectivas,
                                    psicosociales, profesionales, geográficas y
                                    medioambientales. Es por ello que el concepto de{' '}
                                    <strong>eficiencia</strong> de un centro educativo depende
                                    de que exista un <strong>equilibrio</strong> y una buena
                                    relación entre todas aquellas <strong>variables</strong> lo
                                    cual es condición indispensable para la consecución de las
                                    metas y objetivos que orientan las intervenciones del
                                    centro.</span
                                >
                            </p>
                            <p>
                                <span>De todas las dimensiones que puede contener el concepto de{' '}
                                    <strong>calidad</strong> en una institución educativa  la
                                    dimensión medioambiental es la que prepara para el uso{' '}
                                    <strong>responsable</strong> de los{' '}
                                    <strong>recursos</strong> así como en{' '}
                                    <strong>competencias</strong>{' '}
                                    <strong>actitudinales</strong> de compromiso y
                                    responsabilidad del medio ambiente próximo y lejano. Es
                                    decir, el concepto de calidad medioambiental debe incorporar
                                    programas y objetivos propios de la Educación
                                    Ambiental.</span
                                >
                            </p>
                            <p>
                                <span>Los programas de educación en valores son una buena opción
                                    para integrar la calidad en las instituciones. Hay tres
                                    modelos posibles para su implementación:</span
                                >
                            </p>

                            <div className={cuidado.educar}>
                                <ul className={cuidado.educar}>
                                    <li onClick={enel} className={educaEnEl ? cuidado.enel : null}>
                                        Educar en el medio:
                                    </li>
                                    <li onClick={sobre} className={educaSobre ? cuidado.sobre : null}>
                                        Educar sobre el medio:
                                    </li>
                                    <li onClick={para} className={educaPara ? cuidado.para : null}>
                                        Educar para el medio:
                                    </li>

                                </ul>
                            </div>
                            {educaEnEl ? <EducarEn /> : null}
                            {educaSobre ? <EducarSobre /> : null}
                            {educaPara ? <EducarPara /> : null}
                        </div>
                    </div>
                </article>
                <article className="" id="">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className={cuidado.acordeon_header}>
                                <img src={estrella} alt="icono" className={cuidado.icons} /> Responde
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className={cuidado.marcoDiv}>
                                    <p className={cuidado.educarParaElMedio}>
                                        Educar para el medio consiste en:
                                    </p>
                                    <ul className={cuidado.aciertos}>
                                        <li onClick={correcto} className={respuesta ? cuidado.correcto : null}>
                                            Proporcionar estímulos para aprendizajes directos que
                                            contribuyen a la maduración psíquica y física.
                                        </li>
                                        <li id="respuesta1" onClick={incorrecto1} className={respuesta1 ? cuidado.incorrecto1 : null}>
                                            Que los alumnos se acerquen e interactúen con el medio
                                            para su interpretación como contenidos de distintas
                                            disciplinas.
                                        </li>
                                        <li id="respuesta2" onClick={incorrecto2} className={respuesta2 ? cuidado.incorrecto2 : null}>
                                            Que el entorno tome relevancia frente al individuo
                                            centrándose en la protección de valores y recursos.
                                        </li>
                                    </ul>
                                    <div>
                                        <p>
                                            <button onClick={comprobar} className={cuidado.boton}>Comprobar</button>
                                            <button onClick={reset} className={cuidado.reset}>Restaurar</button>
                                        </p>

                                        {
                                            comprobacion ?
                                                <p className="">
                                                    ¡Correcto! Respuesta correcta: Al proporcionar este
                                                    tipo de aprendizaje estamos contribuyendo a la
                                                    formación integral de los educandos por medio de una
                                                    perspectiva eminentemente instrumentalista.
                                                </p>
                                                : null
                                        }
                                        {
                                            comprobIncorrecto ?
                                                <p className="">
                                                    No es correcto... Respuesta correcta: Proporcionar
                                                    estímulos para aprendizajes directos que contribuyen a
                                                    la maduración psíquica y física, ya que al propiciar
                                                    este tipo de aprendizaje estamos contribuyendo a la
                                                    formación integral de los educandos por medio de una
                                                    perspectiva eminentemente instrumentalista del medio.
                                                </p> : null
                                        }

                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>
                <article className={cuidado.multimedia_article} id="">
                    <div className="">

                        <h2 className={cuidado.multimedia}>Recursos Multimedia</h2>

                        <div className="">
                            <div className="">
                                <div id="" className="">
                                    <div className="">
                                        <p className={cuidado.iframe}>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/xx9D53AfQro"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen="allowfullscreen"
                                            ></iframe>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="" id="">
                    <div className="">
                        <h2 className={cuidado.saber_mas}>Para Saber Más</h2>

                        <div className="">
                            <div className="">
                                <div id="" className="">
                                    <div className="">
                                        <h5 className={cuidado.h4}>
                                            <a
                                                href="https://revistas.um.es/analespedagogia/article/view/285921"
                                                onClick={analespedagogia}
                                            >
                                                Educación y medio ambiente: la importancia de las relaciones hombre-medio
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default CompCuidadoMedAmb

