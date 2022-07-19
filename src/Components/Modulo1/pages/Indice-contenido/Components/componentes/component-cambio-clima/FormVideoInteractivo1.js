import React from 'react'
import ideaDesa from '../../ideaDesa.module.css';



const FormVideoInteractivo1 = ({oculto1, acierto1, setAcierto1, total1, setTotal1}) => {
  const formOculto1 = e => {
    const valor = e.target.value;
    const name = e.target.name;
    if(valor === 'impacto' && name === 'abordar1'){
      setAcierto1('100%');
      setTotal1(50)
    }else {
      setAcierto1('0%');
      setTotal1(0)
    }
  }

  

  return (
    <div className={oculto1 ? ideaDesa.ocultar : ideaDesa.visible} onChange={formOculto1}>
    <p>¿Qué concepto clave se está tratando en este punto?</p>
    <div className={ideaDesa.orden_input}>
      <input type="radio" value="interdependencia" name="abordar1" />
      <label>Interdependencia</label>
    </div>
    <div className={ideaDesa.orden_input}>
      <input type="radio" value="convivencia" name="abordar1" />
      <label>Convivencia</label>
    </div>
    <div className={ideaDesa.orden_input}>
      <input type="radio" value="impacto" name="abordar1" />
      <label>Impacto</label>
    </div>
    <div className={ideaDesa.orden_input}>
      <input type="radio" value="evolución" name="abordar1" />
      <label>Evolución</label>
    </div>
    <div className={ideaDesa.orden_input}>
      <input type="radio" value="protección" name="abordar1" />
      <label>Protección</label>
    </div>
    <div className={ideaDesa.orden_input}>
      <input type="radio" value="control" name="abordar1" />
      <label>Control</label>
    </div>
  </div>
  )
}

export default FormVideoInteractivo1