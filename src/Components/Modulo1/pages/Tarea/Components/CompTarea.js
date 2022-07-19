import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import tarea from "../Tarea.module.css";
import Accordion from "react-bootstrap/Accordion";

function TareaComp() {
  return (
    <div className={mod1.presentacion}>
      <h2>Tarea</h2>
      <section className={tarea.seccion_general}>
        <Accordion defaultActiveKey={"0"}>
          <Accordion.Item eventKey="0" className={tarea.acodeonItem}>
            <Accordion.Header className={tarea.acodeonHeader}>
              <h3>- Competencias:</h3>
            </Accordion.Header>
            <Accordion.Body className={tarea.acordeonBody}>
              <ul>
                <li>
                  <span>
                    Habilidad para ahondar en la información y analizarla
                  </span>
                </li>
                <li>
                  <span>
                    Habilidad para organizar y sintetizar la información
                  </span>
                </li>
                <li>
                  <span>Habilidad para expresar y comunicar ideas</span>
                </li>
                <li>
                  <span>Habilidad resolutiva ante problemas complejos. </span>
                </li>
                <li>
                  <span>Habilidad para trabajar cooperativamente.</span>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={tarea.acodeonItem}>
            <Accordion.Header className={tarea.acodeonHeader}>
              <h3>- Prerrequisitos:</h3>
            </Accordion.Header>

            <Accordion.Body>
              <p>
                <span>
                  Para realizar la tarea deben haber leído y comprendido todos
                  los contenidos del módulo 1 y haber consultando la totalidad
                  de los recursos multimedia y los Para Saber Más.
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className={tarea.acodeonItem}>
            <Accordion.Header className={tarea.acodeonHeader}>
              <h3>- Duración:</h3>
            </Accordion.Header>

            <Accordion.Body>
              <p>
                <span>
                  Se estima que la tarea puede conllevarle aproximadamente unas
                  20 horas de dedicación.
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={tarea.acodeonItem}>
            <Accordion.Header className={tarea.acodeonHeader}>
              <h3>- Tareas:</h3>
            </Accordion.Header>

            <Accordion.Body>
              <ol>
                <li>
                  <span>
                    Tras leer el problema debéis agruparos <strong>por</strong>{" "}
                    <strong>parejas</strong> y <strong>buscar</strong> la
                    <strong>información</strong> que consideréis más relevante
                    en los contenidos y recursos del Módulo 1 en relación a lo
                    expuesto.
                  </span>
                </li>
              </ol>
              <p>
                <span>- Planteamiento del problema:</span>
              </p>
              <p>
                <span>
                  Un centro escolar no tiene integración curricular de ningún
                  tipo en materia ambiental, no existe conciencia ambiental por
                  parte del personal de administración y servicios, órganos de
                  gobierno, órganos de coordinación docente, familias y alumnos.
                  Toda la comunidad educativa en su conjunto muestra una falta
                  de respeto y conocimiento hacia el medio ambiente que se puede
                  resumir en los siguientes puntos:
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    La gran mayoría de los residuos que se generan en el comedor
                    son desechables y plásticos.
                  </span>
                </li>
                <li>
                  <span>No se realiza separación de residuos.</span>
                </li>
                <li>
                  <span>
                    Espacios amplios y zonas verdes desaprovechadas y mal
                    cuidadas con restos de basura que tienden a acumularse en
                    los espacios exteriores de la escuela.
                  </span>
                </li>
                <li>
                  <span>
                    Se desperdicia en exceso el agua de los baños y las zonas
                    comunes (fuentes en el interior y el exterior)
                  </span>
                </li>
                <li>
                  <span>Contaminación acústica.</span>
                </li>
                <li>
                  <span>
                    Excesivo gasto energético (luces, calefacción, aires
                    acondicionados…)
                  </span>
                </li>
                <li>
                  <span>
                    Numerosos vehículos se amontonan en las puertas del colegio
                    a las horas de entrada y salida de la escuela provocando
                    ruidos y contaminación.
                  </span>
                </li>
                <li>
                  <span>
                    Las conductas disruptivas de los alumnos hacia el medio
                    ambiente son evidentes dentro del centro escolar.
                  </span>
                </li>
              </ul>
              <ol>
                <li>
                  <span>
                    ¿Se pueden clasificar las diferentes situaciones atendiendo
                    a diferentes criterios?
                  </span>
                </li>
                <li>
                  <span>
                    ¿Qué responsabilidades tienen los diferentes grupos de
                    personas que aparecen?
                  </span>
                </li>
                <li>
                  <span>
                    ¿Quiénes pueden iniciar un cambio en la situación? ¿De qué
                    manera?
                  </span>
                </li>
              </ol>
              <ol>
                <li>
                  <span>
                    Debéis <strong>seleccionar</strong>
                    la <strong>información</strong> más relevante del contenido
                    y <strong>organizarla</strong>
                    para <strong>responder</strong> a las{" "}
                    <strong>preguntas</strong> planteadas en el problema.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Elaborar</strong>un
                    <strong>resumen</strong> de manera{" "}
                    <strong>individual</strong> incorporando las
                    <strong>ideas</strong> <strong>principales</strong> de la
                    información que habéis consultado y seleccionado y
                    compartirlo en el Foro del Módulo 1.
                  </span>
                  <span></span>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={tarea.acodeonItem}>
            <Accordion.Header className={tarea.acodeonHeader}>
              <h3>- Evaluación:</h3>
            </Accordion.Header>

            <Accordion.Body>
              <p>
                <span>
                  <span>
                    La nota máxima de la tarea es de 7,5, para superar la tarea
                    se debe obtener una calificación mínima de 3,75. Los
                    criterios de evaluación están explicitados en la rúbrica que
                    acompaña a la tarea del Módulo 1.
                  </span>
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
}

export default TareaComp;
