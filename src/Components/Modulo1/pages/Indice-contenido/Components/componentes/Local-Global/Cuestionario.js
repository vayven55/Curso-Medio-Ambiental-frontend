import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import glocalcss from "../../glocal.module.css";

const Cuestionario = () => {
  const [cuestionario1, setCuestionario1] = useState(0);
  const [cuestionario2, setCuestionario2] = useState(0);    
  const [punto, setPunto] = useState(false);

  const respuestas1 = (e) => {
    const valor = e.target.value;
    if (valor === "verdadero") {
      setCuestionario1(50);
    } else {
      setCuestionario1(0);
    }
  };
  const respuestas2 = (e) => {
     
    const valor = e.target.value;
    if (valor === "verdadero") {
      setCuestionario2(50);
    } else {
      setCuestionario2(0); 
    }
  };

  const [puntos, setPuntos] = useState(0);
  
  const puntuacion = (e) => {
    e.preventDefault();
    setPuntos(cuestionario1 + cuestionario2 + "%");
    setPunto(true)
  };
  
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className={glocalcss.acordeon_item}>
        <Accordion.Header className={glocalcss.acordeon_header}>
          <h2 className={glocalcss.h2Cuestionario}>
            <strong className={glocalcss.cuest_pregunta}>?</strong>Cuestionario
            SCORM
          </h2>
        </Accordion.Header>
        <Accordion.Body>
          <article className="">
            <div className="">
              <form name="" id="" action="#" className="">
                <section className="" onChange={respuestas1}>
                  <h4 className="">Pregunta</h4>
                  <p className={glocalcss.pregunta}>
                    ¿Cómo se actúa de forma glocal?
                  </p>
                  <h4 className={glocalcss.respuesta}>Respuestas</h4>
                  <div className="">
                    <section className={glocalcss.input}>
                      <input
                        type="radio"
                        name="pregunta1"
                        id="1"
                        value="falso"
                      />
                      <p className="">
                        Sistematizando actuaciones que tengan una repercusión
                        global, pensando en actuaciones a gran escala con un
                        impacto mayor
                      </p>
                    </section>
                    <section className={glocalcss.input}>
                      <input
                        type="radio"
                        name="pregunta1"
                        id="2"
                        value="verdadero"
                      />
                      <p className="">
                        Pensando en el planeta como si éste fuera los elementos
                        de nuestro contexto más cercano, llevando a cabo desde
                        ahí actuaciones a nivel local a escalas pequeñas con una
                        perspectiva global con repercusiones a una escala mayor.
                      </p>
                    </section>
                    <section className={glocalcss.input}>
                      <input
                        type="radio"
                        name="pregunta1"
                        id="3"
                        value="falso"
                      />
                      <p className="">
                        Pensando en actuaciones que generen impactos locales sin
                        pretender controlar que impacto tendrá a nivel global ya
                        que escapa de nuestro control.
                      </p>
                    </section>
                  </div>
                </section>
                <section className="" onChange={respuestas2}>
                  <h4 className="">Pregunta</h4>
                  <p className={glocalcss.pregunta}>
                    ¿Qué tipo de pensamiento estamos desarrollando cuando
                    pensamos glocalmente?
                  </p>
                  <h4 className={glocalcss.respuesta}>Respuestas</h4>
                  <section className={glocalcss.input}>
                    <input type="radio" name="pregunta2" id="4" value="falso" />
                    <p>Pensamiento crítico</p>
                  </section>
                  <section className={glocalcss.input}>
                    <input type="radio" name="pregunta2" id="5" value="falso" />
                    <p>Pensamiento reflexivo</p>
                  </section>
                  <section className={glocalcss.input}>
                    <input
                      type="radio"
                      name="pregunta2"
                      id="6"
                      value="verdadero"
                    />
                    <p>Pensamiento sistémico</p>
                  </section>
                </section>
                <div className="">
                  <input
                    className={glocalcss.input_enviar}
                    type="submit"
                    name=""
                    value="ENVIAR RESPUESTAS"
                    onClick={puntuacion}
                  />
                  {punto ? <p>Su puntuación es {puntos}</p> : null}
                </div>
              </form>
            </div>
          </article>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Cuestionario;
