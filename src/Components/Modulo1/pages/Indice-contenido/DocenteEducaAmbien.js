import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompDocenteEducaAmbien from "./Components/CompDocenteEducaAmbien";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_4_1, dir_4_3 } from "../../DirectorioMenu";

function DocenteEducaAmbien({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_1} siguiente={dir_4_3} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompDocenteEducaAmbien />
            </div>
          </div>
          <Footer anterior={dir_4_1} siguiente={dir_4_3} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_1} siguiente={dir_4_3} />

          <CompDocenteEducaAmbien />
          <Footer anterior={dir_4_1} siguiente={dir_4_3} />
        </div>
      )}
    </Fragment>
  );
}

export default DocenteEducaAmbien;
