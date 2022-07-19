import React, { Fragment, useState } from "react";
import TareaM from "./Tarea.module.css";
import { NavLink } from "react-router-dom";

const RubricaEjemplo = () => {
  const [setRefrescar] = useState();
  const reinicio = () => {
    setRefrescar(window.location.reload());
  };
  const [imprimir] = useState();
  const print = () => {
    imprimir(window.print());
  };

  const [tr1, setTr1] = useState(0);
  const [tr2, setTr2] = useState(0);
  const [tr3, setTr3] = useState(0);

  const selecTr1 = (e) => {
    const input = document.getElementsByName("criterio-0");
    let Checked = null;

    if(e.target.name === input[0].name && e.target.value === input[0].value){
      input[1].checked = Checked; 
      input[2].checked = Checked;
      
      if(input[0].checked === true){
        const valor = input[0].value;
        setTr1(valor);
      }else{
        setTr1(0)
      };
    };
     
    if(e.target.name === input[1].name && e.target.value === input[1].value){
      input[0].checked = Checked;
      input[2].checked = Checked;

      if(input[1].checked === true){
        const valor = input[1].value;
        setTr1(valor);  
      }else{
        setTr1(0)
      }  
    }

    if(e.target.name === input[2].name && e.target.value === input[2].value) {
      input[0].checked = Checked;
      input[1].checked = Checked;
     
      if(input[2].checked === true){
        const valor = input[2].value;
        setTr1(valor);  
      }else{
        setTr1(0)     
      }  
    }
   
  };

  const selecTr2 = (e) => {
    const input = document.getElementsByName("criterio-1");
    let Checked = null;

    if(e.target.name === input[0].name && e.target.value === input[0].value){
      input[1].checked = Checked; 
      input[2].checked = Checked;
      
      if(input[0].checked === true){
        const valor = input[0].value;
        setTr2(valor);
      }else{
        setTr2(0)
      };
    };
     
    if(e.target.name === input[1].name && e.target.value === input[1].value){
      input[0].checked = Checked;
      input[2].checked = Checked;

      if(input[1].checked === true){
        const valor = input[1].value;
        setTr2(valor);  
      }else{
        setTr2(0)
      }  
    }

    if(e.target.name === input[2].name && e.target.value === input[2].value) {
      input[0].checked = Checked;
      input[1].checked = Checked;
     
      if(input[2].checked === true){
        const valor = input[2].value;
        setTr2(valor);  
      }else{
        setTr2(0)     
      }  
    }
   
  };

  const selecTr3 = (e) => {
    const input = document.getElementsByName("criterio-2");
    let Checked = null;

    if(e.target.name === input[0].name && e.target.value === input[0].value){
      input[1].checked = Checked; 
      input[2].checked = Checked;
      
      if(input[0].checked === true){
        const valor = input[0].value;
        setTr3(valor);
      }else{
        setTr3(0)
      };
    };
     
    if(e.target.name === input[1].name && e.target.value === input[1].value){
      input[0].checked = Checked;
      input[2].checked = Checked;

      if(input[1].checked === true){
        const valor = input[1].value;
        setTr3(valor);  
      }else{
        setTr3(0)
      }  
    }

    if(e.target.name === input[2].name && e.target.value === input[2].value) {
      input[0].checked = Checked;
      input[1].checked = Checked;
     
      if(input[2].checked === true){
        const valor = input[2].value;
        setTr3(valor);  
      }else{
        setTr3(0)     
      }  
    }
   
  };

  let suma = Number(tr1) + Number(tr2) + Number(tr3);
  let promedio = suma+"/"+7.5
  let puntuacion = Math.round((suma/7.5)*10)

  return (
    <Fragment>
      <div className={`container ${TareaM.tarea_ejemplo}`}>
        <div className={TareaM.commands}>
          <input
            type="button"
            value="Reiniciar"
            id="clear"
            className={TareaM.clear}
            onClick={reinicio}
          />
          <input
            type="button"
            value="Imprimir"
            id="print"
            className={TareaM.print}
            onClick={print}
          />
          <NavLink to="/modulo1_tarea/rubrica" className={TareaM.derecha}>
            <span className={TareaM.volver}>
              <span className={TareaM.simb_volver}>&laquo; </span>Volver
            </span>
          </NavLink>
        </div>
        <div className={`${TareaM.table_ejemplo} row`}>
          <div className="col-8">
            <label htmlFor="activity">Actividad:</label>
            <input type="text" id="activity" className={TareaM.activity} />
            <br />
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" className={TareaM.name} />
          </div>
          <div className="col-4">
            <label htmlFor="date">Fecha:</label>
            <input type="text" id="date" className={TareaM.date} />
            <br />
            {/*<label htmlFor="puntuacion">Puntuacion:</label>
            <input type="text" id="puntuacion" className={TareaM.puntuacion} value={sumaPuntos1} />*/}
            <p>Puntuacion:  {puntuacion} ({promedio})</p>
          </div>
        </div>
        <p className={TareaM.ejemplo}>Rúbrica de ejemplo (4x4)</p>
        <table className={`table-responsive ${TareaM.table}`}>
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">Nivel 1</th>
              <th scope="col">Nivel 2</th>
              <th scope="col">Nivel 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className={TareaM.tr1} id="tr" onClick={selecTr1}>
              <th scope="row">Calidad de las ideas</th>
              <td>
                Analiza y organiza correctamente la información. Interpreta
                adecuadamente los datos y los integra en la solución del
                problema. Genera y propone conclusiones y juicios adecuados al
                problema planteado. <span>(2.5)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-0"
                  id="criterio-0"
                  className={TareaM.criterio}
                  value="2.5"
                />
              </td>
              <td>
                Analiza la información de forma básica aunque no es capaz de
                utilizarla de forma correcta. No sintetiza de un modo totalmente
                adecuado la información consultada. Extrae conclusiones y
                elabora juicios modo no siempre adecuado o de modo parcial.
                <span>(1.75)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-0"
                  id="criterio-0-1"
                  className={TareaM.criterio}
                  value="1.75"
                />
              </td>
              <td>
                No analiza ni organiza correctamente la información. No extrae
                conclusiones, no interpreta los datos, no elabora juicios a
                partir de la misma <span>(1.50)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-0"
                  id="criterio-0-2"
                  className={TareaM.criterio}
                  value="1.50"
                />
              </td>
            </tr>
            <tr className={TareaM.tr2} id="tr2" onClick={selecTr2}>
              <th scope="row">Evolución y profundización de las ideas</th>
              <td>
                Indaga y profundiza correctamente la información relacionando
                los contenidos con las situaciones planteadas en el caso. Genera
                y propone nuevas ideas, conclusiones y soluciones adecuadas a la
                situación problemática planteada en el problema.
                <span>(2.5)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-1"
                  id="criterio-1-0"
                  className={TareaM.criterio}
                  value="2.5"
                />
              </td>
              <td>
                Indaga en la información de los contenidos de forma correcta
                aunque presenta limitaciones a la hora relacionarla con la
                información planteada en el caso. Extrae conclusiones aunque son
                escuetas y ofrece soluciones de forma parcial que no responden a
                la totalidad de la situación planteada. <span>(1.75)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-1"
                  id="criterio-1-1"
                  className={TareaM.criterio}
                  value="1.75"
                />
              </td>
              <td>
                No indaga correctamente en la información de los contenidos del
                módulo en relación al problema planteado. No extrae
                conclusiones, ni interpreta la información, no elabora
                soluciones a partir de las preguntas expuestas en el problema.{" "}
                <span>(1.50)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-1"
                  id="criterio-1-2"
                  className={TareaM.criterio}
                  value="1.50"
                />
              </td>
            </tr>
            <tr className={TareaM.tr3} id="tr3" onClick={selecTr3}>
              <th scope="row">
                Capacidad de síntesis y concreción de la información
              </th>
              <td>
                Sintetiza correctamente la información extrayendo las ideas
                clave y desarrollándolas de manera concreta. <span>(2.5)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-2"
                  id="criterio-2-0"
                  className={TareaM.criterio}
                  value="2.5"
                />
              </td>
              <td>
                Sintetiza algunas ideas extendiéndose demasiado en otras, no
                consigue concretar las ideas de forma adecuada en la totalidad
                del texto. <span>(1.75)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-2"
                  id="criterio-2-1"
                  className={TareaM.criterio}
                  value="1.75"
                />
              </td>
              <td>
                No sintetiza la información se extiende en las ideas y no
                concreta o bien presenta ideas vagas y no las desarrolla
                minimamente.
                <span>(1.50)</span>
                <br />
                <input
                  type="checkbox"
                  name="criterio-2"
                  id="criterio-2-2"
                  className={TareaM.criterio}
                  value="1.50"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default RubricaEjemplo;
