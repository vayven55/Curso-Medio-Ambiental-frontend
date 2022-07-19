import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import epigrafe55 from "../../../assets/img/epigrafe55.JPG";
import conciencia from "./conciencia.module.css";
//import { IoStarSharp } from "react-icons/io5";
//import Accordion from "react-bootstrap/Accordion";

const CompConcienciaAmbiental = () => {
  const futuroSostenible = () => {
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');";
  };
  const naturaliza = () => {
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');";
  };

  const [select, setSelect] = useState({
    uno: "seleuno",
    dos: "",
  });
  const { uno, dos } = select;

  const [verdad, setVerdad] = useState({
    iz: true,
    uno1: true,
    dos2: false,
    dere: false,
  });
  const Verdad = {
    iz: false,
    uno1: false,
    dos2: false,
    dere: false,
  };
  const { iz, uno1, dos2, dere } = verdad;

  const carrusel = (e) => {
    if (e.target.id === "uno") {
      setSelect({ ...select, uno: "seleuno", dos: "" });
      setVerdad({ ...Verdad, uno1: true, iz: true });
    }
    if (e.target.id === "dos") {
      setSelect({ dos: "seledos", uno: "" });
      setVerdad({ ...Verdad, dos2: true, dere: true });
    }
    if (e.target.id === "izquierda") {
      if (dos === "seledos") {
        setSelect({ uno: "seleuno", dos: "" });
        setVerdad({ ...Verdad, uno1: true, iz: true });
      } else {
        return;
      }
    }
    if (e.target.id === "derecha") {
      if (uno === "seleuno") {
        setSelect({ dos: "seledos", uno: "" });
        setVerdad({ ...Verdad, dos2: true, dere: true });
      } else {
        return;
      }
    }
  };

  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>5.1 Concienciación y ética ambiental</h2>
        <article>
          <div>
            <div>
              <p className={conciencia.img}>
                <span>
                  <img
                    src={epigrafe55}
                    alt="Una chica sostiene una pancarta en una manifestación por el medio ambiente"
                    title="Concienciación y ética ambiental"
                    width="280"
                    height="200"
                  />
                  <br />
                </span>
              </p>
              <p>
                <span>
                  La forma en la que nos relacionamos con el medio ambiente que
                  cohabitamos ha generado una <strong>crisis ambiental</strong>,
                  a su vez, esta crisis viene generada por una{" "}
                  <strong>crisis de valores</strong> donde prima la falta de
                  conciencia sobre nuestras propias conductas y las del sistema
                  y que han situado al ser humano como causante de la{" "}
                  <strong>degradación</strong>
                  devastadora del <strong>planeta</strong>.
                </span>
              </p>
              <p>
                <span>
                  La
                  <strong>conciencia</strong> conforma la formación integral de
                  la persona y forma parte de su educación en todos los niveles
                  (Gomera, 2008) Es también la capacidad de desdoblarse y actuar
                  como observador de uno mismo. Se podría decir que  las
                  personas con conciencia ambiental son las que demuestran
                  capacidad para conocerse, percibirse en y con el mundo que las
                  rodea y que son capaces de desarrollar conductas y actitudes
                  que les permitan un
                  <strong>equilibrio</strong> con su{" "}
                  <strong>medio ambiente</strong> teniendo en cuenta su
                  <strong>cuidado</strong>.
                </span>
              </p>
              <p>
                <span>
                  La educación ambiental requiere de una <strong>ética</strong>{" "}
                  que se basa como bien apunta Martínez (2010) en la
                  responsabilidad ante la vida, nuestra historia y ante nosotros
                  mismos y esta ética está basada en la{" "}
                  <strong>solidaridad</strong> pues concibe el planeta Tierra
                  como un espacio cohabitado donde se debe{" "}
                  <strong>compartir</strong> y gestionar los recursos de manera
                  sustentable y sostenible.
                </span>
              </p>
              <p>
                <span>
                  Para que esta formación sea permeable en nuestro alumnado,
                  primero debemos pasar por un proceso de
                  <strong>interiorización</strong> y de concienciación que nos
                  permita volver a conectar con el significado de cuidar nuestro
                  medio ambiente, observando alcance potencial y
                  multiplicador de implementar la EA para más tarde pasar a
                  conocer los procesos propios de su diseño pedagógico.
                </span>
              </p>
              <div className={conciencia.carrusel} onClick={carrusel}>
                <div>
                  <p
                    className={
                      !iz ? conciencia.iconIzActivo : conciencia.iconIz
                    }
                    id="izquierda"
                  >
                    &laquo;
                  </p>
                </div>

                <div>
                  <p
                    id="uno"
                    className={!uno1 ? conciencia.p1 : conciencia.p1Activo}
                  >
                    1
                  </p>
                </div>

                <div>
                  <p
                    id="dos"
                    className={!dos2 ? conciencia.p2 : conciencia.p2Activo}
                  >
                    2
                  </p>
                </div>

                <div>
                  <p
                    id="derecha"
                    className={
                      !dere ? conciencia.iconDerActivo : conciencia.iconDer
                    }
                  >
                    &raquo;
                  </p>
                </div>
              </div>

              <div className={conciencia.divCarrusel}>
                {uno === "seleuno" ? (
                  <>
                    <h3>
                      <span>
                        La Educación Ambiental puede ser entendida como un{" "}
                        <strong>aprendizaje servicio</strong> donde se dan
                        diferentes aspectos éticos como son: Martínez (2010)
                      </span>
                    </h3>
                    <ul className={conciencia.listado}>
                      <li>
                        <span>
                          Interés de las personas afectadas por los problemas
                          socio-ambientales.
                        </span>
                      </li>
                      <li>
                        <span>
                          Interés de la sociedad, amenazada en su calidad de
                          vida y degradación futura.
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Reconocimiento del derecho a la vida y a la calidad de
                          vida de la población.
                        </span>
                      </li>
                      <li>
                        <span>
                          Reconocimiento del derecho a la vida de otras especies
                          amenazadas por el ser humano.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : null}

                {dos === "seledos" ? (
                  <>
                    <h3>
                      <span>
                        Dentro de la conciencia ambiental podemos hablar de
                        cuatro <strong>dimensiones</strong>: Gomera (2008)
                      </span>
                    </h3>
                    <ol>
                      <li>
                        <span>
                          <strong>Cognitiva</strong>: referente a las ideas.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>Afectiva</strong>: referente a las emociones.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>Conativa</strong>: referente a las actitudes.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>Activa</strong>: referente a las conductas.
                        </span>
                      </li>
                    </ol>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </article>
        {/*<article>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className={conciencia.acordeonHeader}>
                <h2 className={conciencia.h2estrella}>
                  <IoStarSharp className={conciencia.estrella} /> Autoevaluación
                </h2>
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <section className="">
                    <p>
                      1. Tras haber incorporado los conocimientos referentes al
                      epígrafe sobre  conciencia y ética ambiental, te invitamos
                      a que desarrolles una actividad que trabaje sobre las
                      cuatro dimensiones de la conciencia justificando
                      debidamente de qué manera se trabaja con cada una de ellas
                    </p>
                  </section>
                  <section className="">
                    <form name="" action="#" className="">
                      <div>
                        <div className="">
                          <p>
                            <input
                              className=""
                              type="submit"
                              name=""
                              value="Enviar"
                              id=""
                            />

                            <input
                              type="button"
                              name=""
                              value="Reiniciar"
                              id=""
                            />

                            <input
                              type="button"
                              name=""
                              value="Mostrar las respuestas"
                              id=""
                            />
                          </p>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>*/}
        <article className={conciencia.recurMultimedia}>
          <div>
            <h2>Recursos Multimedia</h2>

            <div>
              <div>
                <div>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/OGC5dhILjpU"
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
        </article>
        <article className={conciencia.saberMas}>
          <div>
            <h2>Para Saber Más</h2>
            <div>
              <div>
                <div>
                  <h4>
                    <span>
                      <a
                        href="https://futurosostenible.elmundo.es/transformacion/como-despertar-la-conciencia-ecologica-de-los-ninos.html"
                        onClick={futuroSostenible}
                      >
                        Cómo despertar la conciencia ecológica de los niños
                      </a>
                    </span>
                  </h4>
                  <h5>
                    <span>
                      <a
                        href="https://naturaliza-pre.ecoembes.com/2020/12/01/conciencia-ecologica-ninos/"
                        onClick={naturaliza}
                      >
                        Naturaleza e infancia: el despertar de la conciencia
                        ecológica
                      </a>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompConcienciaAmbiental;
