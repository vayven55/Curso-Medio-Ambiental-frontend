import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompProgramaEcoescuelas from "./Components/CompProgramaEcoescuelas";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_2, dir_3 } from "../../DirectorioMenu";

function ProgramaEscuelas({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_2} siguiente={dir_3} />
            <div className="row">
              <div className="col-4 p-0">
                <Menu />
              </div>
              <div className="col-8 p-0">
                <CompProgramaEcoescuelas />
              </div>
            </div>
          <Footer anterior={dir_2} siguiente={dir_3} />          
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_2} siguiente={dir_3} /> 
          <CompProgramaEcoescuelas />
          <Footer anterior={dir_2} siguiente={dir_3} />
        </div>
      )}
    </Fragment>
  );
}

export default ProgramaEscuelas;
