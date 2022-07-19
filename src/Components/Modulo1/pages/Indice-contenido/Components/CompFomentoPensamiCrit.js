import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import fomento from "./fomentoPensamiento.module.css";
import pedagogia from "../../../assets/img/pedagogia-critica.jpg";
import Accordion from "react-bootstrap/Accordion";
import ActividadDespleg from "./componentes/Component-fomentoPensamiento/ActividadDespleg";
import VerdaderoFalso from "./componentes/Component-fomentoPensamiento/VerdaderoFalso";

const CompFomentoPensamiCrit = () => {
  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>5.2.1 Fomento del pensamiento crítico: Criterios</h2>

        <article className={fomento.article}>
          <div>
            <p className={fomento.img}>
              <img
                src={pedagogia}
                alt="Un figura humana con actitud de pensador  compuesta por piezas de puzzle analiza una pequeña pieza de puzzle que sostiene en la mano"
                title="Pedagogía de la crítica"
                width="280"
                height="200"
              />
            </p>
            <p>
              <span>
                Para fomentar  el pensamiento crítico hay que partir de las
                ideas previas de los alumnos que suelen estar sesgadas ya que
                han ido forjándose en las en las interacciones sociales y
                culturales a través de las cuales se han desarrollado a lo largo
                de su vida. Es necesario analizar las creencias erróneas y
                cuestionarles instándoles a repensar y a hacerse preguntas desde
                el respeto, la tolerancia y la participación activa para
                verificar la validez de las ideas establecidas.
              </span>
            </p>
            <p>
              <span>
                 Hay una serie de indicadores que evidencian que el alumno hace
                uso de un pensamiento reflexivo poniendo de manifiesto un
                pensamiento propio, Salazar y Gaviria (2018):
              </span>
            </p>
            <Accordion className={fomento.acordeon}>
              <Accordion.Item eventKey="0" className={fomento.acordeonItem}>
                <Accordion.Header className={fomento.acordeonHeader}>
                  <span>
                    1. Expresa cuestiones específicas en torno a problemáticas
                    surgidas de la experiencia en su entorno escolar
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <span>
                      Salir del aula y actuar como guía es  función del docente,
                      darles la oportunidad de observar el contexto con sus
                      problemas o sus posibilidades de mejora y dejando que a
                      partir de la curiosidad los niños se hagan preguntas.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={fomento.acordeonItem}>
                <Accordion.Header className={fomento.acordeonHeader}>
                  <span>
                    2. Realiza valoraciones críticas sobre temáticas ambientales
                    a partir de la información de medios de comunicación
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <span>
                      El docente debe situar al niño en el mundo global a través
                      de los medios enlazando la información con los contenidos.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={fomento.acordeonItem}>
                <Accordion.Header className={fomento.acordeonHeader}>
                  <span>
                    3. Aporta su propia perspectiva en la comprensión del
                    problema aportando posibles soluciones 
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <span>
                      A través del debate en grupo con una mirada fina y
                      sensible sensible para ver que hay detrás de una respuesta
                      que a priori podría ser considerada una idea loca, pues a
                      través de ellas se pueden sacar grandes conclusiones a
                      nivel individual y grupal.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className={fomento.acordeonItem}>
                <Accordion.Header className={fomento.acordeonHeader}>
                  <span>
                    4. Reconoce otros puntos de vista y se muestra flexible a la
                    autocorreción
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <span>
                      Mediante e debate entre iguales el aprendizaje
                      significativo se da en mayor medida. El docente como un
                      guía-moderador observa cómo construyen el aprendizaje a
                      través de las diferentes perspectivas y podrá valorar cuán
                      flexible son sus pensamientos.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className={fomento.acordeonItem}>
                <Accordion.Header className={fomento.acordeonHeader}>
                  <span>
                    5. Es sensible a los problemas globales y los extrapola a su
                    entorno próximo
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <span>
                      El alumno es capaz de ejemplificar problemas globales,
                      incluso abstractos y ejemplificarlos o llevarlos al
                      contexto e su experiencia, el docente puede instarlos
                      mediante cuestiones  como  ¿y qué pasaría si...?
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </article>
        <VerdaderoFalso />
        
        <ActividadDespleg />
        
        <article className={fomento.articleRecursosMulti}>
          <div>
            <h3>Recursos Multimedia</h3>

            <div>
              <p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wcu7nGB5GZs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowFullScreen"
                ></iframe>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompFomentoPensamiCrit;
