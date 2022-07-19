import React from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import bombilla from "../../../assets/img/bombillacerebro.jpg";
import pensamiento from "./pensamientoCrit.module.css";

const CompPensamientoCritico = () => {
  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>5.2 Despertar del pensamiento crítico</h2>

        <article className={pensamiento.article}>
          <div>
            <div>
              <p className={pensamiento.img}>
                <span>
                  <img
                    src={bombilla}
                    alt="Ilustración cerebro con forma de bombilla"
                    title="El despertar del pensamiento crítico"
                    width="280"
                    height="200"
                  />
                </span>
              </p>
              <p>
                <span>
                  Hay una urgente necesidad de un cambio en las conductas y en
                  la forma de relacionarnos con el medio ambiente, haciéndose
                  patente la necesidad de una <strong>adquisición</strong> de
                  <strong>valores</strong> y <strong>actitudes</strong> que
                  permitan replantear ciertas actuaciones  conducentes al
                  agravio de los problemas ambientales. Romero (2015)
                </span>
              </p>
              <p>
                <span>
                  La educación no termina cuando las personas han adquirido en
                  la edad adulta una preparación profesional y están listas para
                  incorporarse a la vida laboral, la verdadera educación va
                  mucho más allá,  es un proceso de <strong>desarrollo</strong>{" "}
                  de la
                  <strong>conciencia</strong>. Novo (2018)
                </span>
              </p>
              <p>
                <span>
                  Hacer frente a la difícil tarea de un cambio de valores y
                  actitudes estando inmersos en el ritmo acelerado de las
                  sociedades actuales supone en gran medida conocer la
                  importancia del valor de incentivar la{" "}
                  <strong>capacidad</strong> <strong>crítica</strong> de los
                  educandos. Crear conciencia, enseñar a pensar, observar desde
                  otros ángulos que no son los habituales, salir de la zona de
                  confort y promover el <strong>aprendizaje coopertivo</strong>,
                  son opciones pedagógicas que promoverán un modelo de persona
                  con unos determinados valores y actitudes  opuestos a las
                  conductas y  pensamientos automáticos.
                </span>
              </p>
              <p>
                <span>
                  Por todo ello se considera necesario incidir  sobre una serie
                  de <strong>puntos clave</strong> en los que es necesario
                  actuar:
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    La cultura actual basada en la <strong>prevalencia</strong>{" "}
                    del <strong>ego</strong> en las apariencias y e la
                    superficialidad.
                  </span>
                </li>
                <li>
                  <span>
                    Los medios de comunicación y la publicidad que contribuyen a
                    crearnos la sensación de necesidad y abundancia creando
                    vacíos emocionales y una desconexión de nosotros mismos.
                  </span>
                </li>
                <li>
                  <span>
                     La
                    <strong>manera</strong> de <strong>relacionamos</strong> con
                    nosotros, con los otros y con el  medio ambiente.
                  </span>
                </li>
                <li>
                  <span>
                    La manera de  <strong>consumir</strong> y desechar.
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  Es esencial fomentar un tipo de{" "}
                  <strong>pensamiento crítico </strong>a  edades tempranas y la
                  escuela primaria se convierte en escenario protagonista para
                  esta labor. Los alumnos deben conocer los problemas actuales y
                  a partir de estos trabajar cooperativamente buscando
                  alternativas y soluciones, será el docente quien como
                  facilitador  de estos procesos guíe al alumno y fomente el
                  desarrollo de un pensamiento guiado por la ética y los valores
                  ambientales despertando la curiosidad de su alumnado.
                </span>
              </p>
            </div>
          </div>
        </article>
        {/*<article>
          <div>
            <h2>Actividad</h2>

            <div>
              <div>
                <div>
                  <p>
                    ¿De qué manera fomentarías el pensamiento crítico en tu
                    alumnado acerca del cambio climático? Te invitamos a que
                    compartas la respuesta a esta cuestión con tus compañeros en
                    el foro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>*/}
        <article className={pensamiento.article}>
          <div>
            <h2>Para Saber Más</h2>

            <div>
              <p>
                <a
                  href="https://www.academia.edu/36499753/DESARROLLO_DE_PENSAMIENTO_CR%C3%8DTICO_EN_EDUCACI%C3%93N_AMBIENTAL_A_TRAV%C3%89S_DE_LA_IMPLEMENTACI%C3%93N_DE_UNA_UNIDAD_DID%C3%81CTICA_SOBRE_CONSERVACION_DE_LA_BIODIVERSIDAD_DEL_TOLIMA"
                  title="DESARROLLO DE PENSAMIENTO CRÍTICO EN EDUCACIÓN AMBIENTAL A TRAVÉS DE LA IMPLEMENTACIÓN DE UNA UNIDAD DIDÁCTICA SOBRE CONSERVACION DE LA BIODIVERSIDAD DEL TOLIMA"
                >
                  DESARROLLO DE PENSAMIENTO CRÍTICO EN EDUCACIÓN AMBIENTAL A
                  TRAVÉS DE LA IMPLEMENTACIÓN DE UNA UNIDAD DIDÁCTICA SOBRE
                  CONSERVACION DE LA BIODIVERSIDAD DEL TOLIMA
                </a>
              </p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h2>Recursos Multimedia</h2>

            <div>
              <p className={pensamiento.img}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/WAJVkZdcOYk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowFullScreen"
                ></iframe>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompPensamientoCritico;
