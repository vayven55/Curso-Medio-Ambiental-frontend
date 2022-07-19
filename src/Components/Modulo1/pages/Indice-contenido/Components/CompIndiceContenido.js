import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import indice from "../indiceCont.module.css";

function CompIndiceContenido() {
  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>Índice de contenidos</h2>

        <article>
          <div className={indice.lista_indice}>
            <p>1. La Agenda 2030 como punto de partida.</p>
            <p>
              1.2 Pautas para iniciar un proyecto en el centro abordando los
              ODS.
            </p>
            <p>2. Escuelas eficaces</p>
            <p>2.1 El programa Ecoescuelas: un ejemplo de buenas prácticas</p>
            <p>3. Ambientalización de centros educativos.</p>
            <p>
              3.1 Niveles a tener en cuenta para la implantación de un programa
              ambiental en el centro.
            </p>
            <p>
              3.2 El cuidado del medio ambiente como dimensión de la calidad
              educativa.
            </p>
            <p>4. La Educación Ambiental: caracterización y objetivos.</p>
            <p>
              4.1 La psicología en el contexto escolar y la psicología de la
              Educación Ambiental.
            </p>
            <p>
              4.2 El docente orientado a la Educación Ambiental: consideraciones
              metodológicas.
            </p>
            <p>4.3 Cómo aprenden los alumnos el cuidado del medio ambiente.</p>
            <p>4.4 Prospectiva sostenible: orientar al alumno.</p>
            <p>4.5 Desde lo local a lo global: lo glocal.</p>
            <p>
              5. Modelos filosóficos: Biocentrismo y Ecocentrismo VS
              Antropocentrismo.
            </p>

            <p>5.1 Concienciación y ética ambiental.</p>
            <p>5.2 Despertar el pensamiento crítico.</p>
            <p>
              5.2.1 Fomento del pensamiento crítico: criterios y consideraciones
              metodológicas.
            </p>
            <p>6. Tipos de contenidos en la Educación Ambiental.</p>
            <p>
              6.1 Estrategia y didáctica para la Educación Ambiental en el
              currículo.
            </p>
            <p>6.2 El cambio climático como propuesta de abordaje.</p>
            <p>6.3 Economía circular como propuesta de abordaje.</p>
          </div>
        </article>
        <article>
          <div>
            <div></div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default CompIndiceContenido;
