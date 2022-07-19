import React, { useState } from "react";
import ideaDesa from "../../ideaDesa.module.css";

const IdeaDesarrollo = () => {
  const [izquierdo, setIzquierdo] = useState(true);
  const [derecho, setDerecho] = useState(false);

  const menuIzquierdo = () => {
    if (izquierdo) return;
    if (!izquierdo) {
      setIzquierdo(true);
      setDerecho(false);
    }
  };
  const menuDerecho = () => {
    if (derecho) return;
    if (!derecho) {
      setIzquierdo(false);
      setDerecho(true);
    }
  };
  return (
    <div className={ideaDesa.contenido}>
      <div className="row">
        <div className="col-1">
          <p
            onClick={menuIzquierdo}
            className={
              izquierdo
                ? ideaDesa.ajuste_izquierda_atenuado
                : ideaDesa.ajuste_izquierda
            }
          >
            &laquo;
          </p>
        </div>
        <div className={`col-10 ${ideaDesa.centrar}`}>
          {izquierdo ? (
            <div className={ideaDesa.centrar}>
              <h3>
                <span>Propuesta de ideas para desarrollar</span>
              </h3>
              <p>
                <span>
                  Frente al cambio climático podemos adoptar dos estrategias: la
                  mitigación (nivel globlal)  y la adaptación (niveles locales)
                </span>
              </p>
              <p>
                <span>
                  Nuestros hábitos de consumo, como las compras, el tipo de
                  alimentación, el transporte o el ahorro de energía, influyen
                  en la emisión de gases de efecto invernadero y forman parte de
                  las estrategias de mitigación.
                </span>
              </p>
              <p>
                <span>
                  En el mundo habrá más refugiados climáticos que refugiados que
                  huyen de guerras
                </span>
              </p>
              <p>
                <span>
                  Las personas y colectivos más vulnerables (entre ellos, las
                  niñas y niños) sufren más las consecuencias del cambio
                  climático.
                </span>
              </p>{" "}
            </div>
          ) : null}

          {derecho ? (
            <div className={ideaDesa.centrar}>
              <h3>
                <span>Conceptos Clave para su desarrollo</span>
              </h3>

              <table className={ideaDesa.table}>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <span>Interdependencia</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Prevención</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Resolución de problemas</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Sostenibilidad</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Impacto</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Control</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Protección</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Elección</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Convivencia</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Resiliencia</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Evolución</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Adaptación</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Intereses</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Toma de decisiones</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Previsión</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>Consecuencias</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
        <div className="col-1">
          <p
            onClick={menuDerecho}
            className={
              derecho
                ? ideaDesa.ajuste_derecha_atenuado
                : ideaDesa.ajuste_derecha
            }
          >
            &raquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdeaDesarrollo;
