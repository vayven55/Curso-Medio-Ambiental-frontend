import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompEscuelasEficaces from "./Components/CompEscuelasEficaces";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_1_2, dir_2_1 } from "../../DirectorioMenu";

function EscuelasEficaces({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_1_2} siguiente={dir_2_1} />
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompEscuelasEficaces />
            </div>
          </div>
          <Footer anterior={dir_1_2} siguiente={dir_2_1} />
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_1_2} siguiente={dir_2_1} />
          <CompEscuelasEficaces />
          <Footer anterior={dir_1_2} siguiente={dir_2_1} />
        </div>
      )}
    </Fragment>
  );
}

export default EscuelasEficaces;
