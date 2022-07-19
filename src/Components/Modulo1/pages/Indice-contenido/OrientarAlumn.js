import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompOrientarAlumn from "./Components/CompOrientarAlumn";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_4_3, dir_4_5 } from "../../DirectorioMenu";

function OrientarAlumn({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_3} siguiente={dir_4_5} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompOrientarAlumn />
            </div>
          </div>
          <Footer anterior={dir_4_3} siguiente={dir_4_5} />
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_3} siguiente={dir_4_5} />

          <CompOrientarAlumn />
          <Footer anterior={dir_4_3} siguiente={dir_4_5} />
        </div>
      )}
    </Fragment>
  );
}
export default OrientarAlumn;
