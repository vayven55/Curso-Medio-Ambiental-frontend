import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompCuidadoMedAmb from "./Components/CompCuidadoMedAmb";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_3_1, dir_4 } from "../../DirectorioMenu";

function CuidadoMedAmb({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_3_1} siguiente={dir_4} />
          
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompCuidadoMedAmb />
            </div>
          </div>
          <Footer anterior={dir_3_1} siguiente={dir_4} />
          
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_3_1} siguiente={dir_4} />
          
          <CompCuidadoMedAmb />
          <Footer anterior={dir_3_1} siguiente={dir_4} />
          
        </div>
      )}
    </Fragment>
  );
}

export default CuidadoMedAmb;
