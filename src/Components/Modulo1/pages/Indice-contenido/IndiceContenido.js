import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompIndiceContenido from "./Components/CompIndiceContenido";
import { tareaRubrica, dir_1 } from "../../DirectorioMenu";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";

function IndiceContenido({menuOk, vistaMenu, anterior, siguiente}) {

  return (
    <Fragment>
      {menuOk ? (
        <div className={` ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={tareaRubrica} siguiente={dir_1} />
            <div className="row">
              <div className="col-md-4 p-0">
                <Menu />
              </div>
              <div className="col-md-8 p-0">
                <CompIndiceContenido />
              </div>
            </div>
            <Footer anterior={tareaRubrica} siguiente={dir_1} />
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={tareaRubrica} siguiente={dir_1} />
          <CompIndiceContenido />
          <Footer anterior={tareaRubrica} siguiente={dir_1} />         
        </div>
      )}
    </Fragment>
  );
}
export default IndiceContenido;
