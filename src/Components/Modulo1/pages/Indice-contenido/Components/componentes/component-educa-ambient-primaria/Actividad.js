import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import eduprimaria from "../../eduprimaria.module.css";

const Actividad = () => {
  const [puntos, setPuntos] = useState([]);

  const [seleccionado, setSeleccionado] = useState({
    select1: "",
    select2: "",
    select3: "",
    select4: "",
    select5: "",
    select6: "",
    select7: "",
  });
  const { select1, select2, select3, select4, select5, select6, select7 } =
    seleccionado;

  const opcion = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const valor = e.target.value;
    const name = e.target.name;
    if (id === valor) {
      setPuntos([...puntos, valor]);
      if(name === 'uno'){
        setSeleccionado({ ...seleccionado, select1: valor });
      }
      if(name === 'dos'){
        setSeleccionado({ ...seleccionado, select2: valor });
      }
      if(name === 'tres'){
        setSeleccionado({ ...seleccionado, select3: valor });
      }
      if(name === 'cuatro'){
        setSeleccionado({ ...seleccionado, select4: valor });
      }
      if(name === 'cinco'){
        setSeleccionado({ ...seleccionado, select5: valor });
      }
      if(name === 'seis'){
        setSeleccionado({ ...seleccionado, select6: valor });
      }
      if(name === 'siete'){
        setSeleccionado({ ...seleccionado, select7: valor });
      }
      
    }
  };

  const [comprobacion, setComprobacion] = useState(false);
  const comprobar = () => {
    setComprobacion(!comprobacion);
  };

  const [mostrar, setMostrar] = useState(false)
  const mostrarTexto = () => {
    setMostrar(!mostrar);
  }
  return (
    <article className={eduprimaria.article_actividad}>
      <Accordion className={eduprimaria.acordeon}>
        <Accordion.Item className={eduprimaria.acordeon_item}>
          <Accordion.Header className={eduprimaria.acordeon_header_actividad}>
            <strong className={eduprimaria.acordeon_strong}>?</strong>Actividad
            desplegable
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <section>
                <p>
                  <span>
                    Lea y complete las palabras que faltan sobre los contenidos
                    procedimentales de la Educación Ambiental
                  </span>
                </p>
              </section>
              <section className={eduprimaria.actividad}>
                <form name="" action="#" className="">
                  <div onChange={opcion}>
                    <p>
                      <span>
                        Recoger, explorar y tratar la
                        <select
                          id="información"
                          name="uno"
                          className={comprobacion && select1 === "información" 
                            ? eduprimaria.correcto
                            : comprobacion && select1 !== "información"
                            ? eduprimaria.incorrecto
                            : null
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                        en los diferentes entornos
                      </span>
                    </p>
                    <p>
                      <span>
                        Traducir e interpretar
                        <select 
                          id="mensajes"
                          name="dos"
                          className={comprobacion && select2 === "mensajes"
                            ? eduprimaria.correcto
                            : comprobacion && select2 !== "mensajes" 
                            ? eduprimaria.incorrecto
                            : null     
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                      </span>
                    </p>
                    <p>
                      <span>
                        Adaptarse a
                        <select 
                          id="una situación"
                          name="tres"
                          className={comprobacion && select3 === "una situación"
                            ? eduprimaria.correcto
                            : comprobacion && select3 !== "una situación" 
                            ? eduprimaria.incorrecto
                            : null     
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                      </span>
                    </p>
                    <p>
                      <span>
                        Transformar,
                        <select 
                          id="crear"
                          name="cuatro"
                          className={comprobacion && select4 === "crear"
                            ? eduprimaria.correcto
                            : comprobacion && select4 !== "crear" 
                            ? eduprimaria.incorrecto
                            : null     
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                        o inventar
                      </span>
                    </p>
                    <p>
                      <span> Juzgar y evaluar </span>
                    </p>
                    <p>
                      <span>
                        Elegir y decidir en
                        <select 
                          id="diferentes situaciones"
                          name="cinco"
                          className={comprobacion && select5 === "diferentes situaciones"
                            ? eduprimaria.correcto
                            : comprobacion && select5 !== "diferentes situaciones" 
                            ? eduprimaria.incorrecto
                            : null     
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                      </span>
                    </p>
                    <p>
                      <span>
                        Abstraer o generalizar
                        <select 
                          id="informaciones"
                          name="seis"
                          className={comprobacion && select6 === "informaciones"
                            ? eduprimaria.correcto
                            : comprobacion && select6 !== "informaciones" 
                            ? eduprimaria.incorrecto
                            : null     
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                      </span>
                    </p>
                    <p>
                      <span>
                        Comunicar
                        <select 
                          id="experiencias"
                          name="siete"
                          className={comprobacion && select7 === "experiencias"
                            ? eduprimaria.correcto
                            : comprobacion && select7 !== "experiencias"
                            ? eduprimaria.incorrecto
                            : null     
                          }
                        >
                          <option> </option>
                          <option value="diferentes situaciones">
                            diferentes situaciones
                          </option>
                          <option value="experiencias"> experiencias </option>
                          <option value="crear"> crear </option>
                          <option value="una situación">una situación</option>
                          <option value="información">información</option>
                          <option value="mensajes"> mensajes </option>
                          <option value="informaciones">informaciones</option>
                        </select>
                        o resultados.
                      </span>
                    </p>
                    {comprobacion ? (
                      <p className={eduprimaria.puntos}>
                        Su puntuación es {puntos.length}/7.
                      </p>
                    ) : null}
                    <div>
                      <p>
                        <input
                          onClick={comprobar}
                          className={eduprimaria.comprobar}
                          type="submit"
                          name=""
                          value="Comprobar"
                          id=""
                        />

                        <input
                          onClick={mostrarTexto}
                          type="button"
                          name=""
                          value="Mostrar texto"
                          className={eduprimaria.mostrar}
                        />
                      </p>
                    </div>
                  </div>
                </form>
              </section>
              {mostrar ? 
              <section>
                <p>
                  <span>
                    Recoger, explorar y tratar la <u> información </u> en los
                    diferentes entornos
                  </span>
                </p>
                <p>
                  <span>
                    Traducir e interpretar <u> mensajes </u>
                  </span>
                </p>
                <p>
                  <span>
                    Adaptarse a <u> una situación </u>
                  </span>
                </p>
                <p>
                  <span>
                    Transformar, <u> crear </u> o inventar
                  </span>
                </p>
                <p>
                  <span> Juzgar y evaluar </span>
                </p>
                <p>
                  <span>
                    Elegir y decidir en <u> diferentes situaciones </u>
                  </span>
                </p>
                <p>
                  <span>
                    Abstraer o generalizar <u> informaciones </u>
                  </span>
                </p>
                <p>
                  <span>
                    Comunicar <u> experiencias </u> o resultados.
                  </span>
                </p>
              </section> : null
              }
              
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </article>
  );
};

export default Actividad;
