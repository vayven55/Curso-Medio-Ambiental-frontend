import React, { useState } from "react";
import orientar from "../../orientar.module.css";

const OrientarFormulario = () => {
  const [relleno, setRelleno] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: ''
  });

  const {input1, input2, input3, input4, input5, input6, input7} = relleno;

  const rellenar = (e) => {
    let inputId = e.target.id;
    let name = e.target.name;
    if (inputId === "input1") {
      if (e.target.value === "reducc") {
        e.target.value = name;
        setRelleno({...relleno, input1: 'ok1'});
      }else{setRelleno({...relleno, input1: 'ko1'});}
    }
    if (inputId === "input2") {
        if (e.target.value === "consumo") {
          e.target.value = name;
          setRelleno({...relleno, input2: 'ok2'});
        }else{setRelleno({...relleno, input2: 'ko2'});}
      }
      if (inputId === "input3") {
        if (e.target.value === "recic") {
          e.target.value = name;
          setRelleno({...relleno, input3: 'ok3'});
        }else{setRelleno({...relleno, input3: 'ko3'});}
      }
      if (inputId === "input4") {
        if (e.target.value === "concie") {
          e.target.value = name;
          setRelleno({...relleno, input4: 'ok4'});
        }else{setRelleno({...relleno, input4: 'ko4'});}
      }
      if (inputId === "input5") {
        if (e.target.value === "de los de") {
          e.target.value = name;
          setRelleno({...relleno, input5: 'ok5'});
        }else{setRelleno({...relleno, input5: 'ko5'});}
      }
      if (inputId === "input6") {
        if (e.target.value === "la econo") {
          e.target.value = name;
          setRelleno({...relleno, input6: 'ok6'});
        }else{setRelleno({...relleno, input6: 'ko6'});}
      }
      if (inputId === "input7") {
        if (e.target.value === "cero res") {
          e.target.value = name;
          setRelleno({...relleno, input7: 'ok7'});
        }else{setRelleno({...relleno, input7: 'ko7'});}
      }
  };

  const [mostrar, setMostrar] = useState(false);

  const mostrarRespuesta = () => {
    setMostrar(!mostrar);
  }

  return (
    <div className={orientar.formulario}>
      <form name="" action="#" className="">
        <div onChange={rellenar} id="">
          <p>
            La
            <input
              className={input1 === 'ok1' ? orientar.verdadero : input1 === 'ko1' ? orientar.falso : ''}
              type="text"
              name="reducción"
              placeholder="Rellenar hueco"
              id="input1"
              defaultValue={''}
            />
            del consumo y el
            <input
              className={input2 === 'ok2' ? orientar.verdadero : input2 === 'ko2' ? orientar.falso : ''}
              type="text"
              name="consumo responsable."
              placeholder="Rellenar hueco"
              id="input2"
              defaultValue={''}
            />
          </p>
          <p>
            El 
            <input
              className={input3 === 'ok3' ? orientar.verdadero : input3 === 'ko3' ? orientar.falso : ''}
              type="text"
              name="reciclaje"
              placeholder="Rellenar hueco"
              id="input3"
              defaultValue={''}
            />
            y 
            <input
              className={input4 === 'ok4' ? orientar.verdadero : input4 === 'ko4' ? orientar.falso : ''}
              type="text"
              name="conciencia"
              placeholder="Rellenar hueco"
              id="input4"
              defaultValue={''}
            />
            <input
              className={input5 === 'ok5' ? orientar.verdadero : input5 === 'ko5' ? orientar.falso : ''}
              type="text"
              name="de los desechos"
              placeholder="Rellenar hueco"
              id="input5"
              defaultValue={''}
            />
            que el ser humano genera.
          </p>
          <p>
            Aspectos clave de 
            <input
              className={input6 === 'ok6' ? orientar.verdadero : input6 === 'ko6' ? orientar.falso : ''}
              type="text"
              name="la economía circular"
              placeholder="Rellenar hueco"
              id="input6"
              defaultValue={''}
            />
            ,  sostenible y centrada en el concepto de
            <input
              className={input7 === 'ok7' ? orientar.verdadero : input7 === 'ko7' ? orientar.falso : ''}
              type="text"
              name="cero residuos"
              placeholder="Rellenar hueco"
              id="input7"
              defaultValue={''}
            />
          </p>
          <div className="">
            

              <input
                type="button"
                className={orientar.mostrar_repuestas}
                value="Mostrar respuestas"
                onClick={mostrarRespuesta}
              />

              
            
          </div>
        </div>
      </form>
      {mostrar ? 
        <section>
            <p>
            La <u>reducción</u> del consumo y el <u>consumo responsable.</u>{" "}
            <br></br>
            El <u>reciclaje </u>y <u>conciencia</u>{' '}
            <u>de los desechos </u>que el ser humano genera.<br></br>
            Aspectos clave de <u>la economía circular</u>
            <span>,  sostenible y centrada en el concepto de </span>
            <u>cero residuos</u>
            </p>
        </section> : null
      }
      
    </div>
  );
};

export default OrientarFormulario;
