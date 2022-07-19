import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompImplProgrAmbien from "./Components/CompImplProgrAmbien";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_3, dir_3_2 } from "../../DirectorioMenu";

function ImplProgrAmbien({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_3} siguiente={dir_3_2} />
          
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompImplProgrAmbien />
            </div>
          </div>
          <Footer anterior={dir_3} siguiente={dir_3_2} />
          
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_3} siguiente={dir_3_2} />
           
            <CompImplProgrAmbien />
            <Footer anterior={dir_3} siguiente={dir_3_2} />                      
          
        </div>
      )}
    </Fragment>
  );
}

export default ImplProgrAmbien;
