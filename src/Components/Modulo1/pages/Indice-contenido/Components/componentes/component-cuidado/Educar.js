import React from 'react';
import cuidado from '../../cuidado.module.css';

const EducarEn = () => {
  return (
    <p className={cuidado.en_sobre_para} id="Educar-en-el-medio">
        <span>Es una perspectiva <strong>instrumentalista</strong> del
            medio que proporciona estímulos para los aprendizajes
            directos contribuyendo a la formación integral y a la
            maduración tanto psíquica como física de los
            educandos.
        </span>
    </p>
  )
}
const EducarSobre = () => {
    return (
        <p className={cuidado.en_sobre_para} id="Educar-sobre-el-medio">
            <span>Aquí el medio los alumnos se aproximan al medio{' '}
                <strong>interactuando</strong> con el e interpretándolo
                como una amalgama de contenidos de diferentes disciplinas.
                De esta forma los educandos obtienen unos conocimientos
                exhaustivos de acuerdo a su nivel madurativo acerca de los
                problemas lo cual propicia cambios de comportamiento hacia
                una sociedad sostenible.
            </span>
    </p>
    )
}

const EducarPara = () => {
    return (
        <p className={cuidado.en_sobre_para} id="Educar-para-el-medio">
            <span>
                Aquí el entorno toma importancia frente al individuo que se
                centra en la protección de valores y recursos del propio
                entorno.
            </span>
        </p>
    )
  }
export{EducarEn,EducarSobre, EducarPara}