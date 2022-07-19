import React from "react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import agenda from "../agenda.module.css";
import Correcto from './AcordeonAgenda_correcto';
import Incorrecto from './AcordeonAgenda_incorrecto';

function AcordeonAgenda() {
 

  const [valor1a, setValor1a] = useState('');
  const [valor1b, setValor1b] = useState('');
  const [valor2a, setValor2a] = useState('');
  const [valor2b, setValor2b] = useState('');
  const [valor3a, setValor3a] = useState('');
  const [valor3b, setValor3b] = useState('');
  const [valor4a, setValor4a] = useState('');
  const [valor4b, setValor4b] = useState('');
  const [valor5a, setValor5a] = useState('');
  const [valor5b, setValor5b] = useState('');

  const verdadero1 = (e) => {
    if(e.target.id === 'radio1a'){
       setValor1a(e.target)
       document.getElementById('radio1b').disabled = true;  
    }else if(e.target.id === 'radio1b'){
       setValor1b(e.target);
       document.getElementById('radio1a').disabled = true;
    }      
  };
  
  const verdadero2 = (e) => {
    if(e.target.id === 'radio2a'){
       setValor2a(e.target)
       document.getElementById('radio2b').disabled = true;  
    }else if(e.target.id === 'radio2b'){
       setValor2b(e.target);
       document.getElementById('radio2a').disabled = true;
    }      
  };
  const verdadero3 = (e) => {
    if(e.target.id === 'radio3a'){
      setValor3a(e.target)
      document.getElementById('radio3b').disabled = true;  
   }else if(e.target.id === 'radio3b'){
      setValor3b(e.target);
      document.getElementById('radio3a').disabled = true;
   }      
  };
  const verdadero4 = (e) => {
    if(e.target.id === 'radio4a'){
      setValor4a(e.target)
      document.getElementById('radio4b').disabled = true;  
   }else if(e.target.id === 'radio4b'){
      setValor4b(e.target);
      document.getElementById('radio4a').disabled = true;
   }      
  };
  const verdadero5 = (e) => {
    if(e.target.id === 'radio5a'){
      setValor5a(e.target)
      document.getElementById('radio5b').disabled = true;  
    }else if(e.target.id === 'radio5b'){
      setValor5b(e.target);
      document.getElementById('radio5a').disabled = true;
   }      
  };

  const reset = () => {
    window.location.reload()
  }
  return (
    <Accordion>
      <Accordion.Item eventKey="0" className={agenda.accordion}>
        <div className={agenda.accordion_header}>
          <Accordion.Header>
            <h3>Pregunta Verdadero - Falso</h3>
          </Accordion.Header>
        </div>
        <Accordion.Body>
          <div>
            <div>
              <p>Responde con Verdadero o Falso los siguientes enunciados:</p>
            </div>
            <section>
              {/*<h3>Pregunta 2</h3>*/}
              <div>
                <p>
                  La Agenda 2030 es un instrumento guía que supone una nueva
                  oportunidad para transformar la realidad insostenible del
                  planeta.
                </p>
              </div>
              <form className={agenda.radio} id="resForm">
                <p>
                  <label>
                    <input
                      onChange={verdadero1}
                      type="radio"
                      name="tipo1"
                      id="radio1a"
                      value="correcto"
                    />{" "}
                    Verdadero
                  </label>
                  <label>
                    <input
                      onChange={verdadero1}
                      type="radio"
                      name="tipo1"
                      id="radio1b"
                      value="incorrecto"
                    />{" "}
                    Falso
                  </label>
                  {valor1a ? <Correcto /> : null }
                  {valor1b ? <Incorrecto /> : null}
                </p>
                

                {/*<h3>Pregunta 2</h3>*/}
                <div>
                  <p>
                    Es un instrumento elaborado directamente por la OMS que
                    apela a los educadores en uno de sus objetivos y metas.
                  </p>
                </div>

                <p>
                  <label htmlFor="typo2">
                    <input
                      onChange={verdadero2}
                      type="radio"
                      name="tipo2"
                      id="radio2a"
                      value="incorrecto"
                    />{" "}
                    Verdadero
                  </label>
                  <label htmlFor="typo2">
                    <input
                      onChange={verdadero2}
                      type="radio"
                      name="tipo2"
                      id="radio2b"
                      value="correcto"
                    />{" "}
                    Falso
                  </label>
                  {valor2a ? <Incorrecto /> : null }
                  {valor2b ? <Correcto /> : null}
                </p>
                

                {/*<h3>Pregunta 3</h3>*/}
                <div>
                  <p>
                    El punto cuatro de esta agenda nos insta a actuar al
                    enunciar que hay que "Garantizar una educación inclusiva,
                    equitativa y de calidad promoviendo oportunidades de
                    aprendizaje durante la educación primaria "
                  </p>
                </div>

                <p>
                  <label htmlFor="">
                    <input
                      onChange={verdadero3}
                      type="radio"
                      name="tipo3"
                      id="radio3a"
                      value="incorrecto"
                    />{" "}
                    Verdadero
                  </label>
                  <label htmlFor="">
                    <input
                      onChange={verdadero3}
                      type="radio"
                      name="tipo3"
                      id="radio3b"
                      value="correcto"
                    />{" "}
                    Falso
                  </label>
                  {valor3a ? <Incorrecto /> : null }
                  {valor3b ? <Correcto /> : null}
                </p>


                {/*<h3>Pregunta 4</h3>*/}
                <div>
                  <p>
                    La meta número siete alude a la EA cuando se pronuncia
                    acerca de asegurar de aquí a 2030 que todos los estudiantes
                    adquieran los conocimientos teóricos y prácticos necesarios
                    para promover el desarrollo sostenible.
                  </p>
                </div>

                <p>
                  <label htmlFor="">
                    <input
                      onChange={verdadero4}
                      type="radio"
                      name="tipo4"
                      id="radio4a"
                      value="correcto"
                    />{" "}
                    Verdadero
                  </label>
                  <label htmlFor="f">
                    <input
                      onChange={verdadero4}
                      type="radio"
                      name="tipo4"
                      id="radio4b"
                      value="incorrecto"
                    />{" "}
                    Falso
                  </label>
                  {valor4a ? <Correcto /> : null }
                  {valor4b ? <Incorrecto /> : null}
                </p>
                

                {/*<h3>Pregunta 5</h3>*/}
                <div>
                  <p>
                    Una de las críticas que recibe la Agenda 2030, por parte de
                    las corrientes más críticas de la EA, es que no incide
                    demasiado sobre la raíz del problema que es el crecimiento
                    económico, para lo cual la solución principal seria
                    decrecer.
                  </p>
                </div>

                <p>
                  <label htmlFor="">
                    <input
                      onChange={verdadero5}
                      type="radio"
                      name="tipo5"
                      id="radio5a"
                      value="correcto"
                    />{" "}
                    Verdadero
                  </label>
                  <label htmlFor="">
                    <input
                      onChange={verdadero5}
                      type="radio"
                      name="tipo5"
                      id="radio5b"
                      value="incorrecto"
                    />{" "}
                    Falso
                  </label>
                  {valor5a ? <Correcto /> : null }
                  {valor5b ? <Incorrecto /> : null}
                </p>
                
                <input 
                  className={agenda.reset_form} 
                  type="reset"
                  name="reset"
                  value="Reset"
                  onClick={reset}
                />
              </form>
            </section>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcordeonAgenda;
