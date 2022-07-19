import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import IdeaDesarrollo from "./componentes/component-cambio-clima/IdeaDesarrollo";
import FormVideoInteractivo1 from "./componentes/component-cambio-clima/FormVideoInteractivo1";
import FormVideoInteractivo2 from "./componentes/component-cambio-clima/FormVideoInteractivo2";
import ActDesplegable from "./componentes/component-cambio-clima/ActDesplegable";
import ideaDesa from "./ideaDesa.module.css";
import cambioClimatico from "../../../assets/img/cambioclimatico.jpg";
import YouTube from "react-youtube";
import Accordion from "react-bootstrap/Accordion";

const CompCambioClimaAbordaje = () => {
  const [verVideo, setVerVideo] = useState(false);
  const [oculto1, setOculto1] = useState(true);
  const [oculto2, setOculto2] = useState(true);
  const [conmutarOculto, setConmutarOculto] = useState(false);

  const video = () => {
    setVerVideo(true);
  };

  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      //src:"https://www.youtube.com/embed/kcr-Ryq6Nrk",
      autoplay: 1
    },
  };

  const onReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.playVideo();
    setVerVideo(true);
    e.target.pauseVideo();
    //setContinuo(true);
  };

  const onPlay = e => {
    e.target.playVideo();
    setVerVideo(true);
  }

  const onStateChange = (e) => {
    if (e.data === 1) {
      setInterval(() => {
        let tiempo = Math.round(e.target.getCurrentTime());
        if (tiempo === 130) {
          e.target.pauseVideo();
          setOculto1(false);
          setOculto2(true);
          setConmutarOculto(true);
        }
        if (tiempo === 146) {
          e.target.pauseVideo();
          setOculto1(true);
          setOculto2(false);
          setConmutarOculto(false);
        }
      }, 1000);
    }
  };

  const [acierto1, setAcierto1] = useState("-");
  const [acierto2, setAcierto2] = useState("-");
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  //const [continuo, setContinuo] = useState(false);

  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>6.3 Cambio Climático como propuesta de abordaje</h2>

        <article className={ideaDesa.articleCambio}>
          <div>
            <p className={ideaDesa.img}>
              <img
                src={cambioClimatico}
                alt="Ilustración hoja divida en dos partes, una parte seca con fondo desertificado y otra parte verde con un fondo de un paisaje sano y verde"
                title="Cambio Climático"
                width="280"
                height="200"
              />
            </p>
            <p>
              <span>
                Es importante promover el conocimiento sobre el carácter
                sistémico del cambio climático y concienciar sobre ello. Es
                decir, el cambio climático no es un problema que afecte a otros
                países o que este en manos de los políticos o de las personas
                con poder. El cambio climático nos afecta a todos y todos
                tenemos en nuestras manos la posibilidad y la responsabilidad de
                contribuir en su mitigación medida de nuestras posibilidades
                mediante nuestro estilo de vida. Por eso es ideal abordar el
                cambio climático planteando a los alumnos las relaciones entre
                cambio climático y estilo de vida desde dos perspectivas que se
                retroalimentan:
              </span>
            </p>
            <p>
              <span>
                <strong>
                  ¿Cómo influye nuestro modelo de estilo de vida en el
                  calentamiento global?
                </strong>
              </span>
            </p>
            <p>
              <span>
                <strong>
                  ¿Cómo el cambio climático puede obligarnos a cambiar nuestro
                  estilo de vida?
                </strong>
              </span>
            </p>

            <IdeaDesarrollo />
          </div>
        </article>
        <article className={ideaDesa.articleVideo}>
          <h3 className={ideaDesa.video}>Vídeo interactivo</h3>
          {!verVideo ? (
            <div className={ideaDesa.contenedor_video}>
              <div>
                <h4>El cambio climático para niños</h4>
                <p>
                  Con este video interactivo vamos a ver como integrar los
                  conceptos más generales sobre el cambio climático para
                  adaptarlo al nivel de aprendizaje de nuestros alumnos en
                  primaria.
                </p>
                <p className={ideaDesa.input}>
                  <input
                    onClick={video}
                    className="btn btn-primary"
                    type="button"
                    value="Inicio"
                    
                  />
                </p>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-6">
                <div className={ideaDesa.soloVideo && ideaDesa.VideoPregunta}>
                  <YouTube
                    videoId="kcr-Ryq6Nrk"
                    opts={opts}
                    onReady={onReady}
                    onStateChange={onStateChange}
                    onPlay={onPlay}
                  />
                </div>
              </div>
              <div className="col-6">
                {conmutarOculto ? (
                  <FormVideoInteractivo1
                    oculto1={oculto1}
                    acierto1={acierto1}
                    setAcierto1={setAcierto1}
                    total1={total1}
                    setTotal1={setTotal1}
                  />
                ) : (
                  <FormVideoInteractivo2
                    oculto2={oculto2}
                    acierto2={acierto2}
                    setAcierto2={setAcierto2}
                    total2={total2}
                    setTotal2={setTotal2}
                  />
                )}
              </div>
            </div>
          )}
          <div className={ideaDesa.resultado}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={ideaDesa.resultadoHeader}>
                  Resultados
                </Accordion.Header>
                <Accordion.Body>
                  <div className={`row ${ideaDesa.border}`}>
                    <div className="col-6">
                      <p className={ideaDesa.diapositiva}>
                        Diapositiva (fotograma)
                      </p>
                    </div>
                    <div className="col-6">
                      <p className={ideaDesa.puntuacion}>Puntuación</p>
                    </div>
                  </div>

                  <p className={ideaDesa.portada}>Portada</p>

                  <div className="row">
                    <div className="col-1">
                      <p>1</p>
                    </div>
                    <div className="col-8">
                      <p className={ideaDesa.tiempo}>00:02:09</p>
                    </div>
                    <div className="col-3">
                      {acierto1 === "100%" ? (
                        <p className={ideaDesa.porcentajeResultado}>
                          {acierto1}
                        </p>
                      ) : (
                        <p className={ideaDesa.porcentajeResultado}>
                          {acierto1}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <p>2</p>
                    </div>
                    <div className="col-8">
                      <p className={ideaDesa.tiempo}>00:02:25</p>
                    </div>
                    <div className="col-3">
                      {acierto2 === "100%" ? (
                        <p className={ideaDesa.porcentajeResultado}>
                          {acierto2}
                        </p>
                      ) : (
                        <p className={ideaDesa.porcentajeResultado}>
                          {acierto2}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-9">
                      <p>
                        Total (debe ver todo el contenido y contestar a las
                        preguntas)
                      </p>
                    </div>
                    <div className="col-3">
                      {!total1 && !total2 ? (
                        <p className={ideaDesa.porcentajeResultado}>-</p>
                      ) : total1 && total2 ? (
                        <p className={ideaDesa.porcentajeResultado}>
                          {total1 + total2}%
                        </p>
                      ) : (
                        <p className={ideaDesa.porcentajeResultado}>
                          {total1 + total2}%
                        </p>
                      )}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </article>
        <h3 className={ideaDesa.recursoMultimedia}>Recursos Multimedia</h3>
        <div>
          <p className={ideaDesa.img}>
            <iframe
              width="560"
              height="335"
              src="https://www.youtube.com/embed/Z4XwmIR3T8s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </p>
        </div>
        <article className={ideaDesa.article_actividad}>
          <ActDesplegable />
        </article>
      </section>
    </div>
  );
};

export default CompCambioClimaAbordaje;
