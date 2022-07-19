import React, { Fragment, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import acorde from "../acorde.module.css";
//import "./acorde.css";
import { Option, actividad } from "./Option";

const Acordeon = () => {
  

  const [ocultar, setOcultar] = useState(false);
  const sesionOculta = () => {
    setOcultar(!ocultar);
  };

  const [contador, setContador] = useState(0);

  const comprobar = () => {
    setContador(contador);
    console.log(contador);
  };

  const resFase1 = (e) => {
    e.preventDefault();
    const valor = e.target.value;

    if (valor === actividad[0].fase1.primera) {
      setContador(contador + 1);
    }

    if (valor === actividad[0].fase1.segunda) {
      setContador(contador + 1);
    }

    const seleccion = e.target;
    seleccion.disabled = true;
  };

  const resFase2 = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    if (valor === actividad[0].fase2.primera) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase2.segunda) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase2.tercera) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase2.cuarta) {
      setContador(contador + 1);
    }
    const seleccion = e.target;
    seleccion.disabled = true;
  };
  const resFase3 = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    if (valor === actividad[0].fase3.primera) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase3.segunda) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase3.tercera) {
      setContador(contador + 1);
    }
    const seleccion = e.target;
    seleccion.disabled = true;
  };
  const resFase4 = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    if (valor === actividad[0].fase4.primera) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase4.segunda) {
      setContador(contador + 1);
    }
    const seleccion = e.target;
    seleccion.disabled = true;
  };
  const resFase5 = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    if (valor === actividad[0].fase5.primera) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase5.segunda) {
      setContador(contador + 1);
    }
    if (valor === actividad[0].fase5.tercera) {
      setContador(contador + 1);
    }
    const seleccion = e.target;
    seleccion.disabled = true;
  };

  return (
    <Fragment>
      <Accordion defaultActiveKey={"5"}>
        <Accordion.Item eventKey="0" className={acorde.acordeonItem}>
          <Accordion.Header className={acorde.acordeonHeader}><h3>Fase 1</h3></Accordion.Header>
          <Accordion.Body className={acorde.acordeonBody}>
            Constitución del equipo de trabajo en el centro, compuesto por los
            equipos de orientación y los equipos docentes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className={acorde.acordeonItem}>
          <Accordion.Header className={acorde.acordeonHeader}><h3>Fase 2</h3></Accordion.Header>
          <Accordion.Body className={acorde.acordeonBody}>
            Realización de la sesión informativa al inicio de curso mediante la
            cual se hará una revisión y actualización de las competencias
            docentes referentes a la Educación para el Desarrollo así como los
            métodos de trabajo. Esta sesión tiene como objetivo reflexionar
            acerca de la teoría y la práctica docente.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className={acorde.acordeonItem}>
          <Accordion.Header className={acorde.acordeonHeader}><h3>Fase 3</h3></Accordion.Header>
          <Accordion.Body className={acorde.acordeonBody}>
            Definición del proyecto. Los equipos elaboran los proyectos
            definiendo los contenidos, los métodos, recursos y actividades. Debe
            adaptarse a las posibilidades y realidad del centro.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className={acorde.acordeonItem}>
          <Accordion.Header className={acorde.acordeonHeader}><h3>Fase 4</h3></Accordion.Header>
          <Accordion.Body className={acorde.acordeonBody}>
            Práctica en el centro. El equipo docente es quien inicia el proyecto
            educativo poniéndolo en marcha con su alumnado en el aula o fuera de
            ella.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className={acorde.acordeonItem}>
          <Accordion.Header className={acorde.acordeonHeader}><h3>Fase 5</h3></Accordion.Header>
          <Accordion.Body className={acorde.acordeonBody}>
            Recogida de datos y elaboración de una memoria, aquí se sistematiza
            y se hacen evaluaciones que quedan recogidas en una memoria de
            proyecto. Es ideal que el fin de la memoria no sirva solo para uso
            del centro sino que sirva para compartir el conocimiento y la
            experiencia en red con otras escuelas e instituciones educativas.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className={`${acorde.acordeonItem} ${acorde.acordeonSeparacion}`}>
          <Accordion.Header className={acorde.acordeonHeader}><h3>Actividad desplegable</h3>
            
          </Accordion.Header>
          <Accordion.Body className={acorde.acordeonBody}>
            <article className={acorde.article}>
              <div>
                <section>
                  <p>Lea y complete</p>
                </section>

                <section className={acorde.formulario}>
                  <form name="" action="#">
                    <div className={acorde.formulario} id="">
                      <input
                        type="hidden"
                        name="oculto"
                        id="oculto"
                        value="oculto"
                      />

                      <ul>
                        <li>
                          <strong>Fase 1</strong>: Constitución del
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase1}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          de trabajo en el centro, compuesto por los equipos de
                          orientación y los
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase1}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                        </li>
                        <br></br>
                        <li>
                          <strong>Fase 2</strong>: Realización de
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase2}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          al inicio de curso mediante la cual se hará una
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase2}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase2}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          de las competencias docentes referentes a la Educación
                          para el Desarrollo así como los
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase2}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          Esta sesión tiene como objetivo reflexionar acerca de
                          la teoría y la práctica docente.
                        </li>
                        <br></br>
                        <li>
                          <strong>Fase 3</strong>:
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase3}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          . Los equipos elaboran los proyectos definiendo los
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase3}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          , los métodos, recursos y
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase3}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          . Debe adaptarse a las posibilidades y realidad del
                          centro.
                        </li>
                        <br></br>
                        <li className={acorde.selected}>
                          <strong>Fase 4</strong>:
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase4}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          . El equipo docente es quien inicia
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase4}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          poniéndolo en marcha con su alumnado en el aula o
                          fuera de ella.
                        </li>
                        <br></br>
                        <li>
                          <strong>Fase 5</strong>: Recogida de datos y
                          elaboración de una
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase5}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          , aquí se sistematiza y se hacen evaluaciones que
                          quedan recogidas en una memoria de proyecto. Es ideal
                          que el fin de la memoria no sirva solo para uso del
                          centro sino que sirva para
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase5}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          el conocimiento y la
                          <select
                            id=""
                            className={acorde.no_seleccionado}
                            onChange={resFase5}
                          >
                            <option></option>
                            <Option seleccionado />
                          </select>
                          con otras escuelas e instituciones educativas.
                        </li>
                        <br></br>
                      </ul>
                      <p>
                        <span> </span>
                      </p>
                      <div>
                        <input
                          className={acorde.comprobar}
                          type="submit"
                          name="comprobar"
                          value="Comprobar"
                          id="comprobar"
                          onClick={comprobar}
                        />

                        <input
                          type="button"
                          name="Mostrar texto"
                          value="Mostrar texto"
                          className={acorde.mostrar}
                          id="retroalimentación"
                          onClick={sesionOculta}
                        />
                        <p className={acorde.puntuacion}>
                          Su puntuación es {contador}/14
                        </p>
                      </div>
                    </div>
                  </form>
                </section>
                <div className="oculta">
                  {ocultar ? 
                    <div>
                      <p>
                        <strong>Fase 1</strong>: Constitución del <u>equipo</u> de
                        trabajo en el centro, compuesto por los equipos de
                        orientación y los <u>equipos docentes.</u>
                      </p>
                      <p>
                        <strong>Fase 2</strong>: Realización de
                        <u> la sesión informativa</u> al inicio de curso mediante
                        la cual se hará una <u>revisión</u> y <u>actualización</u>
                        de las competencias docentes referentes a la Educación
                        para el Desarrollo así como los
                        <u> métodos de trabajo.</u> Esta sesión tiene como
                        objetivo reflexionar acerca de la teoría y la práctica
                        docente.
                      </p>
                      <p>
                        <strong>Fase 3</strong>: <u>Definición del proyecto</u>.
                        Los equipos elaboran los proyectos definiendo los
                        <u>contenidos</u>, los métodos, recursos y
                        <u>actividades</u>. Debe adaptarse a las posibilidades y
                        realidad del centro.
                      </p>
                      <p>
                        <strong>Fase 4</strong>: <u>Práctica en el centro</u>. El
                        equipo docente es quien inicia
                        <u>el proyecto educativo</u> poniéndolo en marcha con su
                        alumnado en el aula o fuera de ella.
                      </p>
                      <p>
                        <strong>Fase 5</strong>: Recogida de datos y elaboración
                        de una <u>memoria</u>, aquí se sistematiza y se hacen
                        evaluaciones que quedan recogidas en una memoria de
                        proyecto. Es ideal que el fin de la memoria no sirva solo
                        para uso del centro sino que sirva para <u>compartir </u>
                        el conocimiento y la <u>experiencia  en red</u> con otras
                        escuelas e instituciones educativas.
                      </p>
                    </div> : null}    
                </div>
              </div>              
            </article>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
};

export default Acordeon;
