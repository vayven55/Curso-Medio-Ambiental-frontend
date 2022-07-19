import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompConcienciaAmbiental from "./Components/CompConcienciaAmbiental";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_5, dir_5_2 } from "../../DirectorioMenu";

function ConcienciaAmbiental({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_5} siguiente={dir_5_2} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompConcienciaAmbiental />
            </div>
          </div>
          <Footer anterior={dir_5} siguiente={dir_5_2} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_5} siguiente={dir_5_2} />

          <CompConcienciaAmbiental />
          <Footer anterior={dir_5} siguiente={dir_5_2} />
        </div>
      )}
    </Fragment>
  );
}

export default ConcienciaAmbiental;
