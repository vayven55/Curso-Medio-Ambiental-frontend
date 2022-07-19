import React from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompDocePautas from "./Components/CompDocePautas";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_1, dir_2 } from "../../DirectorioMenu";

function DocePautas({ menuOk, vistaMenu }) {
  return (
    <div className={`${mod1.container}`}>
      {menuOk ? (
        <div>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_1} siguiente={dir_2} />
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompDocePautas />
            </div>
          </div>
          <Footer anterior={dir_1} siguiente={dir_2} />
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_1} siguiente={dir_2} />
          <CompDocePautas />
          <Footer anterior={dir_1} siguiente={dir_2} />
        </div>
      )}
    </div>
  );
}

export default DocePautas;
