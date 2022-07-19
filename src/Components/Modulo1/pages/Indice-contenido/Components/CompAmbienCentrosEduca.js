import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import mod1 from "../../../Css/Modulo1.module.css";
import ambiente from './AmbintCentroEduc.module.css';
import ambientalizacion from '../../../assets/img/ambientalizacion_de_centros_educativos.jpg';

const CompAmbienCentrosEduca = () => {
    const centrosEducativos = () => {
        "window.open(this.href,'La ambientalización de los centros educativos','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;"
    }
    const ecoauditorias = () => {
        "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=950,height=600,left=C,top=C');return false;"
    }

    const sobreResiduo = () => {
        "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;"
    }

    const [mostrar, setMostrar] = useState(false);
    const [opcion1, setOpcion1] = useState(false);
    const [opcion2, setOpcion2] = useState(false);
    const [opcion3, setOpcion3] = useState(false);
    const [opcion4, setOpcion4] = useState(false);

    const opcion = (e) => {
        if (e.target.id === 'opcion1') {
            setOpcion1(true);
            e.target.disabled = true;
        }
        if (e.target.id === 'opcion2') {
            setOpcion2(true);
            e.target.disabled = true;
        }
        if (e.target.id === 'opcion3') {
            setOpcion3(true);
            e.target.disabled = true;
        }
        if (e.target.id === 'opcion4') {
            setOpcion4(true);
            e.target.disabled = true; console.log(opcion4)
        }
    }

    const explicacion = (e) => {
        setMostrar(!mostrar);
    }
    
    const limpiarForm = () => {
        window.location.reload();
        return false;
    };  

    return (
        <div id="" className={mod1.presentacion}>
            <h2>3. Ambientalización de centros educativos</h2>
            <article className={ambiente.centros_educativos}>
                <div className="">
                    <div id="" className="">
                        <p className={ambiente.img}>
                            <img
                                src={ambientalizacion}
                                alt="Plano medio de las botas de agua de unos niños trabajando en un huerto"
                                title="Ambientalización de centros educativos"
                                width="280"
                                height="200"
                            />
                        </p>
                        <p>
                            <span>
                                Para implementar una educación ambiental{" "}
                                <strong>significativa</strong> y de <strong>calidad</strong> es
                                necesaria una coherencia entre el saber hacer y las estructuras{" "}
                                <strong>organizativas</strong>, por ello es preciso incorporar
                                nuevos modelos de <strong>gestión</strong> y nuevas{" "}
                                <strong>alternativas</strong>{" "}
                                para el aprovechamiento de los recursos.
                            </span>
                        </p>
                        <p>
                            <span>
                                Las instituciones educativas son medios de especial relevancia a
                                través de los cuales promover el <strong>desarrollo{" "}</strong>
                                <strong>sostenible</strong> de la sociedad porque inciden en el
                                cambio global desde lo local.
                            </span>
                        </p>
                        <p>
                            <span>
                                En este sentido es necesario poner de relevancia actuaciones a
                                pequeña escala desde la escuela de manera que los alumnos puedan
                                seguir integrar un modelo <strong>coherente</strong> con la{" "}
                                <strong>sostenibilidad</strong> a través de la vivencia en los
                                espacios escolares.
                            </span>
                        </p>
                        <p>
                            <span>
                                No basta con implementar programas de educación ambiental, es
                                necesaria una <strong>arquitectura</strong> real y coherente que
                                respalde dichos programas. Cuando la estructura organizativa de
                                un centro versa sobre un{" "}
                                <strong>diseño</strong> y una <strong>planificación</strong>{" "}
                                orientada al uso sostenible de los recursos y al uso de zonas
                                verdes, así como a la conveniencia de las actividades de ocio
                                que contextualizan al propio centro se desarrollan realmente
                                modelos sostenibles y comprometidos con el medio.
                            </span>
                        </p>
                        <p>
                            <span>
                                Los programas que incluyen
                                <strong>{" "}ecoauditorias</strong> escolares son una buena
                                iniciativa, en el apartado 1.4 veremos detenidamente un ejemplo
                                de este tipo de prácticas a través del Programa Ecoescuelas pero
                                podemos ver diversos programas que incorporan este tipo de
                                prácticas como{" "}
                                <a
                                    href="https://www.rinconeducativo.org/es/recursos-educativos/ejemplo-de-ecoauditoria-sobre-residuos"
                                    onClick={sobreResiduo}
                                >
                                    en este ejemplo bastante detallado
                                </a>
                                o el que ofrece la propia página del Centro Nacional de
                                Educación Ambiental{" "}
                                <a
                                    href="https://www.miteco.gob.es/es/ceneam/recursos/documentos/ecoauditorias.aspx"
                                    onClick={ecoauditorias}
                                >
                                    (CENEAM)
                                </a>
                                donde se desarrolla en detalle la razón de ser de las
                                ecoauditorías en los centros educativos.
                            </span>
                        </p>
                        <p></p>
                    </div>
                </div>
            </article>
            <Accordion>

                <Accordion.Item eventKey="0" className={ambiente.fondo_acordeon}>

                    
                        <Accordion.Header className={ambiente.centrar}>
                            <h3 className={ambiente.header}><span className={ambiente.pregunta}>?</span> Pregunta de Selección Múltiple</h3>
                        </Accordion.Header>
                    
                    <Accordion.Body>
                        <div className="">
                            <section className="">
                                <div id="">
                                    <form name="" id="formulario" action="#" className={ambiente.Preguntas}>
                                        
                                        <div className="">
                                            <ol>
                                                <li>
                                                    ¿ Cómo pueden contribuir los centros educativos a la
                                                    sostenibilidad ? Marca la casilla correspondiente si la afirmación es correcta o dejala en blanco en caso de ser incorrecta.
                                                </li>
                                            </ol>
                                        </div>
                                        <section className="">
                                            {/*<h2 className="">Respuestas</h2>*/}
                                            <section className="">
                                                <p className="">
                                                    <label htmlFor="">
                                                        {/*<a href="#opcion1">Opción 1</a>*/}
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="opcion1"
                                                        value="True"
                                                        onChange={opcion}
                                                    />
                                                </p>

                                                <div className="" id="">
                                                    <div id="" className="">
                                                        <p>
                                                            Desde la estructura organizativa implicando a toda
                                                            la comunidad educativa y desde el saber hacer.
                                                        </p>
                                                    </div>
                                                    {mostrar && opcion1 ? <p className={`${ambiente.correcto} correcto`} >Correcto</p> : null}
                                                    {mostrar && !opcion1 ? <p className={ambiente.incorrecto}>Incorrecto</p> : null}
                                                </div>
                                                <section className="" id=""></section>
                                            </section>
                                            <section className="">
                                                <p className="">
                                                    <label htmlFor="" className="">
                                                        {/*<a href="#answer-139_302">Opción 2</a>*/}
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="opcion2"
                                                        value="True"
                                                        onChange={opcion}
                                                    />

                                                </p>
                                                <div className="" id="">
                                                    <div id="" className="">
                                                        <p>
                                                            Con el desarrollo de programas de Educación
                                                            ambiental.
                                                        </p>
                                                    </div>
                                                    {mostrar && opcion2 ? <p className={ambiente.correcto}>Correcto</p> : null}
                                                    {mostrar && !opcion2 ? <p className={ambiente.incorrecto}>Incorrecto</p> : null}
                                                </div>
                                                <section className="" id=""></section>
                                            </section>
                                            <section className="">
                                                <p className="">
                                                    <label htmlFor="" className="">
                                                        {/*<a href="#answer-139_304">Opción 3</a>*/}
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="opcion3"
                                                        value="False"
                                                        onChange={opcion}
                                                    />
                                                </p>
                                                <div className="" id="">
                                                    <div id="" className="">
                                                        <p>
                                                            Dándole mayor peso a las actividades en el campo,
                                                            en las granjas escuelas o las ecoaldeas acercando
                                                            a los alumnos a la naturaleza.
                                                        </p>
                                                    </div>
                                                    {mostrar && !opcion3 ? <p className={ambiente.correcto}>Correcto</p> : null}
                                                    {mostrar && opcion3 ? <p className={ambiente.incorrecto}>Incorrecto</p> : null}
                                                </div>
                                                <section className="" id=""></section>
                                            </section>
                                            <section className="">
                                                <p className="">
                                                    <label htmlFor="" className="">
                                                        {/*<a href="#answer-139_306">Opción 4</a>*/}
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="opcion4"
                                                        value="False"
                                                        onChange={opcion}
                                                    />
                                                </p>
                                                <div className="" id="">
                                                    <div id="" className="">
                                                        <p>
                                                            Participando activamente en las efemérides más
                                                            importantes de temática medioambiental.
                                                        </p>
                                                    </div>
                                                    {mostrar && !opcion4 ? <p className={ambiente.correcto}>Correcto</p> : null}
                                                    {mostrar && opcion3 ? <p className={ambiente.incorrecto}>Incorrecto</p> : null}
                                                </div>
                                                <section className="" id=""></section>
                                            </section>
                                        </section>
                                        <div className="">
                                            <p>
                                                <input
                                                    type="button"
                                                    name=""
                                                    className={ambiente.input_mostrar}
                                                    value="Mostrar explicación"
                                                    id=""
                                                    onClick={explicacion}
                                                />
                                                <input
                                                    type="button"
                                                    name=""
                                                    className={ambiente.input_rest}
                                                    value="Restaurar"
                                                    id=""
                                                    onClick={limpiarForm}
                                                />
                                            </p>
                                        </div>
                                        <section id="" className={mostrar ? ambiente.explicacion : ambiente.ocultar_explicacion}>
                                            {/*<h2 className="">Retroalimentación</h2>*/}

                                            <div id="" className="">
                                                <p>
                                                    Desde la estructura organizativa implicando a toda la
                                                    comunidad educativa y desde el saber hacer.
                                                </p>
                                                <ul>
                                                    <li>
                                                        !<strong>Correcto</strong>!
                                                    </li>
                                                </ul>
                                                <p>
                                                    Con el desarrollo de programas de Educación ambiental.
                                                </p>
                                                <ul>
                                                    <li>
                                                        !<strong>Correcto</strong> !Aplicar un programa de
                                                        Educación ambiental  bien definido y estructurado es
                                                        una herramienta muy poderosa para educar en el
                                                        desarrollo sostenible y establecer buenas relaciones
                                                        con el medio.
                                                    </li>
                                                </ul>
                                                <p>
                                                    Dándole mayor peso a las actividades en el campo, en
                                                    las granjas escuelas o las ecoaldeas acercando a los
                                                    alumnos a la naturaleza.
                                                </p>
                                                <ul>
                                                    <li>
                                                        <strong>Incorrecto</strong>. No bastaría con esto,
                                                        aunque por supuesto, un programa de educación
                                                        ambiental debería de tener este tipo de actividades
                                                        incluidos en él, sería solo una pequeña parte que
                                                        debe ir respaldada por el currículo y enmarcada en
                                                        un centro comprometido con la sostenibilidad.
                                                    </li>
                                                </ul>
                                                <p>
                                                    Participando activamente en las efemérides más
                                                    importantes de temática medioambiental.
                                                </p>
                                                <ul>
                                                    <li>
                                                        <strong>Incorrecto</strong>. Esta práctica extendida
                                                        en los centros educativos es solo un parche
                                                        totalmente insuficiente y no se acerca al alcance de
                                                        la verdadera Educación ambiental.
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>
                                    </form>

                                </div>
                            </section>

                        </div>
                    </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="1" className={ambiente.fondo_acordeon}>
                    <Accordion.Header className={ambiente.centrar}>
                        <h3>Recursos Multimedia</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <article className="" id="">
                            <div className="">
                                <div className="">
                                    <div id="" className="">
                                        <div className={ambiente.iframe}>
                                            <p>
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/0L7yHEyKhXs"
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
                        </article>
                    </Accordion.Body>

                </Accordion.Item>

            </Accordion>


            <article className={ambiente.saber_mas} id="">
                <div className="">

                    <h2 className="">Para Saber Más</h2>
                    <div>
                        <p>
                            <a
                                href="https://www.juntadeandalucia.es/medioambiente/consolidado/publicacionesdigitales/40-727_LA_EDUCACION_AMBIENTAL_EN_ANDALUCIA-_III_CONGRESO_ANDALUZ_DE_EDUCACION_AMBIENTAL/40-727/7_LA_AMBIENTALIZACION_DE_LOS_CENTROS_EDUCATIVOS.PDF"
                                onClick={centrosEducativos}
                            >
                                La ambientalización de los centros educativos: Factor de
                                calidad de la gestión en las organizaciones
                            </a>
                        </p>
                    </div>



                </div>
            </article>
        </div>
    );
};

export default CompAmbienCentrosEduca;
