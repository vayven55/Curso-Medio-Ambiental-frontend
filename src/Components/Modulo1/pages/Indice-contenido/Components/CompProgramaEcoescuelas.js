import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import epigrafe9 from "../../../assets//img/epigrafe9.jpg";
import programa from "./programaEscue.module.css";

export const CompProgramaEcoescuelas = () => {

    const escuelasAndaluzas = () => {
        "window.open(this.href,'Dossier informativo Ecoescuelas andaluzas','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;" 
    }
  return (
    <div className={mod1.presentacion}>
      <section id="main">
        <h2>
          2.1 El Programa Ecoescuelas: un ejemplo de buenas prácticas
        </h2>

        <article className="">
          <div className="">
            <div id="">
              <p className={programa.epigrafe}>
                <span>
                  <img
                    src={epigrafe9}
                    alt="Logo Programa Ecoescuelas, libro y árbol con hojas"
                    title="El Programa Ecoescuelas: Un ejemplo de buenas prácticas"
                    width="280"
                    height="200"
                    
                  />
                </span>
              </p>
              <p>
                <span>
                  Desde las consejerías de educación y medio ambiente se pone en
                  marcha la <strong>Red Andaluza de Ecoescuelas</strong>, este 
                  <strong>programa educativo</strong> tiene en consideración dar
                  a conocer la promoción de prácticas educativas que implican al
                  alumnado y a la comunidad educativa en general en materia
                  medio ambiental.
                </span>
              </p>
              <p>
                <span>
                  La Fundación Europea de Educación Ambiental (FEE) es la
                  coordinadora de Ecoescuelas, un programa de ámbito
                  internacional que se desarrolla en España por medio de la
                  Asociación de Educación Ambiental y el Consumidor (ADEAC).
                </span>
              </p>
              <p>
                <span>
                  Dentro de este programa tienen cabida los 
                  <strong>centros</strong> educativos que trabajan en torno a un
                  <strong>proyecto global</strong> con el objetivo
                  de sensibilizar, formar y educar en los 
                  <strong>valores </strong>de desarrollo sostenible. Conformada
                  por la Red Andaluza de Ecoescuelas, estos centros
                  educativos efectúan un <strong>plan de mejora</strong> de sus
                  instalaciones y replantean su práctica educativa. La Red de
                  Ecoescuelas está compuesta por un total de 341 centros
                  educativos, 61 de ellos tienen “bandera verde” y se
                  identifican como modelo de calidad educativa por su coherencia
                  ambiental.
                </span>
              </p>
              <p>
                <span>
                  Su metodología implica a toda la
                  <strong> comunidad educativa</strong> escolar siendo
                  los estudiantes quienes tienen un papel más activo dentro del
                  proceso. Las escuelas deben cumplir con unos objetivos
                  ecológicos con la ayuda de los siete pasos:
                </span>
              </p>
              <ol className={programa.sietePasos}>
                <li>
                  <span>
                    Formar un comité ambiental.
                  </span>
                </li>
                <li>
                  <span>
                    Realizar una Ecoauditoría.
                  </span>
                </li>
                <li>
                  <span>
                    Plan de acción.
                  </span>
                </li>
                <li>
                  <span>
                    Integración curricular.
                  </span>
                </li>
                <li>
                  <span>
                    Evaluación.
                  </span>
                </li>
                <li>
                  <span>
                    Informar e implicar.
                  </span>
                </li>
                <li>
                  <span>
                    Código de conducta. 
                  </span>
                </li>
              </ol>
              <p>
                <span>
                  Dar conocer a los educadores programas como el proyecto
                  Ecoescuelas es de vital importancia ya que supone un ejemplo
                  real de buenas prácticas y un bien disponible al alcance de
                  los centros educativos. Participar en un programa con
                  unos objetivos y una
                  <strong>estructura</strong> metodológica coherente con el{" "}
                  <strong>medio</strong>
                  ambiente ofrece la <strong>oportunidad</strong> de educar
                  desde edades tempranas en valores como el compromiso, la
                  participación y la actitud proactiva con el medio en que viven
                  nuestros alumnos.
                </span>
              </p>
            </div>
          </div>
        </article>
        <article className={programa.article_tarea}>
          <div className="">
            <h2 className={programa.tareah2}>Tarea</h2>

            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <p>
                      Tras este acercamiento al Programa Ecoescuelas os
                      invitamos a que hagais una breve labor de investigación
                      sobre otros programas que se impartan a nivel estatal o
                      autonómico que conformen un ejemplo de buenas prácticas
                      educativas y sostenibles.
                    </p>
                    <p>
                      Compartid vuestra actividad con los compañeros en el foro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={programa.recurso_multimedia}>
          <div className="">
            <h2>Recursos Multimedia</h2>

            <div className="">
              <div className="">
                <div className="">
                  <div className={programa.iframe}>
                    <p>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/OmOLprsVXF0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowFullScreen"
                      ></iframe>{" "}
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3ip61p4OSU8"
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
        <article className="">
          <div className="">
            <div className=""></div>
          </div>
        </article>
        <article className={programa.para_saber_mas}>
          <div className="">
            <h2 className="">Para Saber Más</h2>

            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <p>
                      <a
                        href="https://www.juntadeandalucia.es/educacion/portals/delegate/content/dfae988f-5367-4e8f-bcf6-c7fcbadb10ac"
                        onClick={escuelasAndaluzas}
                      >
                        Dossier informativo Ecoescuelas Andaluzas
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
};

export default CompProgramaEcoescuelas;
