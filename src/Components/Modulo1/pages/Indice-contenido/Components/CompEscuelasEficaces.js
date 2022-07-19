import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import epigrafe1 from "../../../assets/img/epigrafe1.jpg";
import escuela from "./escuelas.module.css";
import Valores from "./componentes/Component-Escuelas/Valores_comp";
import Liderazgo from "./componentes/Component-Escuelas/Liderazgo";
import Convicciones from "./componentes/Component-Escuelas/fuertes_convic";
import Ejemplificacion from "./componentes/Component-Escuelas/ejemplefica_conduc";
import Perfeccionamiento from "./componentes/Component-Escuelas/Perfec_in_situ";
import Planificacion from "./componentes/Component-Escuelas/Planific_Instituc";
import Clima from "./componentes/Component-Escuelas/Clima";
import Participacion from "./componentes/Component-Escuelas/Participacion";

const trabajoEnEquipo = () => {
  "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=950,height=600,left='+(screen.availWidth/2-475)+',top='+(screen.availHeight/2-300)+'');return false;";
};

const CompEscuelasEficaces = () => {
  const [verdadero, setVerdadero] = useState(false);
  const [lider, setLider] = useState(false);
  const [convicciones, setConvicciones] = useState(false);
  const [ejemplificacion, setEjemplificacion] = useState(false);
  const [perfeccionamiento, setPerfeccionamiento] = useState(false);
  const [planificacion, setPlanificacion] = useState(false);
  const [clima, setClima] = useState(false);
  const [participacion, setParticipacion] = useState(false);

  const initialState = () => {
    setVerdadero(false);
    setLider(false);
    setConvicciones(false);
    setEjemplificacion(false);
    setPerfeccionamiento(false);
    setPlanificacion(false);
    setClima(false);
    setParticipacion(false);
    return;
  };

  const valores = () => {
    initialState();
    setVerdadero(!verdadero);
  };

  const liderazgo = () => {
    initialState();
    setLider(!lider);
  };
  const conviccion = () => {
    initialState();
    setConvicciones(!convicciones);
  };
  const ejemplif = () => {
    initialState();
    setEjemplificacion(!ejemplificacion);
  };
  const perfeccion = () => {
    initialState();
    setPerfeccionamiento(!perfeccionamiento);
  };
  const planifi = () => {
    initialState();
    setPlanificacion(!planificacion);
  };
  const climax = () => {
    initialState();
    setClima(!clima);
  };
  const participa = () => {
    initialState();
    setParticipacion(!participacion);
  };
  const [rad1a, setRad1a] = useState(false);
  const [rad1b, setRad1b] = useState(false);
  const [rad2a, setRad2a] = useState(false);
  const [rad2b, setRad2b] = useState(false);
  const [rad3a, setRad3a] = useState(false);
  const [rad3b, setRad3b] = useState(false);
  const [rad4a, setRad4a] = useState(false);
  const [rad4b, setRad4b] = useState(false);
  const [rad5a, setRad5a] = useState(false);
  const [rad5b, setRad5b] = useState(false);
  const [rad6a, setRad6a] = useState(false);
  const [rad6b, setRad6b] = useState(false);
  const [rad7a, setRad7a] = useState(false);
  const [rad7b, setRad7b] = useState(false);

  const radio1a = () => {
    setRad1b(false);
    setRad1a(true);
  };
  const radio1b = () => {
    setRad1a(false);
    setRad1b(true);
  };

  const radio2a = () => {
    setRad2b(false);
    setRad2a(true);
  };
  const radio2b = () => {
    setRad2a(false);
    setRad2b(true);
  };

  const radio3a = () => {
    setRad3b(false);
    setRad3a(true);
  };
  const radio3b = () => {
    setRad3a(false);
    setRad3b(true);
  };

  const radio4a = () => {
    setRad4b(false);
    setRad4a(true);
  };
  const radio4b = () => {
    setRad4a(false);
    setRad4b(true);
  };

  const radio5a = () => {
    setRad5b(false);
    setRad5a(true);
  };
  const radio5b = () => {
    setRad5a(false);
    setRad5b(true);
  };

  const radio6a = () => {
    setRad6b(false);
    setRad6a(true);
  };
  const radio6b = () => {
    setRad6a(false);
    setRad6b(true);
  };

  const radio7a = () => {
    setRad7b(false);
    setRad7a(true);
  };
  const radio7b = () => {
    setRad7a(false);
    setRad7b(true);
  };

  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>2.Escuelas eficaces</h2>

        <article className="">
          <div id="" className="">
            <p className={escuela.img}>
              <img
                src={epigrafe1}
                alt="Reunión de profesores"
                title="Trabajo cooperativo, escuelas eficaces"
              />
            </p>
            <p>
              <span>
                Como punto introductorio de este modulo, haremos hincapié en el
                aspecto que ataña a la mejora de la calidad de la enseñanza y la
                formación. <strong>Los equipos docentes</strong>{" "}
                <strong>y</strong> en general todos los agentes que integran una
                escuela y <strong>comunidad educativa</strong> contribuyen
                mediante su
                <strong> trabajo cooperativo</strong> al funcionamiento de{" "}
                <strong>escuelas competentes</strong>. Es por ello necesario
                explicitar, algunas de las
                <strong> características</strong> que hacen de las escuelas{" "}
                <strong> centros eficaces</strong>.
              </span>
            </p>
            <p>
              <span>
                Algunas de las características de las escuelas eficaces son:
                (Martin –Moreno, 1996. p. 162-163)
              </span>
            </p>
            <div className="">
              <ul className={escuela.ul}>
                <div className={escuela.divCentrado}>
                  <li>
                    <span onClick={valores}>Valores Compartidos:</span>
                  </li>
                  <li>
                    <span onClick={liderazgo}>Liderazgo:</span>
                  </li>
                  <li>
                    <span onClick={conviccion}>Fuertes convicciones:</span>
                  </li>
                  <li>
                    <span onClick={ejemplif}>
                      Ejemplificación de conductas:
                    </span>
                  </li>
                
                  <li>
                    <span onClick={perfeccion}>Perfeccionamiento in situ:</span>
                  </li>
                  <li>
                    <span onClick={planifi}>Planificación Institucional:</span>
                  </li>
                  <li>
                    <span onClick={climax}>Clima:</span>
                  </li>
                  <li>
                    <span onClick={participa}>Participación:</span>
                  </li>
                </div>
              </ul>
              {verdadero ? <Valores /> : null}
              {lider ? <Liderazgo /> : null}
              {convicciones ? <Convicciones /> : null}
              {ejemplificacion ? <Ejemplificacion /> : null}
              {perfeccionamiento ? <Perfeccionamiento /> : null}
              {planificacion ? <Planificacion /> : null}
              {clima ? <Clima /> : null}
              {participacion ? <Participacion /> : null}
            </div>
          </div>
        </article>
        <article className={escuela.marginVerdadero_falso}>
          
            <h2 className="">Pregunta Verdadero-Falso</h2>

            <div className="">
              <div className="">
                <div id="" className="">
                  <p>
                    Tras la lectura del primer epígrafe, señala con verdadero o
                    falso los siguientes enunciados:
                  </p>
                </div>
                <section className={escuela.section}>
                  <form name="" action="#" className="">
                    <div id="" className="">
                      <p>
                        1.  Los profesores con más responsabilidades son quienes
                        deben hacer propuestas de innovación haciendo uso de su
                        autonomía y autoridad.
                      </p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio1a}
                          type="radio"
                          name="tipo"
                          id="radio1a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio1b}
                          type="radio"
                          name="tipo"
                          id="radio1b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad1a ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                    {rad1b ? (
                      <p className={escuela.correcto}>Correcto</p>
                    ) : null}
                  </form>
                </section>
                <section className="">
                  <form name="" action="#" className="">
                    <div id="" className="">
                      <p>
                        2. El clima organizacional en las escuelas eficaces
                        depende del equilibrio del liderazgo y la participación
                        teniendo en cuenta los valores compartidos.
                      </p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio2a}
                          type="radio"
                          name="tipo"
                          id="radio2a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio2b}
                          type="radio"
                          name="tipo"
                          id="radio2b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad2a ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                    {rad2b ? (
                      <p className={escuela.correcto}>Correcto</p>
                    ) : null}
                  </form>
                </section>
                <section className="">
                  <form name="" action="#" className="">
                    <div id="" className="">
                      <p>
                        3. Las reuniones de la comunidad institucional en las
                        que se intentan buscar soluciones a problemas y se
                        revisan los valores compartidos corresponden a la
                        planificación institucional.
                      </p>
                      <p></p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio3a}
                          type="radio"
                          name="tipo"
                          id="radio3a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio3b}
                          type="radio"
                          name="tipo"
                          id="radio3b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad3a ? (
                      <p className={escuela.correcto}>Correcto</p>
                    ) : null}
                    {rad3b ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                  </form>
                </section>
                <section className="">
                  <form name="" action="#" className="">
                    {/*<h2 className="">Pregunta 4</h2>*/}
                    <div id="" className="">
                      <p>
                        4. Cuando se trata de tomar decisiones específicas o
                        técnicas en lo que se refiere a la participación y la
                        colaboración debe ser grupal. 
                      </p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio4a}
                          type="radio"
                          name="tipo"
                          id="radio4a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio4b}
                          type="radio"
                          name="tipo"
                          id="radio4b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad4a ? (
                      <p className={escuela.correcto}>ICorrecto</p>
                    ) : null}
                    {rad4b ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                  </form>
                </section>
                <section className="">
                  <form name="" action="#" className="">
                    <div id="" className="">
                      <p>
                        5. Que la estructura de un centro organizacional eficaz
                        sea solida depende en gran medida de la unión entre los
                        valores compartidos y el acuerdo sobre las estrategias a
                        seguir
                      </p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio5a}
                          type="radio"
                          name="tipo"
                          id="radio5a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio5b}
                          type="radio"
                          name="tipo"
                          id="radio5b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad5a ? (
                      <p className={escuela.correcto}>Correcto</p>
                    ) : null}
                    {rad5b ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                  </form>
                </section>
                <section className="">
                  <form name="" action="#" className="">
                    <div id="" className="">
                      <p>
                        6. Tener las mismas opiniones y/o convicciones en lo que
                        se refiere a temas de enseñanza y aprendizaje limita en
                        muchas ocasiones la práctica educativa.
                      </p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio6a}
                          type="radio"
                          name="tipo"
                          id="radio6a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio6b}
                          type="radio"
                          name="tipo"
                          id="radio6b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad6a ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                    {rad6b ? (
                      <p className={escuela.correcto}>Correcto</p>
                    ) : null}
                  </form>
                </section>
                <section className="">
                  <form name="" action="#" className="">
                    {/*<h2 className="">Pregunta 7</h2>*/}
                    <div id="" className="">
                      <p>
                        7.Renovar la cultura de los centros de forma periódica
                        mediante el entrenamiento de los equipos docentes es un
                        indicador de calidad. 
                      </p>
                    </div>
                    <p className="">
                      <label htmlFor="">
                        <input
                          onChange={radio7a}
                          type="radio"
                          name="tipo"
                          id="radio7a"
                          className={escuela.input}
                        />
                        Verdadero
                      </label>
                      <label htmlFor="">
                        <input
                          onChange={radio7b}
                          type="radio"
                          name="tipo"
                          id="radio7b"
                          className={escuela.input}
                        />
                        Falso
                      </label>
                    </p>
                    {rad7a ? (
                      <p className={escuela.correcto}>Correcto</p>
                    ) : null}
                    {rad7b ? (
                      <p className={escuela.incorrecto}>Incorrecto</p>
                    ) : null}
                  </form>
                </section>
              </div>
            </div>
        </article>
        <article className={escuela.recursos_multimedia}>
          <div className="">
            <h2 className={escuela.recurso_multimedia}>Recursos Multimedia</h2>

            <div className="">
              <div className="">
                <div id="" className="">
                  <div className={escuela.iframe}>
                    <p className={escuela.iframe}>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3-OP-97pY4A"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowFullScreen"
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={escuela.para_saber_mas}>
          <div className="">
            <h2 className="">Para Saber Más</h2>

            <div className="">
              <div className="">
                <div id="" className="">
                  <div className="">
                    <p>
                      <a
                        href="http://blog.tiching.com/10-ventajas-educativas-de-que-los-docentes-trabajen-en-equipo/"
                        onClick={trabajoEnEquipo}
                      >
                        Diez ventajas educativas de que los docentes trabajen en
                        equipo.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompEscuelasEficaces;
