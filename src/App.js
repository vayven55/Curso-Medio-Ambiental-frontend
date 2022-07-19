import React, { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Presentacion from "./Components/Modulo1/pages/Presentacion";
import Tarea from "./Components/Modulo1/pages/Tarea/Tarea";
import RubricaEvaluacion from "./Components/Modulo1/pages/Tarea/RubricaEvaluacion";
import RubricaEjemplo from "./Components/Modulo1/pages/Tarea/RubricaEjemplo";
import IndiceContenido from "./Components/Modulo1/pages/Indice-contenido/IndiceContenido.js";
import Agenda2030 from "./Components/Modulo1/pages/Indice-contenido/Agenda2030.js";
import DocePautas from "./Components/Modulo1/pages/Indice-contenido/DocePautas";
import EscuelasEficaces from "./Components/Modulo1/pages/Indice-contenido/EscuelasEficaces";
import ProgramaEcoescuelas from "./Components/Modulo1/pages/Indice-contenido/ProgramaEcoescuelas";
import AmbienCentrosEduca from "./Components/Modulo1/pages/Indice-contenido/AmbienCentrosEduca";
import ImplProgrAmbien from "./Components/Modulo1/pages/Indice-contenido/ImplProgrAmbien";
import CuidadoMedAmb from "./Components/Modulo1/pages/Indice-contenido/CuidadoMedAmb";
import EducacAmbiental from "./Components/Modulo1/pages/Indice-contenido/EducacAmbiental";
import PsicologaEscolAmbie from "./Components/Modulo1/pages/Indice-contenido/PsicologEscolAmbie";
import DocenteEducaAmbien from "./Components/Modulo1/pages/Indice-contenido/DocenteEducaAmbien";
import AlumCuidaMedAmb from "./Components/Modulo1/pages/Indice-contenido/AlumCuidaMedAmb";
import OrientarAlumn from "./Components/Modulo1/pages/Indice-contenido/OrientarAlumn";
import LocalAGlobal from "./Components/Modulo1/pages/Indice-contenido/LocalAGlobal";
import FiloBioEcoAntro from "./Components/Modulo1/pages/Indice-contenido/FiloBioEcoAntro";
import ConcienciaAmbiental from './Components/Modulo1/pages/Indice-contenido/ConcienciaAmbiental';
import PensamientoCritico from "./Components/Modulo1/pages/Indice-contenido/PensamientoCritico";
import FomentoPensamiCrit from './Components/Modulo1/pages/Indice-contenido/FomentoPensamiCrit';
import ContEduAmbPrimaria from "./Components/Modulo1/pages/Indice-contenido/ContEduAmbPrimaria";
import EstrategDidactEduAmb from "./Components/Modulo1/pages/Indice-contenido/EstrategDidactEduAmb";
import CambioClimaAbordaje from "./Components/Modulo1/pages/Indice-contenido/CambioClimaAbordaje";
import EconomiaCircular from "./Components/Modulo1/pages/Indice-contenido/EconomiaCircular";
import NotFoundPage from "./NotFoundPage";

function App() {
  const [menuOk, setmenuOk] = useState(true);
  const vistaMenu = (e) => {
    e.preventDefault();
    setmenuOk(!menuOk);
  };

  //const [data, setData] = React.useState(null);

  /*React.useEffect(() => {
    fetch("/curso")
      .then((res) => res.json())
      //.then((data) => setData(data.message));
  }, []);*/
  return (
    <Fragment>
      {/*<p>{!data ? "Loading..." : data}</p>*/}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/modulo1_presentacion"
            element={<Presentacion vistaMenu={vistaMenu} menuOk={menuOk} />}
          />
          <Route
            exact
            path="/modulo1_tarea"
            element={<Tarea menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_tarea/rubrica"
            element={
              <RubricaEvaluacion menuOk={menuOk} vistaMenu={vistaMenu} />
            }
          />
          <Route
            exact
            path="/modulo1_tarea/rubrica_ejemplo"
            element={
              <RubricaEjemplo />
            }
          />
          <Route
            exact
            path="/modulo1_indice-contenido"
            element={<IndiceContenido menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/1.-agenda_2030"
            element={<Agenda2030 menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/1.-agenda_2030/1.2-pautas_para_iniciar_un_proyecto"
            element={<DocePautas menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/2.-escuelas_eficaces"
            element={<EscuelasEficaces menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/2.1-programa_ecoescuelas"
            element={
              <ProgramaEcoescuelas menuOk={menuOk} vistaMenu={vistaMenu} />
            }
          />
          <Route
            exact
            path="/modulo1_indice-contenido/3.-ambientalizacin_de_centros_educativos"
            element={
              <AmbienCentrosEduca menuOk={menuOk} vistaMenu={vistaMenu} />
            }
          />
          <Route
            exact
            path="/modulo1_indice-contenido/3.1-niveles-implantacion-programa-ambiental"
            element={<ImplProgrAmbien menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/3.2_el_cuidado_del_medio_ambiente"
            element={<CuidadoMedAmb menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/4.-educacion_ambiental"
            element={<EducacAmbiental menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/4.1-la_psicologa_en_el_contexto_escolar_y_ambiental"
            element={
              <PsicologaEscolAmbie menuOk={menuOk} vistaMenu={vistaMenu} />
            }
          />
          <Route
            exact
            path="/modulo1_indice-contenido/4.2-el_docente_orientado_a_la_educacion_ambiental"
            element={
              <DocenteEducaAmbien menuOk={menuOk} vistaMenu={vistaMenu} />
            }
          />
          <Route
            exact
            path="/modulo1_indice-contenido/4.3-alumnos_el_cuidado_del_medio_ambiente"
            element={<AlumCuidaMedAmb menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/4.4-orientar_a_nuestro_alumnado"
            element={<OrientarAlumn menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/4.5-desde_lo_local_a_lo_global"
            element={<LocalAGlobal menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/5.-modelos_filosoficos_biocentrismo_y_ecocentrismo_vs_antropocentrismo"
            element={<FiloBioEcoAntro menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/5.1_concienciacion_y_tica_ambiental"
            element={<ConcienciaAmbiental menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/5.2-despertar_del_pensamiento_crtico"
            element={<PensamientoCritico menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/5.2.1-fomento_del_pensamiento_critico"
            element={<FomentoPensamiCrit menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/6.-tipos-contenido-educacin_ambiental_para_primaria"
            element={<ContEduAmbPrimaria menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/6.1-estrategia_y_didctica-educacion_ambiental-currculo"
            element={<EstrategDidactEduAmb menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/6.2-cambio-climatico_propuesta_de_abordaje"
            element={<CambioClimaAbordaje menuOk={menuOk} vistaMenu={vistaMenu} />}
          />
          <Route
            exact
            path="/modulo1_indice-contenido/6.3-economia-circular_propuesta_de_abordaje"
            element={<EconomiaCircular menuOk={menuOk} vistaMenu={vistaMenu} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
