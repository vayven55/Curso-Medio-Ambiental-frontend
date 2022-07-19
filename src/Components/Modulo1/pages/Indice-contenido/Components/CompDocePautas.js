import React, { Fragment, useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import indice from "../../Indice-contenido/indiceCont.module.css";
import Accordion from "react-bootstrap/Accordion";
import abordaje from "../../../assets/img/abordaje_ods.jpeg";
import Acordeon from "../Components/componentes/Acordeon";
import acorde from "./acorde.module.css";

const CompDocePautas = () => {
  const [setOpen] = useState();

  const [setOpen2] = useState();

  const onclickOpen = () => {
    setOpen(
      "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=c,height=c,left=600,top=600');return false;"
    );
  };

  const onclickOpen2 = () => {
    setOpen2(
      "window.open(this.href,'Los objetivos de desarrollo sostenible entran en el currículo','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;"
    );
  };

  return (
    <Fragment>
      <div className={mod1.presentacion}>
        <h2>
          1.2 Pautas para iniciar un proyecto en el centro abordando los ODS
        </h2>

        <article>
          <div>
            <div>
              <div className={indice.img}>
                <img
                  className={indice.img}
                  src={abordaje}
                  alt="Unos dedos cogen con un objetivo de desarrollo sostenible como si fuese una pieza extraible del papel"
                />
              </div>

              <p>
                <span>
                  En 1987 en el Informe Brundtland quedo recogida la definición
                  de desarrollo sostenible: satisfacer “
                  <em>
                    Satisfacer las necesidades de las generaciones presentes sin
                    comprometer las posibilidades de las generaciones del futuro
                    para atender sus propias necesidades”
                  </em>
                </span>
              </p>
              <p>
                <span>
                  Educar y enseñar el desarrollo sostenible es una tarea
                  compleja que requiere de despertar la conciencia, de darse
                  cuenta, de estar atentos con actitud crítica y sobre todo de
                  trabajar orientando a la investigación acción.
                </span>
              </p>
              <p>
                <span>
                  Una buena manera de trabajar esta amplia y compleja temática
                  es consultar los ODS de la Agenda 2030 y elaborar en función
                  al objetivo que vaya a trabajarse un programa o proyecto con:
                </span>
              </p>
              <ul>
                <li>
                  <span>Objetivos generales y específicos</span>
                </li>
                <li>
                  <span>Metodología (podrían ser una o varias)</span>
                </li>
                <li>
                  <span>Propuestas didácticas</span>
                </li>
              </ul>
              <p>
                <span>
                  Dicho programa o proyecto debe tener una secuenciación en su
                  estructura:
                </span>
              </p>
            </div>
          </div>
        </article>
        <Acordeon />
        <article>
          <div>
            <h2>Recursos Multimedia</h2>
            <div>
              <div>
                <div>
                  <div className={acorde.iframe}>
                    <p align="center">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/undC_ofQN24"
                        title="YouTube video player"
                        frameBorder="0"
                        allowlist="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; /////picture-in-picture"
                        allowFullScreen="allowFullScreen"
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={acorde.h3}>
          <Accordion>
            <Accordion.Item
              eventKey="6"
              className={`${acorde.acordeonItem} ${acorde.acordeonSeparacion}`}
            >
              <Accordion.Header className={acorde.acordeonHeader}>
                <h3>Para Saber Más</h3>
              </Accordion.Header>
              <Accordion.Body>
                <div className={acorde.objetivos}>
                  <p>
                    <a
                      href="https://revistas.uam.es/riejs/article/view/riejs2019.8.1.006"
                      onClick={onclickOpen}
                    >
                      Inclusión de los Objetivos de Desarrollo Sostenible en el
                      Currículum de Educación Primaria y Secundaria en Escuelas
                      Rurales de Zaragoza
                    </a>
                  </p>
                  <div>
                    <span>
                      <a
                        href="https://www.laopiniondezamora.es/lapizarra/2019/12/19/objetivos-desarrollo-sostenible-entran-curriculo-1676668.html"
                        onClick={onclickOpen2}
                      >
                        Los objetivos sobre desarrollo sostenible entran en el
                        currículo
                      </a>
                    </span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>
      </div>
    </Fragment>
  );
};

export default CompDocePautas;
