import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompAlumCuidaMedAmb from "./Components/CompAlumCuidaMedAmb";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_4_2, dir_4_4 } from "../../DirectorioMenu";

function AlumCuidaMedAmb({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_2} siguiente={dir_4_4} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompAlumCuidaMedAmb />
            </div>
          </div>
          <Footer anterior={dir_4_2} siguiente={dir_4_4} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_2} siguiente={dir_4_4} />

          <CompAlumCuidaMedAmb />
          <Footer anterior={dir_4_2} siguiente={dir_4_4} />
        </div>
      )}
    </Fragment>
  );
}

export default AlumCuidaMedAmb;
