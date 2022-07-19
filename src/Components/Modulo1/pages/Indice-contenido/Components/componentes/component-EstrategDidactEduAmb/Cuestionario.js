import React, { useState } from "react";
import estrategia from "../../estrategia.module.css";

const Cuestionario = () => {
  const [envio, setEnvio] = useState(false);
  const enviar = (e) => {
    e.preventDefault();
    setEnvio(!envio);
    console.log("enviar");
  };

  const [puntos, setPuntos] = useState({verdad1: 0, verdad2: 0})
  const {verdad1, verdad2} = puntos;
  const totalPuntos = verdad1 + verdad2;

  const puntuacion = e => {
    const name = e.target.name;
    const check = e.target.value;
      if(check === 'verdadero1'){
        setPuntos({...puntos, verdad1: 50});
      };
      if(check === 'verdadero2'){
        setPuntos({...puntos, verdad2: 50});
         
      };
      if(name === 'radio1' && check === 'falso1'){
        setPuntos({...puntos, verdad1: 0}); 
      }
      if(name === 'radio2' && check === 'falso2'){
        setPuntos({...puntos, verdad2: 0});
      }
      
  }

  return (
    <article className={estrategia.article_cuestionario}>
      <div>
        <h3>
          <strong>?</strong>
          {"  "}Cuestionario SCORM
        </h3>

        <div className={estrategia.preguntas}>
          <form name="" id="" action="*" className="">
            <div onChange={puntuacion}>
              <section name="pregunta-1" className={estrategia.pregunta_1}>
                <div>
                  <p>¿De qué depende el uso de las técnicas de aprendizaje?</p>
                </div>
                <section>
                  <section>
                    <div className="row">
                      <div className="col-2 p-0">
                        <input type="radio" name="radio1" id="" value="verdadero1" />
                      </div>
                      <div className="col-10 p-0">
                        <p>
                          De la correspondencia al nivel de primaria del alumno
                        </p>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col-2 p-0">
                        <input type="radio" name="radio1" id="" value="falso1" />
                      </div>
                      <div className="col-10 p-0">
                        <p>
                          De su nivel de entendimiento del contenido a tratar
                          comprobado a través de una prueba inicial de nivel.
                        </p>
                      </div>
                    </div>
                  </section>
                </section>
              </section>
              <section name="pregunta-2" className={estrategia.pregunta_2}>
                <div>
                  <p>
                    ¿Cuáles son las áreas comunes a todos los niveles de
                    primaria desde las que podemos integrar la Educación
                    Ambiental?
                  </p>
                </div>
                <section>
                  <section>
                    <div className="row">
                      <div className="col-2 p-0">
                        <input type="radio" name="radio2" id="" value="falso2" />
                      </div>
                      <div className="col-10 p-0">
                        <p>Ciencias naturales y ciencia sociales</p>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col-2 p-0">
                        <input type="radio" name="radio2" id="" value="falso2" />
                      </div>
                      <div className="col-10 p-0">
                        <p>
                          Ciencias naturales, Ciencias sociales, Lengua
                          Castellana y lengua extranjera.
                        </p>
                         
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col-2 p-0">
                        <input type="radio" name="radio2" id="" value="verdadero2" />
                      </div>
                      <div className="col-10 p-0">
                        <p>
                          Ciencias naturales, Ciencias sociales, Lengua
                          Castellana y literatura, Lengua extranjera., Educación
                          artística y Matemáticas.
                        </p>
                      </div>
                    </div>
                  </section>
                </section>
              </section>
              <input
                type="submit"
                name=""
                value="ENVIAR"
                onClick={enviar}
                className={estrategia.enviar}
              />
            </div>
          </form>
          {envio ? <p>Su puntuación es: {totalPuntos}%</p> : null}
          
        </div>
      </div>
    </article>
  );
};

export default Cuestionario;
