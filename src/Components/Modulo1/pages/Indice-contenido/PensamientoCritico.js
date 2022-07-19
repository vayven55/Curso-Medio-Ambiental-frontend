import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompPensamientoCritico from "./Components/CompPensamientoCritico";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_5_1, dir_5_2_1 } from "../../DirectorioMenu";

function PensamientoCritico({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_5_1} siguiente={dir_5_2_1} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompPensamientoCritico />
            </div>
          </div>
          <Footer anterior={dir_5_1} siguiente={dir_5_2_1} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_5_1} siguiente={dir_5_2_1} />
          <CompPensamientoCritico />
          <Footer anterior={dir_5_1} siguiente={dir_5_2_1} />
        </div>
      )}
    </Fragment>
  );
}

export default PensamientoCritico;
