import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import filoBioEcoAntro from "./filoBioEcoAntro.module.css";
import AntrovsECO from "../../../assets/img/AntrovsECO.jpg";
import CuestionarioAntro from "./componentes/filo-bio-eco-antro/CuestionarioAntro";

const CompFiloBioEcoAntro = () => {
  const [resolver, setResolver] = useState({
    pregunta_1a: false,
    pregunta_1b: false,
    pregunta_2a: false,
    pregunta_2b: false,
    pregunta_3a: false,
    pregunta_3b: false,
  });
  const {
    pregunta_1a,
    pregunta_1b,
    pregunta_2a,
    pregunta_2b,
    pregunta_3a,
    pregunta_3b,
  } = resolver;

  const pregunta = (e) => {
    const name = e.target.name;
    const id = e.target.id;
    if (name === "pregunta1") {
      if (id === "pregunta1-a") {
        setResolver({ ...resolver, pregunta_1a: true, pregunta_1b: false });
      } else {
        setResolver({ ...resolver, pregunta_1a: false, pregunta_1b: true });
      }
    }
    if (name === "pregunta2") {
      if (id === "pregunta2-a") {
        setResolver({ ...resolver, pregunta_2a: true, pregunta_2b: false });
      } else {
        setResolver({ ...resolver, pregunta_2a: false, pregunta_2b: true });
      }
    }
    if (name === "pregunta3") {
      if (id === "pregunta3-a") {
        setResolver({ ...resolver, pregunta_3a: true, pregunta_3b: false });
      } else {
        setResolver({ ...resolver, pregunta_3a: false, pregunta_3b: true });
      }
    }
  };

  return (
    <div className={mod1.presentacion}>
      <h2>
        5. Modelos filosóficos: Biocentrismo y Ecocentrismo VS Antropocentrismo
      </h2>
      <section className={filoBioEcoAntro.section}>
        <article className={filoBioEcoAntro.article}>
          <div>
            <div className={filoBioEcoAntro.img}>
              <img
                src={AntrovsECO}
                alt="Las figuras de dos personas enfrentadas discutiendo. Una figura esta compuesta por hojas y naturaleza y la otra por un engranaje mecánico"
                title="Biocentrismo y Ecocentrismo versus Antropocentrismo"
              />
            </div>
            <p>
              <span>
                Los modelos de desarrollo económico, social y cultural de
                occidente surgen del pensamiento de cientos de pensadores que
                tienen lugar desde la cuna de la civilización occidental a
                través de la cual se ha ido conformando y modelando el
                pensamiento y las estructuras por las cuales hoy transitamos.
              </span>
            </p>
            <p>
              <span>
                El <strong>antropocentrismo</strong> es la concepción filosófica
                que considera al ser humano como el centro de todas las cosas,
                punto de referencia y fin absoluto de la naturaleza (RAE)
              </span>
            </p>
            <ul>
              <li>
                <span>
                  “La ciencia restaura al hombre en su función como director de
                  la economía de la naturaleza a  la cabeza de los seres vivos”
                  Comte, siglo XIX.
                </span>
              </li>
            </ul>
            <p>
              <span>
                Es decir nuestro modo de vivir y actuar en el mundo está
                condicionado por una idiosincrasia que considera que la
                naturaleza está servicio del hombre para su explotación obviando
                las necesidades, los ritmos, los procesos y en definitiva el
                cuidado de la Tierra.
              </span>
            </p>
            <p>
              <span>
                En contraposición a este modelo encontramos otras concepciones
                más respetuosas con nuestro medio ambiente:
              </span>
            </p>
            <p>
              <span>
                El <strong>biocentrismo</strong>
                “concepción, según la cual todas las formas de vida son
                igualmente importantes, no siendo la humanidad el centro de la
                existencia” .
              </span>
            </p>
            <p>
              <span>
                El <strong>ecocentrismo</strong>, se basa en que las acciones y
                los pensamientos racionales del individuo deben centrarse en el
                medio ambiente sobre todas las cosas tanto en su cuidado como en
                la conservación del medio ambiente.
              </span>
            </p>
            <p>
              <span>
                La jerarquía de intereses en cada una de las concepciones es
                diferente, no obstante ni el biocentrismo ni el ecocentrismo
                consideran a la naturaleza como un fin ni al hombre como un
                medio.
              </span>
            </p>
          </div>
        </article>
        <CuestionarioAntro />
        <article className={filoBioEcoAntro.article}>
          <div className="">
            <h2 className={filoBioEcoAntro.h2}>Pregunta Verdadero-Falso</h2>
            <div className="">
              <section className="">
                <form
                  name="pregunta1"
                  action="#"
                  className=""
                  onChange={pregunta}
                >
                  <h3 className="">Pregunta 1</h3>
                  <div className="">
                    <p>
                      <span>
                        El ecocentrismo no consideran a la naturaleza como un
                        fin ni al hombre como sin embargo  el biocentirsmo
                        aunque no considera a la naturaleza como fin si
                        considera al hombre como un medio.
                      </span>
                    </p>
                  </div>
                  <p className="">
                    <input
                      type="radio"
                      name="pregunta1"
                      id="pregunta1-a"
                      className=""
                    />
                    Verdadero
                    <input
                      type="radio"
                      name="pregunta1"
                      id="pregunta1-b"
                      className=""
                    />{" "}
                    Falso
                  </p>
                  {pregunta_1a ? (
                    <p>
                      <strong className={filoBioEcoAntro.incorrecto}>
                        Incorrecto
                      </strong>
                    </p>
                  ) : pregunta_1b ? (
                    <p>
                      <strong className={filoBioEcoAntro.correcto}>
                        Correcto
                      </strong>
                    </p>
                  ) : null}
                </form>
                {/*<section className="">
                  
                  <p>
                    <strong className="">Falso</strong>
                  </p>
                  <p>
                    <span>
                      Ni el biocentrismo ni el ecocentrismo consideran a la
                      naturaleza como un fin ni al hombre como un medio.
                    </span>
                  </p>
                </section>*/}
              </section>
              <section className="">
                <form
                  name="pregunta2"
                  action="#"
                  className=""
                  onChange={pregunta}
                >
                  <h3 className="">Pregunta 2</h3>
                  <div className="">
                    <p>
                      <span>
                        En occidente nuestro modo de vivir y actuar está
                        condicionado por una idiosincrasia que considera que la
                        naturaleza está servicio del hombre.
                      </span>
                    </p>
                  </div>
                  <p className="">
                    <input
                      type="radio"
                      name="pregunta2"
                      id="pregunta2-a"
                      className=""
                    />
                    Verdadero
                    <input
                      type="radio"
                      name="pregunta2"
                      id="pregunta2-b"
                      className=""
                    />{" "}
                    Falso
                  </p>
                  {pregunta_2a ? (
                    <p>
                      <strong className={filoBioEcoAntro.correcto}>
                        Correcto
                      </strong>
                    </p>
                  ) : pregunta_2b ? (
                    <p>
                      <strong className={filoBioEcoAntro.incorrecto}>
                        Incorrecto
                      </strong>
                    </p>
                  ) : null}
                </form>
                <section className=""></section>
              </section>
              <section className="">
                <form
                  name="pregunta3"
                  action="#"
                  className=""
                  onChange={pregunta}
                >
                  <h3 className="">Pregunta 3</h3>
                  <div className="">
                    <p>
                      <span>
                        El antropocentrismo es la concepción filosófica que
                        considera al ser humano como el centro de todas las
                        cosas, punto de referencia y fin absoluto de la
                        naturaleza.
                      </span>
                    </p>
                  </div>
                  <p className="">
                    <input
                      type="radio"
                      name="pregunta3"
                      id="pregunta3-a"
                      className=""
                    />
                    Verdadero
                    <input
                      type="radio"
                      name="pregunta3"
                      id="pregunta3-b"
                      className=""
                    />{" "}
                    Falso
                  </p>
                  {pregunta_3a ? (
                    <p>
                      <strong className={filoBioEcoAntro.correcto}>
                        Correcto
                      </strong>
                    </p>
                  ) : pregunta_3b ? (
                    <p>
                      <strong className={filoBioEcoAntro.incorrecto}>
                        Incorrecto
                      </strong>
                    </p>
                  ) : null}
                </form>
                <section className=""></section>
              </section>
            </div>
          </div>
        </article>
        <article>
          <h2 className={filoBioEcoAntro.h2}>Recursos Multimedia</h2>
          <div>
            <p className={filoBioEcoAntro.iframe}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dw0qHyubmXg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
              ></iframe>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompFiloBioEcoAntro;
