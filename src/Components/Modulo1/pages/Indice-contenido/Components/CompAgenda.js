import React from "react";
import epigrafe6 from "../../../assets/img/epigrafe6.jpg";
import mod1 from "../../../Css/Modulo1.module.css";
import agenda from "./agenda.module.css";
import AcordeonAgenda from './componentes/AcordeonAgenda';

function CompAgenda() {
  const click = () =>
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;";

  
  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>1. La Agenda 2030 como punto de partida</h2>

        <article>
          <div>
            <div>
              <p className={agenda.agenda_img}>
                <img
                  src={epigrafe6}
                  alt="Objetivos de desarrollo sostenible "
                  title="La agenda 2030"
                  width="320"
                  height="240"
                />
              </p>
              <p>
                <span>
                  La Agenda 2030 supone una nueva
                  <strong>oportunidad</strong> para comenzar a edificar sobre un
                  terreno que debe quedar libre tras la caída de viejas
                  estructuras que resultan completamente inviables para la vida
                  en el planeta.
                </span>
              </p>
              <p>
                <span>
                  Como apuntan Bautista-Cerro, Murga-Menoyo y Novo (2019) la
                  Agenda 2030 es un
                  <strong>instrumento</strong> aprobado por la Asamblea General
                  de Naciones Unidas que sirve como <strong>guía</strong> de
                  orientación para cumplir con el <strong>objetivo</strong> de
                  acabar con la pobreza y proteger el planeta. Está compuesta
                  por los <strong>17 objetivos</strong> de desarrollo sostenible
                  o ODS, los cuales están directamente
                  <strong> interrelacionados</strong> con{" "}
                  <strong>169 metas </strong>abordables en el periodo que abarca
                  2016 hasta 2030.
                </span>
              </p>
              <p>
                <span>
                  Es el punto cuatro de esta agenda el que apela directamente a
                  los profesionales de la educación cuando enuncia: “Garantizar
                  una educación inclusiva, equitativa, y de calidad y promover
                  oportunidades de aprendizaje durante toda la vida para todos”
                  (ONU, 2015, p. 16) Este objetivo está relacionado con la meta
                  número 7, la cual alude de forma directa a la EA “De aquí a
                  2030, asegurar que todos los estudiantes adquieran los
                  conocimientos teóricos y prácticos necesarios para promover el
                  desarrollo sostenible” (ONU, 2015, p. 20)
                </span>
              </p>
              <p>
                <span>
                  Desde las corrientes más críticas y realistas de la Educación
                  Ambiental se insta a cuestionar el modelo analizar de dónde
                  venimos y ralentizar el crecimiento abogando por el
                  <strong> decrecimiento </strong>
                  económico. Por ello desde los centros escolares comprometidos
                  con una visión más justa y equitativa para el planeta y con la
                  conciencia ambiental se debe comenzar a instaurar la cultura
                  del decrecimiento.
                </span>
              </p>
            </div>
          </div>
        </article>
        <article>
          <AcordeonAgenda />
          
            

            
        
          
        </article>
        <article className={agenda.article_multimedia}>
          <div>
            <h3>Recursos Multimedia</h3>

            <div>
              <div>
                <p className={agenda.agenda_iframe}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ZxlQEo7u1T0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowFullScreen"
                  ></iframe>{" "}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/XrvCoUmsBuk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowFullScreen"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h3>Para Saber Más</h3>

            <div>
              <div>
                <div>
                  <div>
                    <p>
                      <a className={agenda.recurso_multimedia}
                        href="https://www.un.org/sustainabledevelopment/es/education/"
                        onClick={click}
                      >
                        Objetivo 4: Garantizar una educación inclusiva,
                        equitativa y de calidad y promover oportunidades de
                        aprendizaje durante toda la vida para todos
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default CompAgenda;
