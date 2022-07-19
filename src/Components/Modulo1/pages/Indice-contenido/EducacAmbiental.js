import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompEducacAmbiental from "./Components/CompEducacAmbiental";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_3_2, dir_4_1 } from "../../DirectorioMenu";

function EducacAmbiental({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_3_2} siguiente={dir_4_1} />
            
            <div className="row">
              <div className="col-4 p-0">
                <Menu />
              </div>
              <div className="col-8 p-0">
                <CompEducacAmbiental />
              </div>
            </div>
            <Footer anterior={dir_3_2} siguiente={dir_4_1} />
            
          
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_3_2} siguiente={dir_4_1} />
            
            <CompEducacAmbiental />
            <Footer anterior={dir_3_2} siguiente={dir_4_1} />
          
        </div>
      )}
    </Fragment>
  );
}

export default EducacAmbiental;
