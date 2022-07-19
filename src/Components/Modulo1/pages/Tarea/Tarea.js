import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Menu from "../../Menu";
import Header from "../../Header";
import CompTarea from "./Components/CompTarea";
import { presentacion, tareaRubrica } from "../../DirectorioMenu";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";

function Tarea({ menuOk, vistaMenu, anterior, siguiente }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={` ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />

          <MenuPaginacion anterior={presentacion} siguiente={tareaRubrica} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompTarea />
            </div>
          </div>
          <Footer anterior={presentacion} siguiente={tareaRubrica} />
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={presentacion} siguiente={tareaRubrica} />
          <CompTarea />
          <Footer anterior={presentacion} siguiente={tareaRubrica} />
        </div>
      )}
    </Fragment>
  );
}

export default Tarea;
