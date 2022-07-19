import React, { Fragment } from "react";

import mod1 from "../Modulo1/Css/Modulo1.module.css";

function Header({vistaMenu, menuOk}) {
  
  return (
    <Fragment> 
     
      <header>
        <div className="row">
          <div className="col-md-1">
            <span className={"material-icons md-48"} onClick={vistaMenu}>menu</span>
          </div>
          <div className="col-md-9">
            <h1 className="display-4 tex-center">
              Programa de Educación Ambiental
            </h1>
          </div>
          <div className="col-md-2">
            <h2 className={mod1.menu_h2}>Módulo 1</h2>
          </div>
        </div>
        
      </header>
    </Fragment>
  );
}

export default Header;
