import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompEstrategDidactEduAmb from "./Components/CompEstrategDidactEduAmb";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_6, dir_6_2 } from "../../DirectorioMenu";

function EstrategDidactEduAmb({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_6} siguiente={dir_6_2} />
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompEstrategDidactEduAmb />
            </div>
          </div>
          <Footer anterior={dir_6} siguiente={dir_6_2} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_6} siguiente={dir_6_2} />

          <CompEstrategDidactEduAmb />

          <Footer anterior={dir_6} siguiente={dir_6_2} />
        </div>
      )}
    </Fragment>
  );
}

export default EstrategDidactEduAmb;
