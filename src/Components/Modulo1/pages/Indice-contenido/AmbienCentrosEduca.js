import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompAmbienCentrosEduca from "./Components/CompAmbienCentrosEduca";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_2_1, dir_3_1 } from "../../DirectorioMenu";

function AmbienCentrosEduca({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_2_1} siguiente={dir_3_1} />          
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompAmbienCentrosEduca />
            </div>
          </div>
          <Footer anterior={dir_2_1} siguiente={dir_3_1} />          
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_2_1} siguiente={dir_3_1} />          
          <CompAmbienCentrosEduca />
          <Footer anterior={dir_2_1} siguiente={dir_3_1} />         
        </div>
      )}
    </Fragment>
  );
}

export default AmbienCentrosEduca;
