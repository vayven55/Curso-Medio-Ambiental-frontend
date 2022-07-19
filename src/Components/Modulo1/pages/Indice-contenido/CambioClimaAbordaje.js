import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompCambioClimaAbordaje from "./Components/CompCambioClimaAbordaje";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_6_1, dir_6_3 } from "../../DirectorioMenu";

function CambioClimaAbordaje({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_6_1} siguiente={dir_6_3} />
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompCambioClimaAbordaje />
            </div>
          </div>
          <Footer anterior={dir_6_1} siguiente={dir_6_3} />
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_6_1} siguiente={dir_6_3} />

          <CompCambioClimaAbordaje />
          <Footer anterior={dir_6_1} siguiente={dir_6_3} />
        </div>
      )}
    </Fragment>
  );
}

export default CambioClimaAbordaje;
