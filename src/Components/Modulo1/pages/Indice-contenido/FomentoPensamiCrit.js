import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompFomentoPensamiCrit from "./Components/CompFomentoPensamiCrit";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_5_2, dir_6 } from "../../DirectorioMenu";

function FomentoPensamiCrit({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_5_2} siguiente={dir_6} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompFomentoPensamiCrit />
            </div>
          </div>
          <Footer anterior={dir_5_2} siguiente={dir_6} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_5_2} siguiente={dir_6} />

          <CompFomentoPensamiCrit />
          <Footer anterior={dir_5_2} siguiente={dir_6} />
        </div>
      )}
    </Fragment>
  );
}

export default FomentoPensamiCrit;
