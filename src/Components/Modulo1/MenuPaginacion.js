import React from "react";
import mod1 from "./Css/Modulo1.module.css";
import { NavLink } from "react-router-dom";

const MenuPaginacion = ({anterior, siguiente}) => {
  
  return ( 
    <nav className={mod1.paginacion}>
      <NavLink className={mod1.hover} to={anterior}>
        <p>
          <strong className={mod1.ant}>&laquo;</strong>
        </p>
        <p className={mod1.ant}>Anterior</p>
      </NavLink>

      <span className={mod1.separacion}> | </span>

      <NavLink to={siguiente}>
        <p className={mod1.next}>Siguiente</p>
        <p>
          <strong className={mod1.next}>&raquo;</strong>
        </p>
      </NavLink>
    </nav>
  );
};

export default MenuPaginacion;
