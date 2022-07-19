import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import epigrafe7 from "../../../assets/img/epigrafe7.JPG";
import orientar from "./orientar.module.css";
import OrientarSelecMenu from "./componentes/componente-orientar-alumno/OrientarSelecMenu";
import OrientarFormulario from "./componentes/componente-orientar-alumno/OrientarFormulario";
import Accordion from "react-bootstrap/Accordion";

const CompOrientarAlumn = () => {
  const [venimos, setVenimos] = useState(true);

  const venimosVamos = () => {
    setVenimos(true);
  };
  const losCambios = () => {
    setVenimos(false);
  };

  const [tarea, setTarea] = useState(false);
  const sugerencia = () => {
    setTarea(!tarea);
  };

  return (
    <section className={mod1.presentacion}>
      <h2>
        4.4 Prospectiva sostenible: orientar a nuestro alumnado
      </h2>

      <article className={orientar.article}>
        <p className={orientar.img}>
          <img
            src={epigrafe7}
            alt="Niño subido en una pila de libros mirando al horizonte a través de un catalejo"
          />
        </p>
        <div className={orientar.padding}>
          <p>
            <span>
              En la actualidad la conciencia social y ambiental  se haya  en el
              punto de mira del que emanan las principales líneas de actuación
              marcadas por las agendas de gran parte de los organismos
              internacionales. Sin embargo, en la realidad y la práctica se
              toman escasas medidas o las implementadas resultan insuficientes,
              lo cual se traduce en un fracaso para paliar las consecuencias 
              que sitúan al planeta en el punto crítico donde se encuentra.
            </span>
          </p>
          <p>
            <span>
              Como agentes sociales influyentes en la sociedad, los educadores
              también deben repensar y plantearse qué medidas son necesarias y
              cuáles superficiales y/o poco efectivas. El auge del capitalismo
              verde actual no frena el crecimiento y la extracción de los
              recursos finitos del planeta  es, según las perspectivas más
              críticas y realistas de la EA, un parche que no ataca de raíz el
              problema: el crecimiento económico.
            </span>
          </p>
          <p>
            <span>
              La insostenibilidad en nuestra forma de vivir a costa del planeta
              ha hecho que adquiramos una deuda ambiental con las generaciones
              futuras, las que están en nuestras aulas. En el mundo que dejamos
              la solución sostenible es decrecer y es por ello un deber y una
              responsabilidad enseñar a los alumnos aspectos  esenciales que los
              capaciten para una relación sana con el planeta:
            </span>
          </p>
        </div>
        <OrientarSelecMenu />

        <h5>
          <strong> Por tanto debe tenerse en cuenta:</strong>
        </h5>
        <div className={`container ${orientar.menu_p}`}>
          <div className={orientar.menu2}>
            <h4
              onClick={venimosVamos}
              className={venimos ? orientar.menu2ok : null}
            >
              ¿De dónde venimos y hacia dónde vamos?
            </h4>

            <h4
              onClick={losCambios}
              className={!venimos ? orientar.menu2ok : null}
            >
              Los cambios se aceleran cada vez más
            </h4>
          </div>

          <div className={orientar.p_venimos}>
            {venimos ? (
              <p>
                Es esencial tomar conciencia de la velocidad en la evolución de
                la sociedad y contextualizar a nuestro alumnado.
              </p>
            ) : (
              <p>
                Se va imponiendo un nuevo orden global  y económico. En
                consecuencia se presentan nuevos escenarios sociales para el
                alumnado que estudia y se forma en las aulas de primaria en la
                actualidad.
              </p>
            )}
          </div>
        </div>
        <p>
          Es necesario orientar a nuestro alumnado desde la escuela y dibujar el
          mapa por el que transitaran en la vida adulta teniendo en cuenta
          nuevos escenarios, nuevas profesiones, nuevas formas de relacionarnos
          con nosotros, con los otros y con el medio.
        </p>
      </article>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={orientar.item}>
          <Accordion.Header className={orientar.acordeon_header}>
            <h2 className={orientar.tarea}>
              <strong className={orientar.rellenar}>?</strong>Rellenar huecos
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <article className="">
              <div className="">
                <section id="" className="">
                  <p>
                    Lea el párrafo que aparece abajo y complete las palabras que
                    faltan.
                  </p>
                  <p>
                    Para enseñar a los alumnos acerca de a sostenibilidad y a
                    mantener una relación sana con el medio ambiente es
                    necesario enseñarles a:
                  </p>
                </section>
                <section className="" id=""></section>
              </div>
            </article>
            <OrientarFormulario />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0" className={orientar.item}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={orientar.acordeon_header}>
            <h2 className={orientar.tarea}>Tarea</h2>
          </Accordion.Header>
          <Accordion.Body>
            <article className="">
              <div className="">
                <dl className="">
                  <dt className="">
                    <span>Agrupamiento: En grupos de dos personas</span>
                  </dt>
                  <dd className=""> </dd>
                </dl>
                <div className="">
                  <p>
                    Basándoos en lo que hemos visto en este epígrafe, os
                    invitamos a que haciendo uso de vuestra creatividad
                    desarrolléis una actividad en la que vuestros alumnos puedan
                    desarrollar una visión prospectiva de sus vidas en la etapa
                    adulta. 
                  </p>
                  <p>
                    1. Debe contener: definición, objetivos, tiempo estimado y
                    recursos didácticos.
                  </p>
                  <p>
                    2. Debéis trabajar sobre  las competencias que se pretenden
                    adquirir en el alumnado y que han sido trabajadas en este
                    epígrafe.
                  </p>
                  <p>
                    3. Uno de los participantes debe compartir en el foro la
                    tarea especificando el nombre del compañero de actividad.
                  </p>
                </div>
                <div className="">
                  <input
                    type="text"
                    className={orientar.sugerencia}
                    value="Sugerencias"
                    onClick={sugerencia}
                  />
                </div>
                {tarea ? (
                  <div className="">
                    <p>
                      Esta actividad debe contener un enfoque hacia de  futuro
                      ¿Cómo se imaginan en sus vidas adultas?
                    </p>
                    <p>
                      Podéis enfocarla al terreno laboral, al familiar, a cómo
                      se ven actuando frente a determinadas situaciones de
                      injusticia o que requieran actuaciones colectivas e
                      individuales abordando aspectos éticos.
                    </p>
                    <p>!Poned e marcha vuestra creatividad!</p>
                  </div>
                ) : null}
              </div>
            </article>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={orientar.item}>
          <Accordion.Header className={orientar.acordeon_header}>
            <h2 className={orientar.tarea}>Recursos Multimedia</h2>
          </Accordion.Header>
          <Accordion.Body>
            <article className="">
              <div className="">
                <div className={orientar.iframe}>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/ilw8vxn7y3E"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </p>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/6xiPRr8Jymw"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </p>
                </div>
              </div>
            </article>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default CompOrientarAlumn;
