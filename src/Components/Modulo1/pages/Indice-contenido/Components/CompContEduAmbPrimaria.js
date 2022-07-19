import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import tiposContenido from "../../../assets/img/tiposdecontenidos1.jpg";
import eduprimaria from "./eduprimaria.module.css";
import Accordion from "react-bootstrap/Accordion";
import Actividad from "./componentes/component-educa-ambient-primaria/Actividad";

const CompContEduAmbPrimaria = () => {
  const recursos = () => {
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');return false;";
  };
  const contenidos = () => {
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');return false;" 
  }
  
  return (
    <div className={mod1.presentacion}>
      <section>
        <h2> 6. Tipos de contenido de Educación Ambiental para primaria </h2>
        <article className={eduprimaria.article}>
          <p className={eduprimaria.img}>
            <img
              src={tiposContenido}
              alt="Ilustración profesor"
              title="Propuesto y tipos de contenidos"
              width="280"
              height="200"
            />
          </p>
          <p>
            <span>
              La Educación Ambiental ofrece una amplia
              <strong> riqueza </strong>de posibilidades a la hora de ser
              tratada ya que, al ser un contenido transversal, engloba la gran
              mayoría de las áreas de la vida.Esta característica que la hace
              tan completa puede incluir diversos contenidos que pueden
              abordarse desde prácticamente todas las áreas
              curriculares(Conocimiento del Medio, Educación Artística,
              Educación Física, Lengua y Literatura, Lenguas Extranjeras y
              Matemáticas).El apartado contenidos conceptuales.
            </span>
          </p>
          <p>
            <span>
              A modo de guía los contenidos tanto procedimentales como
              actitudinales ofrecidos por el Centro Nacional de Educación
              Ambiental(CENEAM) que pueden ser integrados en las diferentes
              aéreas pueden ser:
            </span>
          </p>
          <Accordion className={eduprimaria.acordeon}>
            <Accordion.Item eventKey="0" className={eduprimaria.acordeon_item}>
              <Accordion.Header className={eduprimaria.acordeon_header}>
                Contenidos Procedimentales:
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <p>
                    <span>
                      Corresponden a los datos y a la información y para que se
                      conviertan en conceptos deben aprenderse de forma
                      significativa.es por ello recomendable que se aprendan por
                      descubrimiento.Son la base del aprendizaje de los
                      contenidos procedimentales y actitudinales.
                    </span>
                  </p>
                  <ul>
                    <li>
                      <span>
                        Recoger, explorar y tratar la información en los
                        diferentes entornos
                      </span>
                    </li>
                    <li>
                      <span> Traducir e interpretar mensajes </span>
                    </li>
                    <li>
                      <span> Adaptarse a una situación </span>
                    </li>
                    <li>
                      <span> Transformar, crear o inventar </span>
                    </li>
                    <li>
                      <span> Juzgar y evaluar </span>
                    </li>
                    <li>
                      <span> Elegir y decidir en diferentes situaciones </span>
                    </li>
                    <li>
                      <span> Abstraer o generalizar informaciones </span>
                    </li>
                    <li>
                      <span> Comunicar experiencias o resultados, etc. </span>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className={eduprimaria.acordeon_item}>
              <Accordion.Header className={eduprimaria.acordeon_header}>
                Contenidos Actitudinales
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  <span>
                    Corresponden a modos de ser y comportarse, a los valores.
                  </span>
                </p>
                <ul>
                  <li>
                    <span>
                      
                      Sensibilización, respeto / rechazo, aceptación
                    </span>
                  </li>
                  <li>
                    <span> Interés, curiosidad, gusto, deseo </span>
                  </li>
                  <li>
                    <span> Responsabilidad </span>
                  </li>
                  <li>
                    <span> Solidaridad, comprensión </span>
                  </li>
                  <li>
                    <span> Actitud crítica </span>
                  </li>
                </ul>
                <p>
                  <span> </span>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p>
            <span>
              No obstante y de modo particular os presentamos también una serie
              de contenidos conceptuales que pueden ser tratados de igual forma
              tanto desde las áreas curriculares correspondientes como en la
              integración total de un programa ambiental por parte del centro.
            </span>
          </p>
          <Accordion className={eduprimaria.acordeon}>
            <Accordion.Item eventKey="0" className={eduprimaria.acordeon_item}>
              <Accordion.Header className={eduprimaria.acordeon_header}>
                Contenidos conceptuales
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <span>
                    <strong>
                      Contenidos relativos a hechos, conceptos y sistemas
                      conceptuales:
                    </strong>
                    La sostenibilidad.
                  </span>
                </p>
                <ul>
                  <li>
                    <span> El reciclaje </span>
                  </li>
                  <li>
                    <span> El consumo responsable </span>
                  </li>
                  <li>
                    <span> La cohesión Social </span>
                  </li>
                  <li>
                    <span> Huella ecológica </span>
                  </li>
                  <li>
                    <span> El cambio climático </span>
                  </li>
                  <li>
                    <span> El agua </span>
                  </li>
                  <li>
                    <span> La desertificación </span>
                  </li>
                  <li>
                    <span> El decrecimiento </span>
                  </li>
                  <li>
                    <span> La interdependencia de los sistemas </span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>
        <Actividad />
        <article>
          <div>
            <h3> Para Saber Más </h3>
            <div>
              <div>
                <div>
                  <p>
                    <a
                      href="http://ecomedioambiente.com/educacion-ambiental/               contenidos-de-la-educacion-ambiental/"
                      onClick={contenidos}
                    >
                      Contenidos de la Educación Ambiental
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.educaweb.com/noticia/2020/01/23/6-recursos-poner-practica-educacion-ambiental-19054/"
                      onClick={recursos}
                    >
                      6 recursos para poner en práctica en la Educación
                      Ambiental
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
       
      </section>
    </div>
  );
};

export default CompContEduAmbPrimaria;
