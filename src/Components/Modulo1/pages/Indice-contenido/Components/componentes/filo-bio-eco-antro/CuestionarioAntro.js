import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import glocalcss from "../../glocal.module.css";
import filoBioEcoAntro from '../../filoBioEcoAntro.module.css';

const CuestionarioAntro = () => {
  const [correcto, setCorrecto] = useState('')
  const cuestionario = e => {
    if(e.target.value === 'correcto'){
      setCorrecto('correcto');
    }else{setCorrecto(null)} 
  }

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
            <form name="" id="" action="#" className="">
              <section className="">
                
                <div className="">
                  <p>
                    <span>¿ En qué está basado el Econcentrismo?</span>
                  </p>
                </div>
                <section onChange={cuestionario}>             
                  <section >
                    <div className="row">
                      <div className="col-2">
                        <input type="radio" name="cuestionario" id="" value="incorrecto" />
                      </div>
                      <div className="col-10">
                        <p>
                          <span>
                            En que todas las formas de vida son igualmente
                            importantes, no siendo la humanidad el centro de la
                            existencia.
                          </span>
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="">
                    <div className="row">
                      <div className="col-2">
                        <input type="radio" name="cuestionario" id="" value="correcto" />
                      </div>
                      <div className="col-10">
                        <p>
                          <span>
                            Las acciones y los pensamientos racionales del
                            individuo deben centrarse por encima de todo en el
                            medio ambiente tanto en su cuidado como en su
                            conservación.
                          </span>
                        </p>
                      </div>
                    </div>
                  </section>
                </section>
              {correcto === 'correcto' ?
                <p><strong className={filoBioEcoAntro.correcto}>Correcto</strong></p> 
                : correcto === null ? 
                <p><strong className={filoBioEcoAntro.incorrecto}>Incorrecto</strong></p>
                : null
              }
              </section>
             {/*<div className="">
                <p>
                  <input 
                    className={filoBioEcoAntro.enviar_respuesta}
                    type="submit"
                    name="submitB"
                    value="ENVIAR RESPUESTAS"
                  />{" "}
                </p>
              </div>*/}
            </form>
          </article>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CuestionarioAntro;
