import React, { useState } from "react";
import fomento from "../../fomentoPensamiento.module.css";

const ActividadDespleg = () => {
  const [comprobar, setComprobar] = useState([]);

  const [optionClick, setOptionClick] = useState({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    select6: false,
    select7: false,
    select8: false,
  });
  const {
    select1,
    select2,
    select3,
    select4,
    select5,
    select6,
    select7,
    select8,
  } = optionClick;
  const actividad = (e) => {
    const id = e.target.id;
    const valor = e.target.value;

    if (id === "uno" && valor === "sus ideas previas") {
      setComprobar([...comprobar, "uno1"]);
      setOptionClick({ ...optionClick, select1: true });
    }
    if (id === "dos" && valor === "sesgos") {
      setComprobar([...comprobar, "dos2"]);
      setOptionClick({ ...optionClick, select2: true });
    }
    if (id === "tres" && valor === "las interacciones sociales y culturales") {
      setComprobar([...comprobar, "tres3"]);
      setOptionClick({ ...optionClick, select3: true });
    }
    if (id === "cuatro" && valor === "analizar las creencias erróneas") {
      setComprobar([...comprobar, "cuatro4"]);
      setOptionClick({ ...optionClick, select4: true });
    }
    if (id === "cinco" && valor === "incentivar las preguntas") {
      setComprobar([...comprobar, "cinco5"]);
      setOptionClick({ ...optionClick, select5: true });
    }
    if (id === "seis" && valor === "repensar") {
      setComprobar([...comprobar, "seis6"]);
      setOptionClick({ ...optionClick, select6: true });
    }
    if (id === "siete" && valor === "la participación activa") {
      setComprobar([...comprobar, "siete7"]);
      setOptionClick({ ...optionClick, select7: true });
    }
    if (id === "ocho" && valor === "validez de las ideas establecidas.") {
      setComprobar([...comprobar, "ocho8"]);
      setOptionClick({ ...optionClick, select8: true });
    }
  };

  const [mostrar, setMostrar] = useState(false);
  const mostrarTexto = () => {
    setMostrar(!mostrar);
  };

  const [puntuacion, setPuntuacion] = useState("");
  const [seleccion, setSeleccion] = useState(false);
  const puntos = () => {
    setPuntuacion(comprobar.length);
    setSeleccion(true);
  };

  return (
    <article className={fomento.articleActividad}>
      <div>
        <h3>Actividad desplegable</h3>

        <div>
          <section>Lea y complete</section>

          <section>
            <form name="" action="#">
              <p onChange={actividad}>
                Cuando trabajamos  en torno al pensamiento crítico de nuestros
                alumnos debemos partir de
                <select
                  id="uno"
                  className={
                    seleccion && select1
                      ? fomento.select
                      : seleccion && !select1
                      ? fomento.No_select
                      : null
                  }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                ya que pueden presentar
                <select 
                    id="dos"
                    className={
                    seleccion && select2
                      ? fomento.select
                      : seleccion && !select2
                      ? fomento.No_select
                      : null
                  }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                debido a
                <select 
                    id="tres"
                    className={
                    seleccion && select3
                      ? fomento.select
                      : seleccion && !select3
                      ? fomento.No_select
                      : null
                    }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                a través de las cuales se han desarrollado . Es necesario
                <select 
                    id="cuatro"
                    className={
                    seleccion && select4
                      ? fomento.select
                      : seleccion && !select4
                      ? fomento.No_select
                      : null
                    }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                 e
                <select 
                    id="cinco"
                    className={
                    seleccion && select5
                      ? fomento.select
                      : seleccion && !select5
                      ? fomento.No_select
                      : null
                    }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                instándoles a
                <select 
                    id="seis"
                    className={
                    seleccion && select6
                      ? fomento.select
                      : seleccion && !select6
                      ? fomento.No_select
                      : null
                  }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                desde el respeto, la tolerancia y
                <select 
                    id="siete"
                    className={
                    seleccion && select7
                      ? fomento.select
                      : seleccion && !select7
                      ? fomento.No_select
                      : null
                    }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
                para verificar la
                <select 
                    id="ocho"
                    className={
                    seleccion && select8
                      ? fomento.select
                      : seleccion && !select8
                      ? fomento.No_select
                      : null
                    }
                >
                  <option></option>
                  <option value="analizar las creencias erróneas">
                    analizar las creencias erróneas
                  </option>
                  <option value="validez de las ideas establecidas.">
                    validez de las ideas establecidas.
                  </option>
                  <option value="sesgos">sesgos</option>
                  <option value="las interacciones sociales y culturales">
                    las interacciones sociales y culturales
                  </option>
                  <option value="incentivar las preguntas">
                    incentivar las preguntas
                  </option>
                  <option value="repensar">repensar</option>
                  <option value="la participación activa">
                    la participación activa
                  </option>
                  <option value="sus ideas previas">sus ideas previas</option>
                </select>
              </p>
              <div>
                {puntuacion !== "" ? (
                  <p>Su puntuación es {puntuacion}/8</p>
                ) : null}
                <p>
                  <input
                    onClick={puntos}
                    className={fomento.comprobar}
                    type="submit"
                    name=""
                    value="Comprobar"
                    id=""
                  />

                  <input
                    onClick={mostrarTexto}
                    className={fomento.mostrar}
                    type="button"
                    name=""
                    value="Mostrar texto"
                  />
                </p>
              </div>
            </form>
          </section>

          {mostrar ? (
            <p>
              Cuando trabajamos  en torno al pensamiento crítico de nuestros
              alumnos debemos partir de<span> </span>
              <u>sus ideas previas</u>
              <span> </span>ya que pueden presentar<span> </span>
              <u>sesgos</u>
              <span> </span>debido a<span> </span>
              <u>las interacciones sociales y culturales</u>
              <span> </span>a través de las cuales se han desarrollado . Es
              necesario<span> </span>
              <u>analizar las creencias erróneas</u>
              <span> </span> e<span> </span>
              <u>incentivar las preguntas</u>
              <span> </span>instándoles a<span> </span>
              <u>repensar</u>
              <span> </span>desde el respeto, la tolerancia y<span> </span>
              <u>la participación activa</u>
              <span> </span>para verificar la<span> </span>
              <u>validez de las ideas establecidas.</u>
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ActividadDespleg;
