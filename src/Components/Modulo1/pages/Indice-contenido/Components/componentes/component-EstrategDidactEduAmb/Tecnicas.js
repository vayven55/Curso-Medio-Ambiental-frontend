import React, { useState } from "react";
import estrategia from '../../estrategia.module.css';

const Tecnicas = () => {
    const [sel1, setSel1] = useState({
        anterior: '',
        uno: 'uno',
        dos: '',
        tres: '',
        siguiente: ''
    });
    const sel1Objet = {
        anterior: '',
        uno: '',
        dos: '',
        tres: '',
        siguiente: ''
    }
    const {uno, dos, tres} = sel1;
    const carrusel1 = (e) => {
        if(e.target.id === 'uno'){
            setSel1({...sel1Objet, uno: 'uno'});
        }
        if(e.target.id === 'dos'){
            setSel1({...sel1Objet, dos: 'dos'});
        }
        if(e.target.id === 'tres'){
            setSel1({...sel1Objet, tres: 'tres'});
        }
        if(e.target.id === 'anterior'){
            if(uno === 'uno') return;
            if(dos === 'dos'){
                setSel1({...sel1Objet, uno: 'uno'});  
            }
            if(tres === 'tres'){
                setSel1({...sel1Objet, dos: 'dos'}); 
            }
        }
        if(e.target.id === 'siguiente'){
            if(tres === 'tres') return;
            if(dos === 'dos'){
                setSel1({...sel1Objet, tres: 'tres'}); 
            }
            if(uno === 'uno'){
               setSel1({...sel1Objet, dos: 'dos'}); 
            }
        }
    }

  return (
    <>
        <div className={estrategia.orden} onClick={carrusel1}>
            <p>
                <strong  id="anterior" className={uno === 'uno' ? estrategia.anterior : null}> 
                   &laquo;
                </strong>
            </p>
            <p id="uno" className={uno === 'uno' ? estrategia.uno : null}>1</p>
            <p id="dos" className={dos === 'dos' ? estrategia.dos : null}>2</p>
            <p id="tres" className={tres === 'tres' ? estrategia.tres : null}>3</p>
            <p>
                <strong id="siguiente" className={tres === 'tres' ? estrategia.siguiente : null}>
                    &raquo;
                </strong>
            </p>
        </div>
      <div>
        {uno === 'uno' ?
            <div className={estrategia.carrusel}>
                <h3>Primer ciclo</h3>
                <p><strong>Dibujos y dramatizaciones</strong></p>
            </div> : null
        }
        {dos === 'dos' ?
            <div className={estrategia.carrusel}>
                <h3>Segundo ciclo</h3>
                <p><strong>Juguetes, cuentos y juegos de rol.</strong></p>
            </div> : null
        }
        {tres === 'tres' ?
            <div className={estrategia.carrusel}> 
                <h3>Tercer ciclo</h3>
                <p><strong>Obras de teatro, debates y argumentaciones, investigaciones.</strong></p>
            </div> : null
        }      
      </div>
    </>
  );
};

export default Tecnicas;
