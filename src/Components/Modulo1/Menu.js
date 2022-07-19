import React, { Fragment } from "react";
import mod1 from "../Modulo1/Css/Modulo1.module.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
      <div className={mod1.menu}>
        <nav>
          <ul className={mod1.ul_principal}>
            <li className={mod1.main_node}>
              <NavLink to="/modulo1_presentacion" className={mod1.main_node}>
                Presentación
              </NavLink>
            </li>
            <li className={mod1.padre_main_tarea}>
              <NavLink to="/modulo1_tarea" className={mod1.padre_main}>
                Tarea
                <span className={`material-icons md-24 ${mod1.padre_main}`}>
                  arrow_right
                </span>
              </NavLink>
              <ul>
                <li className={mod1.li_childrem_tarea}>
                  <NavLink
                    to="/modulo1_tarea/rubrica"
                    className={mod1.childrem}
                  >
                    Rúbrica de evaluación
                  </NavLink>
                </li>
              </ul>
            </li>
            <div id="activo">
              <li>
                <NavLink
                  to="/modulo1_indice-contenido"
                  className={mod1.padre_main}
                >
                  Índice de contenidos
                  <span className={`material-icons md-24 ${mod1.padre_main}`}>
                    arrow_right
                  </span>
                </NavLink>

                <ul className={mod1.activo}>
                  <li id="padre-1">
                    <NavLink
                      to="/modulo1_indice-contenido/1.-agenda_2030"
                      className={mod1.padre_1X}
                    >
                      1. La Agenda 2030 como punto de partida
                      <span className={`material-icons md-24 ${mod1.padre_1X}`}>arrow_right</span>
                    </NavLink>
                    <ul>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/1.-agenda_2030/1.2-pautas_para_iniciar_un_proyecto"
                          className={mod1.childrem}
                        >
                          1.2 Pautas para iniciar un proyecto en el centro
                          abordando los ODS
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li id="padre-2">
                    <NavLink
                      to="/modulo1_indice-contenido/2.-escuelas_eficaces"
                      className={mod1.padreX}
                    >
                      2.Escuelas eficaces
                      <span className={`material-icons md-24 ${mod1.padreX_flecha}`}>arrow_right</span>
                    </NavLink>
                    <ul>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/2.1-programa_ecoescuelas"
                          className={mod1.childrem}
                        >
                          2.1 El Programa Ecoescuelas: un ejemplo de buenas
                          prácticas
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li id="padre-3">
                    <NavLink
                      to="/modulo1_indice-contenido/3.-ambientalizacin_de_centros_educativos"
                      className={mod1.padreX}
                    >
                      3. Ambientalización de centros educativos
                      <span className={`material-icons md-24 ${mod1.padreX_flecha}`}>arrow_right</span>
                    </NavLink>
                    <ul>
                      <li className={mod1.li_childrem}>
                        <NavLink to="/modulo1_indice-contenido/3.1-niveles-implantacion-programa-ambiental"
                         className={mod1.childrem}
                        >
                          3.1 Niveles a tener en cuenta para la implantación de
                          un programa ambiental en el centro
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/3.2_el_cuidado_del_medio_ambiente"
                          className={mod1.childrem}
                        >
                          3.2 El cuidado del medio ambiente como dimensión de la
                          calidad educativa
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li id="padre-4">
                    <NavLink
                      to="/modulo1_indice-contenido/4.-educacion_ambiental"
                      className={mod1.padreX}
                    >
                      4. La Educación Ambiental: carácter y objetivos
                      <span className={`material-icons md-24 ${mod1.padreX_flecha}`}>arrow_right</span>
                    </NavLink>
                    <ul>
                      <li className={mod1.li_childrem}>
                        <NavLink to="/modulo1_indice-contenido/4.1-la_psicologa_en_el_contexto_escolar_y_ambiental"
                         className={mod1.childrem}
                        >
                          4.1 La psicología en el contexto escolar y la
                          psicología de la Educación Ambiental
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/4.2-el_docente_orientado_a_la_educacion_ambiental"
                          className={mod1.childrem}
                        >
                          4.2 El docente orientado a la Educación Ambiental:
                          consideraciones metodológicas
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/4.3-alumnos_el_cuidado_del_medio_ambiente"
                          className={mod1.childrem}
                        >
                          4.3 Cómo aprenden los alumnos el cuidado del medio
                          ambiente
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/4.4-orientar_a_nuestro_alumnado"
                          className={mod1.childrem}
                        >
                          4.4 Prospectiva sostenible: orientar a nuestro
                          alumnado
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/4.5-desde_lo_local_a_lo_global"
                          className={mod1.childrem}
                        >
                          4.5 Desde lo glocal a lo global
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li id="padre-5">
                    <NavLink
                      to="/modulo1_indice-contenido/5.-modelos_filosoficos_biocentrismo_y_ecocentrismo_vs_antropocentrismo"
                      className={mod1.padreX}
                    >
                      5. Modelos filosóficos: Biocentrismo y Ecocentrismo VS
                      Antropocentrismo
                      <span className={`material-icons md-24 ${mod1.padreX_flecha}`}>arrow_right</span>
                    </NavLink>
                    <ul>
                      <li className={mod1.li_childrem}>
                        <NavLink
                          to="/modulo1_indice-contenido/5.1_concienciacion_y_tica_ambiental"
                          className={mod1.childrem}
                        >
                          5.1 Concienciación y ética ambiental
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink to="/modulo1_indice-contenido/5.2-despertar_del_pensamiento_crtico"
                        className={mod1.childrem}
                        >
                          5.2 Despertar del pensamiento crítico
                          <span className={`material-icons md-24 ${mod1.padreX_flecha}`}>
                            arrow_right
                          </span>
                        </NavLink>
                        <ul>
                          <li className={mod1.li_childrem}>
                            <NavLink to="/modulo1_indice-contenido/5.2.1-fomento_del_pensamiento_critico"
                             className={mod1.childrem}
                            >
                              5.2.1 Fomento del pensamiento crítico: Criterios
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li id="padre-6">
                    <NavLink
                      to="/modulo1_indice-contenido/6.-tipos-contenido-educacin_ambiental_para_primaria"
                      className={mod1.padreX}
                    >
                      6. Tipos de contenido de Educación Ambiental para primaria
                      <span className={`material-icons md-24 ${mod1.padreX_flecha}`}>arrow_right</span>
                    </NavLink>
                    <ul>
                      <li className={mod1.li_childrem}>
                        <NavLink to="/modulo1_indice-contenido/6.1-estrategia_y_didctica-educacion_ambiental-currculo"
                         className={mod1.childrem}
                        >
                          6.1 Estrategia y didáctica para la Educación Ambiental
                          en el currículo
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink to="/modulo1_indice-contenido/6.2-cambio-climatico_propuesta_de_abordaje"
                         className={mod1.childrem}
                        >
                          6.2 Cambio Climático como propuesta de abordaje
                        </NavLink>
                      </li>
                      <li className={mod1.li_childrem}>
                        <NavLink to="/modulo1_indice-contenido/6.3-economia-circular_propuesta_de_abordaje"
                         className={mod1.childrem}
                        >
                          6.3 Economía Circular como propuesta de abordaje
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Menu;
