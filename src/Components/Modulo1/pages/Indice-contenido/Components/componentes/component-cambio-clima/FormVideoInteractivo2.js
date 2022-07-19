import React from "react";
import ideaDesa from '../../ideaDesa.module.css';

const FormVideoInteractivo2 = ({oculto2, acierto2, setAcierto2, total2, setTotal2}) => {
  const formOculto2 = e => {
    const valor = e.target.value;
    const name = e.target.name;
    if(valor === 'mitigación' && name === 'abordar2'){
      setAcierto2('100%');
      setTotal2(50);
    }else {
      setAcierto2('0%');
      setTotal2(0);
    }
  }

  return (
    <div className={oculto2 ? ideaDesa.ocultar : ideaDesa.visible}  onChange={formOculto2}>
      <p>¿Qué puntos se pueden abordar con los alumnos en referencia a esto?</p>
      <div className={ideaDesa.orden_input}>
        <input type="radio" value="energía en casa" name="abordar2" />
        <label>El uso que hacemos de la energía en casa</label>
      </div>
      <div className={ideaDesa.orden_input}>
        <input type="radio" value="adaptación" name="abordar2" />
        <label>Gases de efecto invernadero como adaptación: nivel local</label>
      </div>
      <div className={ideaDesa.orden_input}>
        <input type="radio" value="mitigación" name="abordar2" />
        <label>Gases de efecto invernadero como mitigación: nivel global</label>
      </div>
    </div>
  );
};

export default FormVideoInteractivo2;
