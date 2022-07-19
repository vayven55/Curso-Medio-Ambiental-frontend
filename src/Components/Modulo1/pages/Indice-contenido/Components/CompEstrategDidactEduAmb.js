import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import Tecnicas from "./componentes/component-EstrategDidactEduAmb/Tecnicas";
import Areas from "./componentes/component-EstrategDidactEduAmb/Areas";
import estrategia from './estrategia.module.css';
import Cuestionario from './componentes/component-EstrategDidactEduAmb/Cuestionario';

const CompEstrategDidactEduAmb = () => {
    
  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>
          6.1 Estrategia y didáctica para la Educación Ambiental en el currículo
        </h2>

        <article>
          <div>
            <div>
              <p>
                <span>
                  Son diversas las áreas desde las que podemos integrar la
                  educación ambiental en los tres niveles de educación primaria
                  desde donde pueden integrarse los distintos tipos de
                  contenidos.
                </span>
              </p>
              <p>
                <span>
                  Dada la complejidad de algunos de los contenidos depende del
                  saber hacer del docente y de su creatividad para aplicar un
                  programa y adaptarlo al nivel curricular la forma en la que
                  serán trabajados.
                </span>
              </p>
              <p>
                <span>
                  Las técnicas dependerán del nivel de primaria, sirvan de
                  sugerencia:
                </span>
              </p>
              <Tecnicas />
              <p>
                <span>
                  En referencia a las actividades que pueden ser iniciadas en el
                  programa deben seguir una tipología secuencial para un acople
                  cognitivo adecuado de los conceptos hasta llegar a culminar
                  según los objetivos en la propuesta final.
                </span>
              </p>
              <ul>
                <li>
                  <span>Actividades de inicio, ideas previas</span>
                </li>
                <li>
                  <span>Actividades de desarrollo</span>
                </li>
                <li>
                  <span>Propuesta final .</span>
                </li>
              </ul>
              <p>
                <span>
                  Las actividades deben ser descritas en sus fichas
                  correspondientes donde quedaran recogidos:
                </span>
              </p>
              <ol>
                <li>
                  <span>Nivel educativo al que corresponde</span>
                </li>
                <li>
                  <span>Descripción</span>
                </li>
                <li>
                  <span>Planteamiento general</span>
                </li>
                <li>
                  <span>Objetivos</span>
                </li>
                <li>
                  <span>Desarrollo</span>
                </li>
                <li>
                  <span>Requisitos y materiales</span>
                </li>
                <li>
                  <span>Temporalización</span>
                </li>
                <li>
                  <span>Competencias que se trabajan</span>
                </li>
                <li>
                  <span>Relación con las áreas de conocimiento</span>
                </li>
                <li>
                  <span>Actividades complementarias</span>
                </li>
              </ol>
              <p>
                <span>
                  Las áreas de conocimiento comunes a los distintos niveles
                  desde las que se puede trabajar son:
                </span>
              </p>
              <Areas />
            </div>
          </div>
        </article>
        <article>
          <div className={estrategia.iframe}>
            <h3>Recursos Multimedia</h3>

            <div>
              <p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/WaBGAKW2m54"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowFullScreen"
                ></iframe>
              </p>
            </div>
          </div>
        </article>
        <Cuestionario />
        
      </section>
    </div>
  );
};

export default CompEstrategDidactEduAmb;
