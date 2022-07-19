import React, { useState } from "react";
import estrategia from "../../estrategia.module.css";

const Areas = () => {
  const [sel1, setSel1] = useState({
    anterior: "",
    uno: "uno",
    dos: "",
    tres: "",
    cuatro: "",
    cinco: "",
    seis: "",
    siguiente: "",
  });
  const sel1Objet = {
    anterior: "",
    uno: "",
    dos: "",
    tres: "",
    cuatro: "",
    cinco: "",
    seis: "",
    siguiente: "",
  };
  const { uno, dos, tres, cuatro, cinco, seis } = sel1;
  const carrusel1 = (e) => {
    if (e.target.id === "uno") {
      setSel1({ ...sel1Objet, uno: "uno" });
    }
    if (e.target.id === "dos") {
      setSel1({ ...sel1Objet, dos: "dos" });
    }
    if (e.target.id === "tres") {
      setSel1({ ...sel1Objet, tres: "tres" });
    }
    if (e.target.id === "cuatro") {
      setSel1({ ...sel1Objet, cuatro: "cuatro" });
    }
    if (e.target.id === "cinco") {
      setSel1({ ...sel1Objet, cinco: "cinco" });
    }
    if (e.target.id === "seis") {
      setSel1({ ...sel1Objet, seis: "seis" });
    }

    if (e.target.id === "anterior") {
      if (uno === "uno") return;
      if (dos === "dos") {
        setSel1({ ...sel1Objet, uno: "uno" });
      }
      if (tres === "tres") {
        setSel1({ ...sel1Objet, dos: "dos" });
      }
      if (cuatro === "cuatro") {
        setSel1({ ...sel1Objet, tres: "tres" });
      }
      if (cinco === "cinco") {
        setSel1({ ...sel1Objet, cuatro: "cuatro" });
      }
      if (seis === "seis") {
        setSel1({ ...sel1Objet, cinco: "cinco" });
      }
    }
    if (e.target.id === "siguiente") {
      if (seis === "seis") return;
      if (uno === "uno") {
        setSel1({ ...sel1Objet, dos: "dos" });
      }
      if (dos === "dos") {
        setSel1({ ...sel1Objet, tres: "tres" });
      }
      if (tres === "tres") {
        setSel1({ ...sel1Objet, cuatro: "cuatro" });
      }
      if (cuatro === "cuatro") {
        setSel1({ ...sel1Objet, cinco: "cinco" });
      }
      if (cinco === "cinco") {
        setSel1({ ...sel1Objet, seis: "seis" });
      }
    }
  };

  return (
    <>
      <div className={estrategia.orden} onClick={carrusel1}>
        <p>
          <strong
            id="anterior"
            className={uno === "uno" ? estrategia.anterior : null}
          >
            &laquo;
          </strong>
        </p>
        <p id="uno" className={uno === "uno" ? estrategia.uno : null}>
          1
        </p>
        <p id="dos" className={dos === "dos" ? estrategia.dos : null}>
          2
        </p>
        <p id="tres" className={tres === "tres" ? estrategia.tres : null}>
          3
        </p>
        <p
          id="cuatro"
          className={cuatro === "cuatro" ? estrategia.cuatro : null}
        >
          4
        </p>
        <p id="cinco" className={cinco === "cinco" ? estrategia.cinco : null}>
          5
        </p>
        <p id="seis" className={seis === "seis" ? estrategia.seis : null}>
          6
        </p>
        <p>
          <strong
            id="siguiente"
            className={seis === "seis" ? estrategia.siguiente : null}
          >
            &raquo;
          </strong>
        </p>
      </div>

      <div>
        {uno === "uno" ? (
          <div className={estrategia.carrusel}>
            <h3>
              <span>Ciencias Naturales</span>
            </h3>
          </div>
        ) : null}
        {dos === "dos" ? (
          <div className={estrategia.carrusel}>
            <h3>
              <span>Ciencias Sociales</span>
            </h3>
          </div>
        ) : null}
        {tres === "tres" ? (
          <div className={estrategia.carrusel}>
            <h3>
              <span>Educación Artística</span>
            </h3>
          </div>
        ) : null}
        {cuatro === "cuatro" ? (
          <div className={estrategia.carrusel}>
            <h3>
              <span>Matemáticas</span>
            </h3>
          </div>
        ) : null}
        {cinco === "cinco" ? (
          <div className={estrategia.carrusel}>
            <h3>
              <span>Lengua Castellana y Literatura</span>
            </h3>
          </div>
        ) : null}
        {seis === "seis" ? (
          <div className={estrategia.carrusel}>
            <h3>
              <span>Inglés</span>
            </h3>
          </div>
        ) : null}
      </div>

    </>
  );
};

export default Areas;
