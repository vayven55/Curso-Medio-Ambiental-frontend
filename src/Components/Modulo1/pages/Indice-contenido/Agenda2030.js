import React from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Header from "../../Header";
import Menu from "../../Menu";
import CompAgenda from "./Components/CompAgenda";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";
import {indiceContenido, dir_1_2} from '../../DirectorioMenu';

function Agenda2030({ menuOk, vistaMenu }) {
  return (
    <div>
      {menuOk ? (
        <div className={` ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={indiceContenido} siguiente={dir_1_2}/>
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompAgenda />  
            </div>       
          </div>
          <Footer anterior={indiceContenido} siguiente={dir_1_2}/> 
        </div>
      ) : (
        <div className={`${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <MenuPaginacion anterior={indiceContenido} siguiente={dir_1_2}/>
          
          <CompAgenda />
          <Footer anterior={indiceContenido} siguiente={dir_1_2}/>
          
        </div>
      )}
    </div>
  );
}

export default Agenda2030;
