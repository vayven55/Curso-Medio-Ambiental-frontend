import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import { NavLink } from "react-router-dom";
import Header from "../../Header";
import Menu from "../../Menu";
import CompEconomiaCircular from "./Components/CompEconomiaCircular";

function EconomiaCircular({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <div className={mod1.contenedor}>
            <div className={`d-flex flex-row ${mod1.topPagination}`}>
              <div className="col-11"></div>
              <div className="col-1">
                <nav>
                  <NavLink to="/modulo1_indice-contenido/6.2-cambio-climatico_propuesta_de_abordaje">
                    <span>
                      <span className={mod1.ant}>&laquo; </span>Anterior
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <Menu />
              </div>
              <div className="col-8">
                <CompEconomiaCircular />
              </div>
            </div>
            <footer>
              <div className={`d-flex flex-row ${mod1.footer}`}>
                <div className="col-11">
                  <p>
                    <span>Obra publicada por Myriam Peón Acal</span>
                  </p>
                </div>
                <div className={`col-1 ${mod1.topPagination}`}>
                  <nav>
                    <NavLink to="/modulo1_indice-contenido/6.2-cambio-climatico_propuesta_de_abordaje">
                      <span>
                        <span className={mod1.ant}>&laquo; </span>Anterior
                      </span>
                    </NavLink>
                  </nav>
                </div>
              </div>
            </footer>
          </div>
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <div className={mod1.contenedor}>
            <div className={`d-flex flex-row ${mod1.topPagination}`}>
              <div className="col-11"></div>
              <div className="col-1">
                <nav>
                  <NavLink to="/modulo1_indice-contenido/6.2-cambio-climatico_propuesta_de_abordaje">
                    <span>
                      <span className={mod1.ant}>&laquo; </span>Anterior
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <CompEconomiaCircular />
          </div>
          <footer>
            <div className={`d-flex flex-row ${mod1.footer}`}>
              <div className="col-11">
                <p>
                  <span>Obra publicada por Myriam Peón Acal</span>
                </p>
              </div>
              <div className={`col-1 ${mod1.topPagination}`}>
                <nav>
                  <NavLink to="/modulo1_indice-contenido/6.2-cambio-climatico_propuesta_de_abordaje">
                    <span>
                      <span className={mod1.ant}>&laquo; </span>Anterior
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      )}
    </Fragment>
  );
}
export default EconomiaCircular;
