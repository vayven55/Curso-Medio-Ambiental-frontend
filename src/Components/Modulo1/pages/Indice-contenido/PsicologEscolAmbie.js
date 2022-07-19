import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompPsicologEscolAmbie from "./Components/CompPsicologEscolAmbie";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_4, dir_4_2 } from "../../DirectorioMenu";

function PsicologEscolAmbie({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4} siguiente={dir_4_2} />
          
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompPsicologEscolAmbie />
            </div>
          </div>
          <Footer anterior={dir_4} siguiente={dir_4_2} />
          
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4} siguiente={dir_4_2} />
          
          <CompPsicologEscolAmbie />
          <Footer anterior={dir_4} siguiente={dir_4_2} />
          
        </div>
      )}
    </Fragment>
  );
}

export default PsicologEscolAmbie;
