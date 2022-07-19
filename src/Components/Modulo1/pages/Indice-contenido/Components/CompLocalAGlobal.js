import React, { useState } from "react";
import mod1 from "../../../Css/Modulo1.module.css";
import glocal from "../../../assets/img/glocal-global-local-1.jpg";
import glocalcss from "../Components/glocal.module.css";
import Cuestionario from "./componentes/Local-Global/Cuestionario";
import Actividad from "./componentes/Local-Global/Actividad";
import pdfGlocal from '../../../assets/Texto_desarrollo_glocal.pdf';

const CompLocalAGlobal = () => {
  const [selectMenu, setSelectMenu] = useState("uno");

  const anterior = () => {
    if (selectMenu === "uno") {
      return;
    }
    if (selectMenu === "dos") setSelectMenu("uno");
    if (selectMenu === "tres") setSelectMenu("dos");
    if (selectMenu === "cuatro") setSelectMenu("tres");
    if (selectMenu === "cinco") setSelectMenu("cuatro");
  };
  const siguiente = () => {
    if (selectMenu === "cinco") {
      return;
    }
    if (selectMenu === "uno") setSelectMenu("dos");
    if (selectMenu === "dos") setSelectMenu("tres");
    if (selectMenu === "tres") setSelectMenu("cuatro");
    if (selectMenu === "cuatro") setSelectMenu("cinco");
  };

  const menuNumeros = (e) => {
    const valor = e.target.id;

    if (valor === "uno") {
      setSelectMenu("uno");
    }
    if (valor === "dos") {
      setSelectMenu("dos");
    }
    if (valor === "tres") {
      setSelectMenu("tres");
    }
    if (valor === "cuatro") {
      setSelectMenu("cuatro");
    }
    if (valor === "cinco") {
      setSelectMenu("cinco");
    }
  };

  return (
    <div className={mod1.presentacion}>
      <section>
        <h2>4.5 Desde lo glocal a lo global</h2>

        <article className="">
          <div className="">
            <div>
              <p className={glocalcss.img}>
                <img
                  src={glocal}
                  alt="Fotografía de la Tierra desde la perspectiva de un avión"
                  title="Desde lo glocal a lo global"
                  width="280"
                  height="200"
                />
              </p>
              <p>
                Según Estrada (2012) actuar desde lo
                <strong>glocal</strong> es hacerlo de forma local con la{" "}
                <strong>mirada</strong> puesta en lo
                <strong>global</strong> en cuanto a los efectos que se van a
                producir, cambiando la forma de pensar acerca del planeta como
                éste fuera nuestro contexto más cercano (individuos, familia,
                barrio…) desarrollando un pensamiento sistémico complejo desde
                una escala más pequeña. Es muy común en diversos ámbitos cuando
                se refiere al término glocal utilizar el lema: "Piensa
                globalmente, actúa localmente"
              </p>
              <p>
                Estrada (2012) señala que dentro de un sistema los{" "}
                <strong>problemas</strong> ambientales no son la suma de
                problemas sino  la
                <strong>interacción</strong> entre todos ellos, lo que se conoce
                como el efecto mariposa, las acciones que se llevan a cabo en un
                lugar del mundo pueden repercutir en todo el sistema.
              </p>
              <p>
                Desarrollar los problemas en
                <strong>escalas</strong> más <strong>pequeñas</strong> hace que
                se trabaje de forma
                <strong>cooperativa</strong> en el caso de la educación otros
                centros y/o comunidades educativas, compartiendo experiencias,
                métodos, recursos y materiales mediante la interconexión y la
                conectividad a través de <strong>redes</strong>.
              </p>
              <p>
                Se pueden establecer unos
                <strong>objetivos</strong> para conocer el grado de{" "}
                <strong>conocimiento</strong> de los alumnos respecto a los{" "}
                <strong>problemas</strong> ambientales a nivel{" "}
                <strong>local</strong>y <strong>global</strong>. Sirva de
                ejemplo los objetivos que se establecieron en un estudio de
                investigación didáctica en el alumnado de primaria participantes
                del programa ecoescuelas. García y Moreno (2015):
              </p>
              <div className={glocalcss.menu}>
                <h4
                  onClick={anterior}
                  id="anterior"
                  className={
                    selectMenu === "uno"
                      ? glocalcss.anterior
                      : glocalcss.menu_anterior
                  }
                >
                  &lt;
                </h4>
                <h4
                  className={
                    selectMenu === "uno"
                      ? glocalcss.menuKo
                      : glocalcss.menu_numero
                  }
                  onClick={menuNumeros}
                  id="uno"
                >
                  1
                </h4>
                <h4
                  className={
                    selectMenu === "dos"
                      ? glocalcss.menuKo
                      : glocalcss.menu_numero
                  }
                  onClick={menuNumeros}
                  id="dos"
                >
                  2
                </h4>
                <h4
                  className={
                    selectMenu === "tres"
                      ? glocalcss.menuKo
                      : glocalcss.menu_numero
                  }
                  onClick={menuNumeros}
                  id="tres"
                >
                  3
                </h4>
                <h4
                  className={
                    selectMenu === "cuatro"
                      ? glocalcss.menuKo
                      : glocalcss.menu_numero
                  }
                  onClick={menuNumeros}
                  id="cuatro"
                >
                  4
                </h4>
                <h4
                  className={
                    selectMenu === "cinco"
                      ? glocalcss.menuKo
                      : glocalcss.menu_numero
                  }
                  onClick={menuNumeros}
                  id="cinco"
                >
                  5
                </h4>
                <h4
                  onClick={siguiente}
                  id="siguiente"
                  className={
                    selectMenu === "cinco"
                      ? glocalcss.anterior
                      : glocalcss.menu_anterior
                  }
                >
                  &gt;
                </h4>
              </div>
              {selectMenu === "uno" ? (
                <div className={glocalcss.menu_texto}>
                  <h3>Comprobar</h3>
                  <p>
                    Si el alumnado  conoce  la  relación  entre  las 
                    problemáticas  del  agua  a  nivel  global y el uso de este
                    recurso a nivel local.
                  </p>
                </div>
              ) : null}

              {selectMenu === "dos" ? (
                <div className={glocalcss.menu_texto}>
                  <h3>Analizar</h3>
                  <p>
                    Si el alumnado establece relaciones  entre  el  consumo 
                    energético  y  las  problemáticas socio-ambientales
                  </p>
                </div>
              ) : null}
              {selectMenu === "tres" ? (
                <div className={glocalcss.menu_texto}>
                  <h3>Verificar</h3>
                  <p>
                    Si el alumnado conoce los beneficios del consumo local para
                    el entorno.
                  </p>
                </div>
              ) : null}

              {selectMenu === "cuatro" ? (
                <div className={glocalcss.menu_texto}>
                  <h3>Conocer</h3>
                  <p>
                    En qué medida el alumnado en-tiende y actúa en relación a la
                    problemática de los residuos.
                  </p>
                </div>
              ) : null}

              {selectMenu === "cinco" ? (
                <div className={glocalcss.menu_texto}>
                  <h3>Constatar</h3>
                  <p>
                    Qué acciones conoce y realiza el alumnado en favor de la
                    conservación de su entorno y la mejora de la calidad de
                    vida.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </article>

        <Cuestionario />
        <Actividad />

        <article className={glocalcss.saber_mas}>
          <h3 className="">Para Saber Más</h3>

          <div className="">
            <p>
              <a
                href={pdfGlocal}
                title="SOSTENIBILIDAD, DESARROLLO «GLOCAL»Y CIUDADANÍA PLANETARIA. REFERENTES DE UNA PEDAGOGÍA PARA EL DESARROLLO SOSTENIBLE"
              >
                SOSTENIBILIDAD, DESARROLLO «GLOCAL»Y CIUDADANÍA PLANETARIA.
                REFERENTES DE UNA PEDAGOGÍA PARA EL DESARROLLO SOSTENIBLE
              </a>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompLocalAGlobal;
