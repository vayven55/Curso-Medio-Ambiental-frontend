import React, { Fragment } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import TareaM from '../Tarea.module.css';
import { NavLink } from "react-router-dom";
//import RubricaEjemplo from '../RubricaEjemplo';

function CompRubricaEva() {

  return (
    <Fragment>
      
      <div className={mod1.presentacion}>
      
        <section className={TareaM.seccion_general}>
          <h2>Rúbrica de evaluación</h2>
          <article>
            <div>
              <h3 className={TareaM.h3Principal}>Rúbrica</h3>
              <div>
                <div>
                  <div>
                    <p className={TareaM.rubricaEjemplo}>
                      Rúbrica de ejemplo (4x4)
                      <NavLink to="/modulo1_tarea/rubrica_ejemplo" >Aplicar</NavLink> 
                    </p>
                    <table className="table-responsive">
                      
                      
                      
                      <thead>
                        <tr>
                          <th scope="col">&nbsp;</th>
                          <th scope="col">Nivel 1</th>
                          <th scope="col">Nivel 2</th>
                          <th scope="col">Nivel 3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={TareaM.tr1}>
                          <th scope="row">Calidad de las ideas</th>
                          <td>
                            Analiza y organiza correctamente la información.
                            Interpreta adecuadamente los datos y los integra en
                            la solución del problema. Genera y propone
                            conclusiones y juicios adecuados al problema
                            planteado. <span>(2.5)</span>
                          </td>
                          <td>
                            Analiza la información de forma básica aunque no es
                            capaz de utilizarla de forma correcta. No sintetiza
                            de un modo totalmente adecuado la información
                            consultada. Extrae conclusiones y elabora juicios
                            modo no siempre adecuado o de modo parcial.
                            <span>(1.75)</span>
                          </td>
                          <td>
                            No analiza ni organiza correctamente la información.
                            No extrae conclusiones, no interpreta los datos, no
                            elabora juicios a partir de la misma{" "}
                            <span>(1.50)</span>
                          </td>
                        </tr>
                        <tr className={TareaM.tr2}>
                          <th scope="row">Evolución y profundización de las ideas</th>
                          <td>
                            Indaga y profundiza correctamente la información
                            relacionando los contenidos con las situaciones
                            planteadas en el caso. Genera y propone nuevas
                            ideas, conclusiones y soluciones adecuadas a la
                            situación problemática planteada en el problema.
                            <span>(2.5)</span>
                          </td>
                          <td>
                            Indaga en la información de los contenidos de forma
                            correcta aunque presenta limitaciones a la hora
                            relacionarla con la información planteada en el
                            caso. Extrae conclusiones aunque son escuetas y
                            ofrece soluciones de forma parcial que no responden
                            a la totalidad de la situación planteada.{" "}
                            <span>(1.75)</span>
                          </td>
                          <td>
                            No indaga correctamente en la información de los
                            contenidos del módulo en relación al problema
                            planteado. No extrae conclusiones, ni interpreta la
                            información, no elabora soluciones a partir de las
                            preguntas expuestas en el problema.{" "}
                            <span>(1.50)</span>
                          </td>
                        </tr>
                        <tr className={TareaM.tr1}>
                          <th scope="row">
                            Capacidad de síntesis y concreción de la información
                          </th>
                          <td>
                            Sintetiza correctamente la información extrayendo
                            las ideas clave y desarrollándolas de manera
                            concreta. <span>(2.5)</span>
                          </td>
                          <td>
                            Sintetiza algunas ideas extendiéndose demasiado en
                            otras, no consigue concretar las ideas de forma
                            adecuada en la totalidad del texto.{" "}
                            <span>(1.75)</span>
                          </td>
                          <td>
                            No sintetiza la información se extiende en las ideas
                            y no concreta o bien presenta ideas vagas y no las
                            desarrolla minimamente. <span>(1.50)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/*<ul className="">
                      <li className="">Actividad</li>
                      <li className="">Nombre</li>
                      <li className="">Fecha</li>
                      <li className="">Puntuación</li>
                      <li className="">Notas</li>
                      <li className="">Reiniciar</li>
                      <li className="">Imprimir</li>
                      <li className="">Aplicar</li>
                      <li className="">Ventana nueva</li>
                    </ul>*/}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Fragment>
  );
}

export default CompRubricaEva;
