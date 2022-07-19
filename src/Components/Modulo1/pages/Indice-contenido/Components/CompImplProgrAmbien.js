import React, { useState } from 'react';
import mod1 from '../../../Css/Modulo1.module.css';
import intervecion from '../../../assets/img/Intervecion_educativa1.jpg';
import impleProAmb from './impleProAmb.module.css';
import Accordion from "react-bootstrap/Accordion";



const CompImplProgrAmbien = () => {
    const juntaAndalucia = () => {
        "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;"
    }
    const [metodologia, setMetodologia] = useState(null);
    const [participen, setParticipen] = useState(null);
    const [grupPayMad, setgrupPayMad] = useState(null);
    const [materiales, setMateriales] = useState(null);
    const [espacio, setEspacio] = useState(null);
    const [sesiones, setSesiones] = useState(null);
    const [actividades, setActividades] = useState(null);
    const [contenidos, setContenidos] = useState(null);
    const [comision, setComision] = useState(null);

    const [mostrar, setMostrar] = useState(false);

    let [counter, setCounter] = useState(0);

    const [puntuacion, setPuntuacion] = useState(false);

    const cambio = (e) => {

        if (e.target.value === 'metodologías') setMetodologia('metodologías')
        if (e.target.value === 'participen') setParticipen('participen');
        if (e.target.value === 'un grupo de trabajo de padres y madres') setgrupPayMad('grupo');
        if (e.target.value === 'materiales') setMateriales('materiales');
        if (e.target.value === 'espacio') setEspacio('espacio');
        if (e.target.value === 'sesiones') setSesiones('sesiones');
        if (e.target.value === 'actividades') setActividades('actividades');
        if (e.target.value === 'contenidos') setContenidos('contenidos');
        if (e.target.value === 'comisión de trabajo') setComision('comisión');
    };

    const camposInputs = () => {
        setPuntuacion(true);
        if (metodologia === 'metodologías'){ 
            setMetodologia(true);
            setCounter(counter=counter + 1);
        }
        if (participen === 'participen'){ 
            setParticipen(true);
            setCounter(counter=counter+1);
        }
        if (grupPayMad === 'grupo'){ 
            setgrupPayMad(true);
            setCounter(counter=counter+1);
        }
        if (materiales === 'materiales'){ 
            setMateriales(true);
            setCounter(counter=counter+1);
        }
        if (espacio === 'espacio'){ 
            setEspacio(true);
            setCounter(counter=counter+1);
        }
        if (sesiones === 'sesiones'){ 
            setSesiones(true);
            setCounter(counter=counter+1);
        }
        if (actividades === 'actividades'){ 
            setActividades(true);
            setCounter(counter=counter+1);
        }
        if(contenidos === 'contenidos'){ 
            setContenidos(true);
            setCounter(counter=counter+1);
        }
        if(comision === 'comisión'){ 
            setComision(true);
            setCounter(counter=counter+1);
        }
        console.log(counter);
        return counter;
    };
    const mostrarTexto = () => {
        setMostrar(!mostrar);
    }
    const limpiar = () => {
        window.location.reload()
    };

    return (
        <div id="" className={mod1.presentacion}>
            <section id="main">

                <h2>
                    3.1 Niveles a tener en cuenta para la implantación de un programa
                    ambiental en el centro
                </h2>

                <article className="" id="">

                    <div id="" className={impleProAmb.img}>
                        <p>
                            <img
                                src={intervecion}
                                alt="Espacio de aprendizaje alternativo al aula (invernadero) niños e circulo en torno a una mesa de trabajo y el profesor explicando."
                                title="Intervención educativa, niveles"
                                width="280"
                                height="200"
                            />
                        </p>
                        <ul></ul>
                        <p className={impleProAmb.span}>
                            <span>
                                Basándonos en las experiencias de aprendizaje  recogidas en
                                el libro Pedagogías del siglo XXI de Jaume Carbonell  se
                                propone una intervención que toma sus bases del modelo
                                Montessori y la Escuela Reggio Emillia. Se realiza desde
                                distintos planos:
                            </span>

                        </p>
                        <div className={impleProAmb.acordeon}>
                            <Accordion>
                                <Accordion.Item eventKey="0" className={impleProAmb.fondo_acordeon}>
                                    <div className={impleProAmb.centrar}>    
                                        <Accordion.Header className={impleProAmb.centrar}>
                                            <span>Plano organizativo:</span>
                                        </Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                        <p>
                                            <span>
                                                Todo proyecto se implanta de manera{' '}
                                                <strong>gradual</strong> ya que cualquier enfoque a
                                                integrar debe hacerse desde la normativa del{' '}
                                                <strong>currículo</strong>. Se propone establecer
                                                sesiones una vez o dos por semana y trabajar los
                                                enfoques con los contenidos establecidos en el
                                                currículum desde la metodología escogida.
                                            </span>
                                        </p>
                                    </Accordion.Body >
                                </Accordion.Item>

                                <Accordion.Item eventKey="1" className={impleProAmb.fondo_acordeon}>
                                    <div className={impleProAmb.centrar}>
                                        <Accordion.Header><span>Plano del profesorado:</span>
                                        </Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                        <p>
                                            <span>Es condición sine qua non el crear una{' '}
                                                <strong>comisión</strong> o grupo de{' '}
                                                <strong>trabajo</strong> donde las reuniones sean
                                                periódicas (cada quince días) con el objetivo de{' '}
                                                <strong>coordinar</strong> las diferentes{' '}
                                                <strong>actividades</strong> a realizar en las sesiones y
                                                talleres. Así se ajustan y adaptan los contenidos del
                                                currículum y se hace una valoración del trabajo
                                                realizado.
                                            </span>

                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" className={impleProAmb.fondo_acordeon}>
                                    <div className={impleProAmb.centrar}>
                                        <Accordion.Header>
                                            <span>Plano del alumnado:</span>
                                        </Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                        <p>
                                            <span>En las sesiones y talleres deben establecerse{' '}
                                                <strong>grupos</strong> entre alumnos: uno o dos
                                                profesores actuarán como guías poniendo a disposición del
                                                alumnado los materiales y supervisando las sesiones y el
                                                trabajo de estos. Esto debe quedar registrado mediante
                                                tablas de <strong>evaluación</strong> con las cuales
                                                mediremos los estándares de primaria para poder ubicar en
                                                que tramo de aprendizaje se encuentra cada alumno.
                                            </span>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" className={impleProAmb.fondo_acordeon}>
                                    <div className={impleProAmb.centrar}>
                                        <Accordion.Header>
                                            <span>Plano de la familia:</span>
                                        </Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                        <p>
                                            <span>Es indispensable hacerlas participes de las metodologías
                                                que estemos empleando para que participen de ellas siempre
                                                que sea posible. Por ello se creará también un grupo de
                                                trabajo de padres y madres que podrán elaborar junto con
                                                los profesores los materiales usados en los talleres y
                                                sesiones. Establecer este nivel sirve para que el alumnado
                                                tenga una continuidad del trabajo en clase en sus casas
                                                con el conocimiento de la metodología por parte de la
                                                familia.
                                            </span>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4" className={impleProAmb.fondo_acordeon}>
                                    <div className={impleProAmb.centrar}>
                                        <Accordion.Header>
                                            <span>Plano del espacio:</span>
                                        </Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                        <p>
                                            <span>La comisión establecerá cuáles son los ambientes y lugares
                                                de aprendizaje adaptados a las sesiones y a las actividades
                                                que se vayan a trabajar en función a los contenidos. Los
                                                alumnos se redistribuyen en las aulas, espacios exteriores
                                                del centro o fuera de este si está contemplado.
                                            </span>
                                        </p>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </article>
                <article className={impleProAmb.rellenar_huecos} id="">
                    <div className="">

                        <h2><span className={impleProAmb.pregunta}> ? </span>Rellenar huecos</h2>

                        <div className="">
                            <div className="">
                                <section
                                    id=""
                                    className=""
                                >
                                    <p>
                                        Lea el párrafo que aparece abajo y complete las palabras
                                        que faltan.
                                    </p>
                                </section>

                                <section className="" id="">
                                    <form 
                                        name=""
                                        action="#"
                                        className=""
                                        id='formulario'
                                    >
                                        <div className={impleProAmb.spanInput}>
                                            <p>
                                                <span>Es importante</span> hacerlas participes a las
                                                familias de las
                                                {/*<label className="" htmlFor=""></label>*/}


                                                <input
                                                    className={metodologia === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    name='metodologías'
                                                    id="metodologías"
                                                    onChange={cambio}

                                                />

                                                que empleamos para que

                                                <input
                                                    className={participen === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    onChange={cambio}
                                                    id="participen"
                                                    name='participen'
                                                />
                                                Por eso se crea

                                                <input
                                                    className={grupPayMad === true ? `${impleProAmb.respuestaOk}  ${impleProAmb.inputEspacio}` : `${impleProAmb.respuestaMala}  ${impleProAmb.inputEspacio}`}
                                                    type="text"
                                                    id="un grupo de trabajo de padres y madres"
                                                    onChange={cambio}
                                                    name="un grupo de trabajo de padres y madres"
                                                />
                                                que pueden elaborar junto a los profesores los

                                                <input
                                                    className={materiales === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    id="materiales"
                                                    onChange={cambio}
                                                    name="materiales"
                                                />

                                                En el plano del

                                                <input
                                                    className={espacio === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    id="espacio"
                                                    onChange={cambio}
                                                    name="espacio"
                                                />
                                                se establecen los ambientes y lugares de aprendizaje
                                                adaptados a las

                                                <input
                                                    className={sesiones === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    id="sesiones"
                                                    onChange={cambio}
                                                    name="sesiones"
                                                />
                                                y a las

                                                <input
                                                    className={actividades === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    id="actividades"
                                                    onChange={cambio}
                                                    name="actividades"
                                                />
                                                en función de los

                                                <input
                                                    className={contenidos === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    id="contenidos"
                                                    onChange={cambio}
                                                    name="contenidos"
                                                />
                                            </p>
                                            <p>
                                                En el plano del profesorado es imprescindible crear
                                                una

                                                <input
                                                    className={comision === true ? impleProAmb.respuestaOk : impleProAmb.respuestaMala}
                                                    type="text"
                                                    id="comisión de trabajo"
                                                    onChange={cambio}
                                                    name="comisión de trabajo"
                                                />

                                            </p>
                                            <div className="">
                                                <p>
                                                <input
                                                        type="button"
                                                        name=""
                                                        value="Puntuación"
                                                        id=""
                                                        className={impleProAmb.mostrarValidas}
                                                        onClick={camposInputs}
                                                    />
                                                    <input
                                                        type="button"
                                                        name=""
                                                        value="Mostrar texto completo"
                                                        className={impleProAmb.mostrar}
                                                        onClick={mostrarTexto}
                                                    />

                                                    <input 
                                                        type="button"
                                                        name=""
                                                        value="Reset"
                                                        className={impleProAmb.limpiar}
                                                        onClick={limpiar}
                                                    />
                                                </p>
                                                {puntuacion ? <p>Su puntuación es {counter}/9</p> : null}
                                            </div>
                                            <p id="" className={mostrar ?  impleProAmb.mostrarTexto : impleProAmb.ocultarTexto}>
                                                Es importante hacerlas participes a las familias de las <strong>metodologías</strong> que empleamos para que <strong>participen</strong>. Por eso se crea <strong>un grupo de trabajo de padres y madres</strong> que pueden elaborar junto a los profesores los <strong>materiales</strong>.

                                                En el plano del <strong>espacio</strong> se establecen los ambientes y lugares de aprendizaje adaptados a las <strong>sesiones</strong> y a las <strong>actividades</strong>  en función de los <strong>contenidos</strong>.

                                                En el plano del profesorado es imprescindible crear una <strong>comisión de trabajo</strong>
                                            </p>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={impleProAmb.recursos} id="">
                    <div className="">

                        <h2 className="">Recursos Multimedia</h2>

                        <div className="">
                            <div className="">
                                <div id="" className="">
                                    <div className={impleProAmb.img}>
                                        <p>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/BFalvM2vh80"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen="allowFullScreen"
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

                        <h2 className="">Para Saber Más</h2>

                        <div className="">
                            <div className="">
                                <div id="" className="">
                                    <div className="">
                                        <p>
                                            <a
                                                href="https://www.juntadeandalucia.es/educacion/vscripts/w_cea/pdfs/Enc/XVI%20E_05.4.pdf"
                                                onClick={juntaAndalucia}
                                            >LA PARTICIPACIÓN DE LA COMUNIDAD EDUCATIVA
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div >
    )
}

export default CompImplProgrAmbien;

