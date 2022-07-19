import React from "react";
import mod1 from "../Css/Modulo1.module.css";
import { NavLink } from "react-router-dom";
import Menu from "../Menu";
import Header from "../Header";
import CompPresentacion from "./Indice-contenido/Components/CompPresentacion";
import { tarea } from "../DirectorioMenu";
//import MenuPaginacion from "../MenuPaginacion";
//import Footer from "../Footer";

function Presentacion({ menuOk, vistaMenu, siguiente }) {
  return (
    <div className={`${mod1.container}`}>
      {menuOk ? (

        <div className={`${mod1.container}`}>
        
          <Header vistaMenu={vistaMenu} />
          <nav className={mod1.paginacion}>
            <NavLink to={tarea}>
              <p className={mod1.next}>Siguiente</p>
              <p>
                <strong className={mod1.next}>&raquo;</strong>
              </p>
            </NavLink>
          </nav>

          <div className="row">
            <div className="col-4 p-0">
              <Menu />
            </div>
            <div className="col-8 p-0">
              <CompPresentacion />
            </div>
          </div>
         
          <footer>
            <nav className={mod1.paginacion}>
              <p className={mod1.footer_p}>
                <strong>Obra publicada por Myriam Peón Acal</strong>
              </p>

              <NavLink to={tarea}>
                <p className={mod1.next}>Siguiente</p>
                <p>
                  <strong className={mod1.next}>&raquo;</strong>
                </p>
              </NavLink>
            </nav>
          </footer>
        </div>
      ) : (
        <div className={`container-fluid ${mod1.container}`}>
          <Header vistaMenu={vistaMenu} />
          <nav className={mod1.paginacion}>
            <NavLink to={tarea}>
              <p className={mod1.next}>Siguiente</p>
              <p>
                <strong className={mod1.next}>&raquo;</strong>
              </p>
            </NavLink>
          </nav>

          <CompPresentacion />
          <footer>
            <nav className={mod1.paginacion}>
              <p className={mod1.footer_p}>
                <strong>Obra publicada por Myriam Peón Acal</strong>
              </p>

              <NavLink to={tarea}>
                <p className={mod1.next}>Siguiente</p>
                <p>
                  <strong className={mod1.next}>&raquo;</strong>
                </p>
              </NavLink>
            </nav>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Presentacion;
