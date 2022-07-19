import React, { Fragment } from "react";
import mod1 from "../Modulo1/Css/Modulo1.module.css";
import { NavLink } from "react-router-dom";

function Footer({anterior, siguiente}) {
  return (
    <Fragment>
      <footer className={mod1.container}>
        <nav className={mod1.paginacion}>
          <p className={mod1.footer_p}>
            <strong>Obra publicada por Myriam Peón Acal</strong>
          </p>
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
      </footer>
    </Fragment>
  );
}

export default Footer;
