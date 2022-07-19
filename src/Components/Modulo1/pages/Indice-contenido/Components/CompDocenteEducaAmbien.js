import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import docente_img from "../../../assets/img/epigrafe3.JPG";
import docente from "./docente.module.css";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";

const CompDocenteEducaAmbien = () => {
  const experiencia = () => {
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');";
  };
  const estrategia = () => {
    "window.open(this.href,'eXeLearningPopup','scrollbars=yes,resizable=yes,width=900,height=650,left='+(screen.availWidth/2-450)+',top='+(screen.availHeight/2-325)+'');";
  };

  const [caracteristicas, setCaracteristicas] = useState({
    asumir: true,
    emplear: false,
    entenderProfesor: false,
    comprender: false,
    entenderEscuela: false,
  });

  const { asumir, emplear, entenderProfesor, comprender, entenderEscuela } =
    caracteristicas;

  const adelante = () => {
    if (asumir) {
      setCaracteristicas({
        asumir: false,
        emplear: true,
        entenderProfesor: false,
        comprender: false,
        entenderEscuela: false,
      });
    } else if (emplear) {
      setCaracteristicas({
        asumir: false,
        emplear: false,
        entenderProfesor: true,
        comprender: false,
        entenderEscuela: false,
      });
    } else if (entenderProfesor) {
      setCaracteristicas({
        asumir: false,
        emplear: false,
        entenderProfesor: false,
        comprender: true,
        entenderEscuela: false,
      });
    } else if (comprender) {
      setCaracteristicas({
        asumir: false,
        emplear: false,
        entenderProfesor: false,
        comprender: false,
        entenderEscuela: true,
      });
    } else if (entenderEscuela) {
      setCaracteristicas({
        asumir: true,
        emplear: false,
        entenderProfesor: false,
        comprender: false,
        entenderEscuela: false,
      });
    }
  };

  const atras = () => {
    if (asumir) {
      setCaracteristicas({
        asumir: false,
        emplear: false,
        entenderProfesor: false,
        comprender: false,
        entenderEscuela: true,
      });
    } else if (emplear) {
      setCaracteristicas({
        asumir: true,
        emplear: false,
        entenderProfesor: false,
        comprender: false,
        entenderEscuela: false,
      });
    } else if (entenderProfesor) {
      setCaracteristicas({
        asumir: false,
        emplear: true,
        entenderProfesor: false,
        comprender: false,
        entenderEscuela: false,
      });
    } else if (comprender) {
      setCaracteristicas({
        asumir: false,
        emplear: false,
        entenderProfesor: true,
        comprender: false,
        entenderEscuela: false,
      });
    } else if (entenderEscuela) {
      setCaracteristicas({
        asumir: false,
        emplear: false,
        entenderProfesor: false,
        comprender: true,
        entenderEscuela: false,
      });
    }
  };

  const uno = () => {
    setCaracteristicas({
      asumir: true,
      emplear: false,
      entenderProfesor: false,
      comprender: false,
      entenderEscuela: false,
    });
  };
  const dos = () => {
    setCaracteristicas({
      asumir: false,
      emplear: true,
      entenderProfesor: false,
      comprender: false,
      entenderEscuela: false,
    });
  };
  const tres = () => {
    setCaracteristicas({
      asumir: false,
      emplear: false,
      entenderProfesor: true,
      comprender: false,
      entenderEscuela: false,
    });
  };
  const cuatro = () => {
    setCaracteristicas({
      asumir: false,
      emplear: false,
      entenderProfesor: false,
      comprender: true,
      entenderEscuela: false,
    });
  };
  const cinco = () => {
    setCaracteristicas({
      asumir: false,
      emplear: false,
      entenderProfesor: false,
      comprender: false,
      entenderEscuela: true,
    });
  };

  const [opcion1, setOpcion1] = useState("");
  const [opcion2, setOpcion2] = useState("");
  const [opcion3, setOpcion3] = useState("");

  const pregunta1 = (e) => {
    if (e.target.value === "True") {
      setOpcion1("correcto1");
    } else {
      setOpcion1("incorrecto1");
    }
  };
  const pregunta2 = (e) => {
    if (e.target.value === "True") {
      setOpcion2("correcto2");
    } else {
      setOpcion2("incorrecto2");
    }
  };
  const pregunta3 = (e) => {
    if (e.target.value === "True") {
      setOpcion3("correcto3");
    } else {
      setOpcion3("incorrecto3");
    }
  };

  const [mostrarOpcion, setMostrarOpcion] = useState({
    opcion1m: false,
    opcion2m: false,
    opcion3m: false,
  });

  const mostrarOpcion1 = (e) => {
    if (opcion1 === "correcto") {
      setMostrarOpcion({ ...mostrarOpcion, opcion1m: true });
    } else {
      setMostrarOpcion({ ...mostrarOpcion, opcion1m: true });
    }
  };
  const mostrarOpcion2 = (e) => {
    if (opcion2 === "correcto") {
      setMostrarOpcion({ ...mostrarOpcion, opcion2m: true });
    } else {
      setMostrarOpcion({ ...mostrarOpcion, opcion2m: true });
    }
  };
  const mostrarOpcion3 = (e) => {
    if (opcion3 === "correcto") {
      setMostrarOpcion({ ...mostrarOpcion, opcion3m: true });
    } else {
      setMostrarOpcion({ ...mostrarOpcion, opcion3m: true });
    }
  };

  return (
    <div id="" className={mod1.presentacion}>
      <section>
        <h2>
          4.2 El docente orientado a la Educación Ambiental: consideraciones
          metodológicas
        </h2>

        <article className={docente.article}>
          <p className={docente.imagen}>
            <img
              src={docente_img}
              alt="Un profesor inclinado a la altura de los alumnos habla con ellos"
              title="El docente orientado a la Educación Ambiental"
            />
          </p>
          <p>
            <span>
              En los llamados currículos abiertos se dan dos situaciones: la 
              <strong>autonomía </strong>de los<strong> centros </strong>
              educativos  aumenta y el papel del<strong> profesorado</strong>
              pasa de ser transmisor a <strong>facilitador</strong> e{" "}
              <strong>investigador</strong>.
            </span>
          </p>
          <p>
            <span>
              La formación del profesorado en educación ambiental está
              directamente relacionada con el concepto de calidad de la
              enseñanza<strong>.</strong> La aceleración y los constantes
              cambios característicos de la sociedad actual apelan a la mejora
              de la formación de los docentes.
            </span>
          </p>
          <p>
            <span>
              Adquirir nuevas
              <strong>competencias</strong>  facilita los procesos para que
              la práctica profesional sea de calidad y permite compensar la
              formación inicial que suele ser, en el ámbito de la EA, bastante
              escasa.
            </span>
          </p>
          <p className={docente.margin}>
            Hay una serie de características en el modelo pedagógico orientado a
            la EA que los docentes deben incorporar en su proceso formativo y en
            su práctica:
          </p>
          <div className="container">
            <div className="row">
              <div className={`col-1 ${docente.atras}`}>
                <div className={docente.centrar} onClick={atras}>
                  <BsCaretLeft className={docente.centroIz} />
                </div>
              </div>
              <div className={`col-10 ${docente.contenedor}`}>
                {asumir ? (
                  <div>
                    <h4>
                      Asumir que el conocimiento se construye a partir del
                      sujeto que aprende
                    </h4>
                    <h5>
                      En todas sus dimensiones no sólo a través de la dimensión
                      cognitiva es muy importante poner en alza  la 
                      <strong>dimensión afectiva</strong> y establecer
                      relaciones con una <strong>visión</strong> 
                      <strong>sistémica</strong> y <strong>procesual.</strong>
                    </h5>
                  </div>
                ) : null}
                {emplear ? (
                  <div>
                    <h4>
                      Emplear <strong>metodologías</strong> centradas en 
                      <strong>problemas</strong>
                    </h4>
                    <h5>Orientándolas a la toma de decisiones.</h5>
                  </div>
                ) : null}
                {entenderProfesor ? (
                  <div>
                    <h4>
                      Entender que todo profesor puede implementar la Educación
                      Ambiental
                    </h4>
                    <h5>
                      Sea cuál sea su perfil y su área curricular de ejercicio.
                    </h5>
                  </div>
                ) : null}
                {comprender ? (
                  <div>
                    <h4>
                      Comprender el <strong>mundo</strong> como un 
                      <strong>sistema</strong> de partes 
                      <strong>dependientes</strong>
                    </h4>
                    <h5>
                      Relacionándolo con el fenómeno educativo y actuando de
                      forma responsable y coherente.
                    </h5>
                  </div>
                ) : null}
                {entenderEscuela ? (
                  <div>
                    <h4>
                      Entender la <strong>escuela</strong> como 
                      <strong>puerta al exterior</strong>
                    </h4>
                    <h5>
                      Con disposición a implicarse en los problemas de
                      la realidad, ser  capaz de facilitar la reflexión y de
                      concretar actividades que desarrollen aprendizajes
                      significativos vinculan  dicha realidad externa a la
                      escuela.
                    </h5>
                  </div>
                ) : null}
              </div>
              <div className={`col-1 ${docente.adelante}`}>
                <div className={docente.centrar} onClick={adelante}>
                  <BsCaretRight className={docente.centroDer} />
                </div>
              </div>
            </div>
          </div>
          <div className={docente.carrusel}>
            <h3 onClick={uno} className={asumir ? docente.resaltar : ""}>
              1
            </h3>
            <h3 onClick={dos} className={emplear ? docente.resaltar : ""}>
              2
            </h3>
            <h3
              onClick={tres}
              className={entenderProfesor ? docente.resaltar : ""}
            >
              3
            </h3>
            <h3 onClick={cuatro} className={comprender ? docente.resaltar : ""}>
              4
            </h3>
            <h3
              onClick={cinco}
              className={entenderEscuela ? docente.resaltar : ""}
            >
              5
            </h3>
          </div>
          <p>
            <strong>Estrategias </strong>y<strong> procedimientos</strong> a
            tener en cuenta:
          </p>
          <ul>
            <li>
              Orientar la práctica hacia un modelo{" "}
              <strong>constructivista.</strong>
            </li>
            <li>
              Optar por modelos comprometidos y menos individualista basado en
              la <strong>cooperación.</strong>
            </li>
            <li>
              Tomar el papel de<strong> guía</strong>y
              <strong> facilitador</strong> y agentes de cambio orientados a la
              investigación-acción.
            </li>
            <li>Trabajar desde lo local para influir en lo global. </li>
            <li>
              Trabajar con modelos orientados a la <strong>acción.</strong>
            </li>
          </ul>
        </article>
        <article className="" id="">
          <Accordion>
            <Accordion.Item eventKey="0" className={docente.acordeon_item}>
              <Accordion.Header className={docente.acordeon_header}>
                <span>?</span>Pregunta de Selección Múltiple
              </Accordion.Header>
              <Accordion.Body>
                <div className={docente.body}>
                  <section className="">
                    <form name="" action="#" className="">
                      <h3 className={docente.pregunta}>Preguntas</h3>
                      <div id="" className="">
                        <p>
                          1. ¿Qué perfil de profesor puede implementar la EA?
                        </p>
                      </div>
                      <section className="" onChange={pregunta1}>
                        <p className="">
                          <input type="radio" value="True" name="opcion1" />
                          a) Cualquier profesor.
                        </p>

                        <p className="">
                          <input type="radio" value="False" name="opcion1" />
                          b) Profesores con intereses ambientales.
                        </p>

                        <p className="">
                          <input type="radio" value="False" name="opcion1" />
                          c) Profesores con un perfil orientado a la ciencia
                        </p>
                        {mostrarOpcion.opcion1m && opcion1 === "correcto1" ? (
                          <p>
                            <strong>Correcto</strong>
                          </p>
                        ) : null}
                        {mostrarOpcion.opcion1m && opcion1 === "incorrecto1" ? (
                          <p>
                            <strong>Incorrecto</strong>
                          </p>
                        ) : null}
                      </section>
                      <div className={docente.cont_boton}>
                        <input
                          type="button"
                          name="opcion1"
                          className={docente.boton}
                          value="Mostrar corrección"
                          onClick={mostrarOpcion1}
                        />
                      </div>
                    </form>
                  </section>

                  <section className="">
                    <form name="" action="#" className="">
                      <div id="" className="">
                        <p>
                          2. ¿Qué estrategia es conveniente seguir cuando se
                          implementa la EA?
                        </p>
                      </div>
                      <section className="" onChange={pregunta2}>
                        <p className="">
                          <input type="radio" name="opcion2" value="False" />
                          a) Orientar la practica a un modelo cognitivista.
                        </p>
                        <p className="">
                          <input type="radio" name="opcion2" value="True" />
                          b) Trabajar desde lo local para influir en lo global.
                        </p>
                        <p className="">
                          <input type="radio" name="opcion2" value="False" />
                          c: No focalizarse en exceso en modelos orientados a la
                          acción.
                        </p>
                        {mostrarOpcion.opcion2m && opcion2 === "correcto2" ? (
                          <p>
                            <strong>Correcto</strong>
                          </p>
                        ) : null}
                        {mostrarOpcion.opcion2m && opcion2 === "incorrecto2" ? (
                          <p>
                            <strong>Incorrecto</strong>
                          </p>
                        ) : null}
                      </section>
                      <div className="">
                        <p>
                          <input
                            type="button"
                            name="opcion2"
                            className={docente.boton}
                            value="Mostrar corrección"
                            onClick={mostrarOpcion2}
                          />
                        </p>
                      </div>
                    </form>
                  </section>
                  <section className="">
                    <form name="" action="#" className="">
                      <div id="" className="">
                        <p>
                          3. ¿Cómo podemos aplicar en la práctica que el
                          conocimiento se construye a partir del sujeto que
                          aprende?
                        </p>
                      </div>
                      <section className="" onChange={pregunta3}>
                        <p className="">
                          <input type="radio" name="opcion3" value="True" />
                          a) Dándole importancia a la dimensión afectiva y
                          estableciendo relaciones entre los sistemas y
                          procesos.
                        </p>
                        <p className="">
                          <input type="radio" name="opcion3" value="False" />
                          b) Estableciendo asambleas periódicas donde los
                          alumnos aporten sus ideas.
                        </p>
                        <p className="">
                          <input type="radio" name="opcion3" value="False" />
                          c) Empleando metodologías centradas en problemas y en
                          la búsqueda de soluciones.
                        </p>
                        {mostrarOpcion.opcion3m && opcion3 === "correcto3" ? (
                          <p>
                            <strong>Correcto</strong>
                          </p>
                        ) : null}
                        {mostrarOpcion.opcion3m && opcion3 === "incorrecto3" ? (
                          <p>
                            <strong>Incorrecto</strong>
                          </p>
                        ) : null}
                      </section>
                      <div className="">
                        <input
                          type="button"
                          name="opcion3"
                          className={docente.boton}
                          value="Mostrar corrección"
                          onClick={mostrarOpcion3}
                        />
                      </div>
                    </form>
                  </section>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={docente.acordeon_item}>
              <Accordion.Header className={docente.acordeon_header}>
                Recursos Multimedia
              </Accordion.Header>
              <Accordion.Body>
                <article className="" id="">
                  <div id="" className="">
                    <p className={docente.imagen}>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/X-MSPCWyJ9Q"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowFullScreen"
                      ></iframe>
                    </p>
                  </div>
                </article>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={docente.acordeon_item}>
              <Accordion.Header className={docente.acordeon_header}>
                Para Saber Más
              </Accordion.Header>
              <Accordion.Body>
                <article className="" id="">
                  <div className="">
                    <h5>
                      <a
                        href="https://dialnet.unirioja.es/servlet/articulo?codigo=6118093"
                        onClick={experiencia}
                      >
                        Experiencia de formación del profesorado basada en el
                        contexto ciudad-escuela
                      </a>
                    </h5>
                    <h5>
                      <a
                        href="https://generacionverde.com/blog/ambiental/4-estrategias-para-crear-conciencia-ambiental-en-las-escuelas/"
                        onClick={estrategia}
                      >
                        4 estrategias para crear conciencia ambiental en las
                        escuelas
                      </a>
                    </h5>
                  </div>
                </article>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>
      </section>
    </div>
  );
};

export default CompDocenteEducaAmbien;
