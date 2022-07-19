import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompFiloBioEcoAntro from "./Components/CompFiloBioEcoAntro";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_4_5, dir_5_1 } from "../../DirectorioMenu";

function FiloBioEcoAntro({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_5} siguiente={dir_5_1} />
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompFiloBioEcoAntro />
            </div>
          </div>
          <Footer anterior={dir_4_5} siguiente={dir_5_1} />
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_5} siguiente={dir_5_1} />

          <CompFiloBioEcoAntro />
          <Footer anterior={dir_4_5} siguiente={dir_5_1} />
        </div>
      )}
    </Fragment>
  );
}

export default FiloBioEcoAntro;
