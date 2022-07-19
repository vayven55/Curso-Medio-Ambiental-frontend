import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import glocalcss from "../../glocal.module.css";

const Actividad = () => {
  const [seleccion, setSeleccion] = useState({
    id1: "",
    id2: "",
    id3: "",
    id4: "",
    id5: "",
    id6: "",
    id7: "",
    id8: "",
    id9: "",
    id10: ""
  });
  const {
    id1,
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    id9,
  id10} = seleccion;
  const [puntos, setPuntos] = useState(0);

  const select = (e) => {
    const name = e.target.name;
    const valor = e.target.value;
    const id = e.target.id;
    if(valor === name && id === '1'){
        setSeleccion({ ...seleccion, id1: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '2'){
        setSeleccion({ ...seleccion, id2: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '3'){
        setSeleccion({ ...seleccion, id3: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '4'){
        setSeleccion({ ...seleccion, id4: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '5'){
        setSeleccion({ ...seleccion, id5: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '6'){
        setSeleccion({ ...seleccion, id6: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '7'){
        setSeleccion({ ...seleccion, id7: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '8'){
        setSeleccion({ ...seleccion, id8: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '9'){
        setSeleccion({ ...seleccion, id9: valor });
        setPuntos(puntos+1)
    }
    if(valor === name && id === '10'){
        setSeleccion({ ...seleccion, id10: valor });
        setPuntos(puntos+1)
    }
  };

  const [comprobacion, setComprobacion] = useState(false);
  const [muestra, setMuestra] = useState(false);

  const comprobar = () => {
    setComprobacion(!comprobacion);
  }
  const mostrar = () => {
    setMuestra(!muestra);
  }

  return (
    <article className="" id="">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={glocalcss.acordeon_item}>
          <Accordion.Header className={glocalcss.acordeon_header}>
            <h2 className={glocalcss.h2Cuestionario}>Actividad desplegable</h2>
          </Accordion.Header>
          <Accordion.Body>
            <div className="">
              <section id="" className="">
                Lea y complete
              </section>

              <section className={glocalcss.actividad} id="">
                <form name="" action="#" className="">
                  <input type="hidden" name="" id="" value="" />

                  <p onChange={select}>
                    Dentro de un
                    <select 
                        id="1" 
                        name="sistema"
                        className={
                            comprobacion && id1 === "sistema" ? 
                            glocalcss.ok : comprobacion && id1 !== "sistema" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    los problemas ambientales no son
                    <select 
                        id="2" 
                        name="la suma"
                        className={
                            comprobacion && id2 === "la suma" ? 
                            glocalcss.ok : comprobacion && id2 !== "la suma" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    de problemas sino 
                    <select 
                        id="3" 
                        name="su interacción"
                        className={
                            comprobacion && id3 === "su interacción" ? 
                            glocalcss.ok : comprobacion && id3 !== "su interacción" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    . Las
                    <select 
                        id="4" 
                        name="acciones"
                        className={
                            comprobacion && id4 === "acciones" ? 
                            glocalcss.ok : comprobacion && id4 !== "acciones" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    que se llevan a cabo en un lugar del mundo pueden repercutir
                    en todo el
                    <select 
                        id="5" 
                        name="sistema"
                        className={
                            comprobacion && id5 === "sistema" ? 
                            glocalcss.ok : comprobacion && id5 !== "sistema" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    . Desarrollar los problemas en escalas más 
                    <select 
                        id="6" 
                        name="pequeñas"
                        className={
                            comprobacion && id6 === "pequeñas" ? 
                            glocalcss.ok : comprobacion && id6 !== "pequeñas" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                     hace que se trabaje de forma 
                    <select 
                        id="7" 
                        name="cooperativa"
                        className={
                            comprobacion && id7 === "cooperativa" ? 
                            glocalcss.ok : comprobacion && id7 !== "cooperativa" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    . En el ámbito educativo la forma de actuar en este sentido
                    es 
                    <select 
                        id="8" 
                        name="colaborar"
                        className={
                            comprobacion && id8 === "colaborar" ? 
                            glocalcss.ok : comprobacion && id8 !== "colaborar" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    con otros centros y/o comunidades educativas, compartiendo
                    experiencias, métodos, recursos y materiales mediante la
                    interconexión y la
                    <select 
                        id="9" 
                        name="conectividad"
                        className={
                            comprobacion && id9 === "conectividad" ? 
                            glocalcss.ok : comprobacion && id9 !== "conectividad" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    a través de 
                    <select 
                        id="10" 
                        name="redes"
                        className={
                            comprobacion && id10 === "redes" ? 
                            glocalcss.ok : comprobacion && id10 !== "redes" ? 
                            glocalcss.ko :null
                        }
                    >
                      <option></option>
                      <option value="redes">redes</option>
                      <option value="conectividad">conectividad</option>
                      <option value="acciones">acciones</option>
                      <option value="su interacción">su interacción</option>
                      <option value="colaborar">colaborar</option>
                      <option value="pequeñas">pequeñas</option>
                      <option value="cooperativa">cooperativa</option>
                      <option value="la suma">la suma</option>
                      <option value="sistema">sistema</option>
                    </select>
                    .
                  </p>
                  <div className="">
                    <p>
                      <input
                        className={glocalcss.comprobar}
                        type="button"
                        name=""
                        value="Comprobar"
                        id=""
                        onClick={comprobar}
                      />

                      <input
                        type="button"
                        name=""
                        value="Mostrar texto"
                        className={glocalcss.mostrar}
                        onClick={mostrar}
                      />
                      
                    </p>
                    

                  </div>
                </form>
                {comprobacion ? <p>Su puntuación es {puntos}/10.</p> : null}
              </section>
              {muestra ? <section className="">
                <p>
                  Dentro de un <u>sistema</u>
                  los problemas ambientales no son <u>la suma</u> de problemas
                  sino 
                  <u>su interacción</u> . Las <u>acciones</u> que se llevan a
                  cabo en un lugar del mundo pueden repercutir en todo el{" "}
                  <u>sistema</u> .
                </p>
                <p>
                  Desarrollar los problemas en escalas más  <u>pequeñas</u>{" "}
                   hace que se trabaje de forma  <u>cooperativa</u> . En el
                  ámbito educativo la forma de actuar en este sentido es 
                  <u>colaborar</u> con otros centros y/o comunidades educativas,
                  compartiendo experiencias, métodos, recursos y materiales
                  mediante la interconexión y la <u>conectividad</u> a través
                  de 
                  <u>redes</u>.
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
