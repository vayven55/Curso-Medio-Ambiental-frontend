import React, { useState } from 'react'
import orientar from "../../orientar.module.css";

const OrientarSelecMenu = () => {
    const [menu1, setmenu1] = useState(true);
    const [menu2, setmenu2] = useState(false);
    const [menu3, setmenu3] = useState(false);
    const [menu4, setmenu4] = useState(false);
    const [menu5, setmenu5] = useState(false);
    const [atras, setAtras] = useState(false);
    const [siguiente, setSiguiente] = useState(true);

    const selecMenu = (e) => {
        const select = e.target.id;
    
        if (select === "uno") {
          setmenu1(true);
          setmenu2(false);
          setmenu3(false);
          setmenu4(false);
          setmenu5(false);
          setAtras(false);
          setSiguiente(true);
        }
        if (select === "dos") {
          setmenu1(false);
          setmenu2(true);
          setmenu3(false);
          setmenu4(false);
          setmenu5(false);
          setAtras(true);
          setSiguiente(true);
        }
        if (select === "tres") {
          setmenu1(false);
          setmenu2(false);
          setmenu3(true);
          setmenu4(false);
          setmenu5(false);
          setAtras(true);
          setSiguiente(true);
        }
        if (select === "cuatro") {
          setmenu1(false);
          setmenu2(false);
          setmenu3(false);
          setmenu4(true);
          setmenu5(false);
          setAtras(true);
          setSiguiente(true);
        }
        if (select === "cinco") {
          setmenu1(false);
          setmenu2(false);
          setmenu3(false);
          setmenu4(false);
          setmenu5(true);
          setAtras(true);
          setSiguiente(false);
        }
        if (select === "atras") {
          if (menu1 === true) return null;
          if (menu5 === true) {
            setmenu1(false);
            setmenu2(false);
            setmenu3(false);
            setmenu4(true);
            setmenu5(false);
            setAtras(true);
            setSiguiente(true);
          }
          if (menu4 === true) {
            setmenu1(false);
            setmenu2(false);
            setmenu3(true);
            setmenu4(false);
            setmenu5(false);
            setAtras(true);
            setSiguiente(true);
          }
          if (menu3 === true) {
            setmenu1(false);
            setmenu2(true);
            setmenu3(false);
            setmenu4(false);
            setmenu5(false);
            setAtras(true);
            setSiguiente(true);
          }
          if (menu2 === true) {
            setmenu1(true);
            setmenu2(false);
            setmenu3(false);
            setmenu4(false);
            setmenu5(false);
            setAtras(false);
            setSiguiente(true);
          }
        }
        if (select === "siguiente") {
          if (menu5 === true) return null;
          if (menu1 === true) {
            setmenu1(false);
            setmenu2(true);
            setmenu3(false);
            setmenu4(false);
            setmenu5(false);
            setAtras(true);
            setSiguiente(true);
          }
          if (menu2 === true) {
            setmenu1(false);
            setmenu2(false);
            setmenu3(true);
            setmenu4(false);
            setmenu5(false);
            setAtras(true);
            setSiguiente(true);
          }
          if (menu3 === true) {
            setmenu1(false);
            setmenu2(false);
            setmenu3(false);
            setmenu4(true);
            setmenu5(false);
            setAtras(true);
            setSiguiente(true);
          }
          if (menu4 === true) {
            setmenu1(false);
            setmenu2(false);
            setmenu3(false);
            setmenu4(false);
            setmenu5(true);
            setAtras(true);
            setSiguiente(false);
          }
        }
      };
  return (
    <div className="container">
          <div className={orientar.menu}>
            <div onClick={selecMenu}>
              <strong
                id="atras"
                className={
                  atras
                    ? orientar.direccionStrong
                    : orientar.direccionStrongCambio
                }
              >
                &lt;
              </strong>
            </div>
            <div
              onClick={selecMenu}
              className={menu1 ? orientar.numeroSeleccionado : orientar.numero}
            >
              <strong id="uno">1</strong>
            </div>
            <div
              onClick={selecMenu}
              className={menu2 ? orientar.numeroSeleccionado : orientar.numero}
            >
              <strong id="dos">2</strong>
            </div>
            <div
              onClick={selecMenu}
              className={menu3 ? orientar.numeroSeleccionado : orientar.numero}
            >
              <strong id="tres"> 3 </strong>
            </div>
            <div
              onClick={selecMenu}
              className={menu4 ? orientar.numeroSeleccionado : orientar.numero}
            >
              <strong id="cuatro"> 4 </strong>
            </div>
            <div
              onClick={selecMenu}
              className={menu5 ? orientar.numeroSeleccionado : orientar.numero}
            >
              <strong id="cinco"> 5 </strong>
            </div>
            <div onClick={selecMenu}>
              <strong
                id="siguiente"
                className={
                  siguiente
                    ? orientar.direccionStrong
                    : orientar.direccionStrongCambio
                }
              >
                &gt;
              </strong>
            </div>
          </div>
          <div className={orientar.centrarMenu}>
            {menu1 ? (
              <h4>La reducción del consumo y el consumo responsable.</h4>
            ) : null}

            {menu2 ? (
              <h4>
                El reciclaje, separación y conciencia de los desechos que el ser
                humano genera.
              </h4>
            ) : null}
            {menu3 ? (
              <h4>
                Aspectos clave de la economía circular,  sostenible y centrada
                en el concepto de cero residuos.
              </h4>
            ) : null}
            {menu4 ? (
              <h4>
                El cuidado, el amor y el respeto por todos los seres vivos.
              </h4>
            ) : null}
            {menu5 ? (
              <h4 className={orientar.h4_menu}>
                Ética Ambiental que aleje de posturas centradas en el ser humano
                en la ética egocéntrica y/o antropocéntrica para dirigirnos a
                una ética centrada en el eje de la vida y de los sistemas de
                vida, una ética biocéntrica y/o ecocéntrica.
              </h4>
            ) : null}
          </div>
        </div>
  )
}

export default OrientarSelecMenu