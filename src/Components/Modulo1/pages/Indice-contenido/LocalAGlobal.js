import React, { Fragment } from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompLocalAGlobal from "./Components/CompLocalAGlobal";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import { dir_4_4, dir_5 } from "../../DirectorioMenu";

function LocalAGlobal({ menuOk, vistaMenu }) {
  return (
    <Fragment>
      {menuOk ? (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_4} siguiente={dir_5} />

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompLocalAGlobal />
            </div>
          </div>
          <Footer anterior={dir_4_4} siguiente={dir_5} />
        </div>
      ) : (
        <div className={mod1.container}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={dir_4_4} siguiente={dir_5} />

          <CompLocalAGlobal />
          <Footer anterior={dir_4_4} siguiente={dir_5} />
        </div>
      )}
    </Fragment>
  );
}

export default LocalAGlobal;
