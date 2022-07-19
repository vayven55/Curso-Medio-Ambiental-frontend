import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import cuidadoAprenden from "./cuidadoAprenden.module.css";
import ninos from "../../../assets/img/ninos_sonriendo.jpg";
import CuidadoAprenden from "./componentes/Component-cuidado-aprenden/CuidadoAprenden";
import Accordion from "react-bootstrap/Accordion";

const CompAlumCuidaMedAmb = () => {
  const LosNinos = () => {
    "window.open(this.href,'¿Cómo  los niños a amar la naturaleza?','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;";
  };

  const [verConsumo, setVerConsumo] = useState("consumo");
  const [verVisitar, setVerVisitar] = useState("");

  const visualizarConsumo = () => {
    setVerConsumo("consumo");
    setVerVisitar(null);
  };

  const visualizarVisitar = () => {
    setVerVisitar("visitar");
    setVerConsumo(null);
  };

  const [seleccion, setSeleccion] = useState({
    concretas: false,
    observar: false,
    problematica: false,
    contexto_proximo: false,
    escuela: false,
    hogar: false,
    cuestionamientos: false,
    pensamiento_critico: false,
    la_conciencia: false,
    propio_papel: false,
    individuo: false,
    orientarlos: false,
  });
  const {
    concretas,
    observar,
    problematica,
    contexto_proximo,
    escuela,
    hogar,
    cuestionamientos,
    pensamiento_critico,
    la_conciencia,
    propio_papel,
    individuo,
    orientarlos,
  } = seleccion;

  const select = (e) => {
    const seleccionado = e.target.id;
    const selecValue = e.target.value;

    if (seleccionado === "select1") {
      if (selecValue === "concretas") {
        setSeleccion({ ...seleccion, concretas: true });
      }
    }
    if (seleccionado === "select2") {
      if (selecValue === "observar") {
        setSeleccion({ ...seleccion, observar: true });
      }
    }
    if (seleccionado === "select3") {
      if (selecValue === "problemática") {
        setSeleccion({ ...seleccion, problematica: true });
      }
    }
    if (seleccionado === "select4") {
      if (selecValue === "el contexto próximo") {
        setSeleccion({ ...seleccion, contexto_proximo: true });
      }
    }
    if (seleccionado === "select5") {
      if (selecValue === "escuela") {
        setSeleccion({ ...seleccion, escuela: true });
      }
    }
    if (seleccionado === "select6") {
      if (selecValue === "hogar") {
        setSeleccion({ ...seleccion, hogar: true });
      }
    }
    if (seleccionado === "select7") {
      if (selecValue === "cuestionamientos") {
        setSeleccion({ ...seleccion, cuestionamientos: true });
      }
    }
    if (seleccionado === "select8") {
      if (selecValue === "el pensamiento crítico") {
        setSeleccion({ ...seleccion, pensamiento_critico: true });
      }
    }

    if (seleccionado === "select9") {
      if (selecValue === "la conciencia") {
        setSeleccion({ ...seleccion, la_conciencia: true });
      }
    }
    if (seleccionado === "select10") {
      if (selecValue === "propio papel") {
        setSeleccion({ ...seleccion, propio_papel: true });
      }
    }
    if (seleccionado === "select11") {
      if (selecValue === "individuo") {
        setSeleccion({ ...seleccion, individuo: true });
      }
    }
    if (seleccionado === "select12") {
      if (selecValue === "orientarlos") {
        setSeleccion({ ...seleccion, orientarlos: true });
      }
    }
  };

  const [mostrar, setMostrar] = useState(false);
  const [comprobacion, setComprobacion] = useState(false);

  const comprobar = () => {
    setComprobacion(true);
  };

  const MostrarTexto = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className={mod1.presentacion}>
      <section id="">
        <h2>4.3 Cómo aprenden los alumnos el cuidado del medio ambiente</h2>

        <article className={cuidadoAprenden.articulo}>
          <p className={cuidadoAprenden.ninos}>
            <img
              src={ninos}
              alt="Un grupo de niños sonríen mirando a cámara"
              title="Cómo aprenden los alumnos la educación ambiental"
              width="300"
              height="220"
            />
          </p>
          <p>
            <span>
              Si el <strong>objetivo</strong> es que los alumnos aprendan a{" "}
              <strong> cuidar y amar la naturaleza</strong> es necesario que se
              promuevan experiencias que amplíen y enriquezcan su visión del
              medio, mediante planteamientos elaborados por ellos mismos y
              partiendo de <strong>situaciones que susciten su interés.</strong>
            </span>
          </p>
          <p>
            <span>
              La idea es que a partir de sus propios cuestionamientos
              desarrollen una <strong>conciencia</strong> que les lleve a asumir
              responsabilidades por propia convicción personal, sabiendo que es
              necesario para su bienestar individual y para el colectivo.
            </span>
          </p>
          <p>
            <span>
              Algunas de las experiencias que podemos proporcionarles para su
              desarrollo cognitivo, afectivo y actitudinal van en la línea de:
            </span>
          </p>
          <div className={cuidadoAprenden.altura_div}>
            <h4 className={cuidadoAprenden.h4} onClick={visualizarConsumo}>
              Partir de situaciones cotidianas de la realidad:
            </h4>
            {verConsumo === "consumo" ? (
              <div className={cuidadoAprenden.ul_fomentar}>
                <ul>
                  <li>
                    <span>Consumo del agua, reciclaje, cambio climático…</span>
                  </li>
                </ul>
                <p className={cuidadoAprenden.a_partir}>
                  A partir de las diferentes situaciones les incitaremos a
                  observar como son tratados estos temas en casa o en la
                  escuela, es decir en los entornos más cercanos. Una vez
                  establecido el tema a tratar partiremos de cuestionamientos
                  para promover el pensamiento crítico y la conciencia sobre su
                  papel en el cambio y orientarlos a la acción. Algunas
                  cuestiones a modo de ejemplo podrían ser:
                </p>
                <ul>
                  <li>
                    <span>¿Qué puedo hacer yo al respecto?</span>
                  </li>
                  <li>
                    <span>
                      ¿Podrían colaborar más personas? Tal vez puedo pedirle a
                      mis amigos que animen a más niños a reciclar o puedo
                      pedírselo a mi profesora. Quizá en mi familia aun no saben
                      mucho sobre la importancia de reciclar y pueden ayudarme y
                      colaborar para reciclar en casa.
                    </span>
                  </li>
                  <li>
                    <span>
                      ¿Esto entraña una dificultad? Podemos contactar con otros
                      colegios, escribir una carta al ayuntamiento o alzar la
                      voz en redes sociales de manera conjunta desde el twitter
                      del colegio.
                    </span>
                  </li>
                </ul>
              </div>
            ) : null}

            <h4 className={cuidadoAprenden.h4_2} onClick={visualizarVisitar}>
              Fomentar las experiencias de contacto directo con la naturaleza:
            </h4>
            {verVisitar === "visitar" ? (
              <div className={cuidadoAprenden.ul_fomentar}>
                <ul>
                  <li>
                    <span>
                      Visitar semanalmente o mensualmente granjas escuelas donde
                      desarrollen actividades como elaborar su propio pan o
                      cuidar de los animales, las plantas y los espacios.
                    </span>
                  </li>
                  <li>
                    <span>
                      Visitar santuarios de animales donde aprendan a
                      desarrollar el amor y la protección por animales que han
                      sido rescatados ya sea de la calle o de las industrias que
                      los usan para su explotación.
                    </span>
                  </li>
                  <li>
                    <span>
                      Salir al campo o a la playa en labores de limpieza para
                      que conozcan la realidad de la contaminación y su alcance.
                    </span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </article>

        <Accordion>
          <Accordion.Item
            eventKey="0"
            className={cuidadoAprenden.acordeonItem0}
          >
            <Accordion.Header>
              <p className={cuidadoAprenden.acordeon_h5}>
                Actividad desplegable
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <article className="">
                <div className="">
                  <section id="" className="">
                    <p>Lea y complete</p>
                  </section>

                  <section className="" id="">
                    <form name="" action="#" className="">
                      <div className={cuidadoAprenden.select}>
                        <p onChange={select}>
                          Partiendo de situaciones
                          <select
                            id="select1"
                            className={
                              concretas && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !concretas && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          se debe incitar a
                          <select
                            id="select2"
                            className={
                              observar && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !observar && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          como se tratan los diferentes temas de
                          <select
                            id="select3"
                            className={
                              problematica && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !problematica && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          en
                          <select
                            id="select4"
                            className={
                              contexto_proximo && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !contexto_proximo && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          al alumno la
                          <select
                            id="select5"
                            className={
                              escuela && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !escuela && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          , o el
                          <select
                            id="select6"
                            className={
                              hogar && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !hogar && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          Una vez establecido el tema a tratar partiremos de
                          <select
                            id="select7"
                            className={
                              cuestionamientos && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !cuestionamientos && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          que promuevan
                          <select
                            id="select8"
                            className={
                              pensamiento_critico && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !pensamiento_critico && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          y
                          <select
                            id="select9"
                            className={
                              la_conciencia && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !la_conciencia && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          sobre su
                          <select
                            id="select10"
                            className={
                              propio_papel && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !propio_papel && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          como
                          <select
                            id="select11"
                            className={
                              individuo && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !individuo && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          en el cambio y
                          <select
                            id="select12"
                            className={
                              orientarlos && comprobacion
                                ? cuidadoAprenden.selectOk
                                : !orientarlos && comprobacion
                                ? cuidadoAprenden.selectKo
                                : null
                            }
                          >
                            <CuidadoAprenden />
                          </select>
                          a la acción.
                        </p>
                        <p>
                          <input
                            type="button"
                            className={cuidadoAprenden.botonComprobar}
                            onClick={comprobar}
                            value="Comprobar"
                          />
                          <input
                            type="button"
                            className={cuidadoAprenden.botonMostrar}
                            onClick={MostrarTexto}
                            value="Mostrar texto"
                          />
                        </p>
                      </div>
                      {comprobacion ? (
                        <div>
                          <p className={cuidadoAprenden.explicacion}>
                            <div className={cuidadoAprenden.verde}></div>
                            Respuesta válida
                          </p>
                          <p className={cuidadoAprenden.explicacion}>
                            <div className={cuidadoAprenden.rojo}></div>
                            Respuesta fallida
                          </p>
                        </div>
                      ) : null}
                    </form>
                  </section>
                  <section id="" className="">
                    {mostrar ? (
                      <div>
                        <p className={cuidadoAprenden.respuestas}>
                          Partiendo de situaciones <u>concretas</u> se debe
                          incitar a <u>observar</u> como se tratan los
                          diferentes temas de <u>problemática ambiental</u>
                           en <u>el contexto próximo</u> al alumno la{" "}
                          <u>escuela</u>, o el <u>hogar.</u>
                          Una vez establecido el tema a tratar partiremos de{" "}
                          <u>cuestionamientos</u> que promuevan{" "}
                          <u>el pensamiento crítico</u> y <u>la conciencia</u>{" "}
                          sobre su <u>propio papel </u>
                          como
                          <u>individuo</u>  en el cambio y <u>orientarlos</u> a
                          la acción.
                        </p>
                      </div>
                    ) : null}
                  </section>
                </div>
              </article>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="1"
            className={cuidadoAprenden.acordeonItem1}
          >
            <Accordion.Header>
              <p className={cuidadoAprenden.acordeon_h5}>Recursos Multimedia</p>
            </Accordion.Header>

            <Accordion.Body>
              <article className="" id="">
                <div className={cuidadoAprenden.ninos}>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/Gpc1s9qSeVM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </p>
                </div>
              </article>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="2"
            className={cuidadoAprenden.acordeonItem2}
          >
            <Accordion.Header>
              <p className={cuidadoAprenden.acordeon_h5}>Para Saber Más</p>
            </Accordion.Header>

            <Accordion.Body>
              <article
                className="iDevice_wrapper textIdevice em_iDevice"
                id="id227"
              >
                <div className="iDevice emphasis1">
                  <h5>
                    <a
                      onClick={LosNinos}
                      href="https://www.minam.gob.pe/proyecolegios/Curso/curso-virtual/Modulos/modulo2/2Primaria/m2_primaria/cmo_aprende_el_nio_de_primaria_a_amar_la_naturaleza_y_el_ambiente.html"
                    >
                      ¿Cómo aprende el niño de primaria a amar la naturaleza y
                      el ambiente?
                    </a>
                  </h5>
                </div>
              </article>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
};

export default CompAlumCuidaMedAmb;
