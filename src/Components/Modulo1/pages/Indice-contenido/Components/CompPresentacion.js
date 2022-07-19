import React, { Fragment } from 'react'
import mod1 from '../../../Css/Modulo1.module.css';
import dosManos from '../../../assets/img/Dosmanossosteniendounplanetaverdejpg.jpg';

function CompPresentacion() {
    return (
        <Fragment>
            <div className={mod1.presentacion}>
                  <section>
                    <h2>
                      Presentación
                    </h2>

                    <article className="">
                      <div className="">
                        <div className="">
                          <div className="">
                            <p className={mod1.dosManos_img}>
                              <span>
                                <img
                                  src={dosManos}
                                  alt="Unas manos sostienen un planeta verde en miniatura"
                                  title="Presentación módulo 1: Un cambio de perspectiva"
                                  width="280"
                                  height="200"
                                />
                              </span>
                            </p>
                            <p>
                              <span>
                                A lo largo de este módulo haremos un recorrido a
                                través de la escuela y su adaptación a un
                                programa de Educación ambiental coherente no
                                solo en la integración de contenidos en el
                                currículo también en la ambientalización
                                siguiendo un modelo coherente con el programa
                                educativo.
                              </span>
                            </p>
                            <p>
                              <span>
                                Veremos las características y objetivo de la
                                Educación Ambiental, así como las
                                características o perfil que debe tener un
                                docente orientado a implementarla, también
                                haremos un breve recorrido a través psicología
                                ambiental y ecológica y su relación con la
                                psicología educativa y de la instrucción.
                                También veremos los principales modelos
                                filosóficos referidos al medio ambiente. Haremos
                                hincapié en la ética y la concienciaron
                                ambientales en el fomento y desarrollo del
                                pensamiento crítico.
                              </span>
                            </p>
                            <p>
                              <span>
                                {" "}
                                En referencia a los contenidos se verán los
                                tipos y las estrategias y didáctica para
                                abordarlos. Para finalizar como propuesta se
                                desarrollan dos de los muchos temas de
                                problematice ambiental que pueden ser
                                desarrollados desde el centro que serán el
                                cambio climático y la economía circular.
                              </span>
                            </p>
                            <p> </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="">
                      <div className="">
                        <h2 className="">Competencias</h2>
                        <div className="">
                          <div className="">
                            <div className=""
                            >
                              <div className="">
                                <ul>
                                  <li>
                                    <span>
                                      Capacidad para influir en el equipo
                                      docente donde se integra.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para generar adaptaciones
                                      conducentes al cambio en el centro escolar
                                      para la mejora de la calidad educativa en
                                      materia ambiental.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para reconocer las
                                      características del modelo de profesional
                                      al cual se postula.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para aplicar los contenidos de
                                      Educación Ambiental en el ámbito
                                      educativo.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para guiar y orientar al
                                      alumnado respecto al contexto social y los
                                      escenarios sociales futuros.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para poner en práctica
                                      alternativas educativas ambientales en el
                                      aula y en el centro escolar.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para despertar conciencia
                                      ambiental y formar en valores y actitudes.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para incentivar y promover el
                                      pensamiento crítico.
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Capacidad para reconocer diferentes tipos
                                      de contenido en materia ambiental.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
        </Fragment>
    )
}

export default CompPresentacion
