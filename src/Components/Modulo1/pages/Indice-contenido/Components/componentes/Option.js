import React, { Fragment } from "react";

const actividad = [
  {
    fase1: {
      primera: "equipo",
      segunda: "equipos docentes.",
    },

    fase2: {
      primera: "la sesión informativa",
      segunda: "revisión",
      tercera: "actualización",
      cuarta: "métodos de trabajo.",
    },

    fase3: {
      primera: "Definición del proyecto",
      segunda: "contenidos",
      tercera: "actividades",
    },

    fase4: {
      primera: "Práctica en el centro",
      segunda: "el proyecto educativo",
    },

    fase5: {
      primera: "memoria",
      segunda: "compartir",
      tercera: "experiencia en red",
    },
  },
];
const opcion = actividad.map((opt) => {
  return [
    `<option value=${opt.fase1.primera}></option>`,
    `<option value=${opt.fase1.segunda}></option>`,
    `<option value=${opt.fase2.primera}></option>`,
    `<option value=${opt.fase2.segunda}></option>`,
    `<option value=${opt.fase2.tercera}></option>`,
    `<option value=${opt.fase2.cuarta}></option>`,
    `<option value=${opt.fase3.primera}></option>`,
    `<option value=${opt.fase3.segunda}></option>`,
    `<option value=${opt.fase3.tercera}></option>`,
    `<option value=${opt.fase4.primera}></option>`,
    `<option value=${opt.fase4.segunda}></option>`,
    `<option value=${opt.fase5.primera}></option>`,
    `<option value=${opt.fase5.segunda}></option>`,
    `<option value=${opt.fase5.tercera}></option>`,
  ];
});

const Option = ({seleccionado}) => { 
  

  return (
    <Fragment>  
      <option value="el proyecto educativo">el proyecto educativo</option>
      <option value="métodos de trabajo.">métodos de trabajo.</option>
      <option value="experiencia  en red">experiencia  en red</option>
      <option value="equipos docentes.">equipos docentes.</option>
      <option value="Definición del proyecto">Definición del proyecto</option>
      <option value="equipo">equipo</option>
      <option value="contenidos">contenidos</option>
      <option value="memoria">memoria</option>
      <option value="la sesión informativa">la sesión informativa</option>
      <option value="actualización">actualización</option>
      <option value="actividades">actividades</option>
      <option value="Práctica en el centro">Práctica en el centro</option>
      <option value="revisión">revisión</option>
      <option value="compartir">compartir</option>
    </Fragment>
  );
};

export{
  Option,
  opcion,
  actividad
};
