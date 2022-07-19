import React from "react";
import mod1 from "../../Css/Modulo1.module.css";
import Menu from "../../Menu";
import Header from "../../Header";
import CompRubricaEva from "./Components/CompRubricaEva";
import { tarea, indiceContenido } from "../../DirectorioMenu";
import MenuPaginacion from "../../MenuPaginacion";
import Footer from "../../Footer";

function RubricaEvaluacion({ menuOk, vistaMenu, anterior, siguiente }) {
  return (
    <div className={mod1.container}>
      
      {menuOk ? (
        <div>
        <Header vistaMenu={vistaMenu} />
        <MenuPaginacion anterior={tarea} siguiente={indiceContenido} />
          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompRubricaEva />
            </div>
        </div>  
        <Footer anterior={tarea} siguiente={indiceContenido} />            
        </div>
      ) : (
        <div>
        <Header vistaMenu={vistaMenu} />
        <MenuPaginacion anterior={tarea} siguiente={indiceContenido} />
        <CompRubricaEva />
        <Footer anterior={tarea} siguiente={indiceContenido} />
        </div>
      )} 
      
    </div>
  );
}

export default RubricaEvaluacion;
