import React, { useState } from "react";
import fomento from "../../fomentoPensamiento.module.css";

const VerdaderoFalso = () => {
  const [verdad, setVerdad] = useState({
    sensible: "",
    reconoce: "",
    aporta: "",
    expresar: "",
  });
  const { sensible, reconoce, aporta, expresar } = verdad;

  const comprobar = (e) => {
    const id = e.target.id;
    if (id === "sensibleV") {
      setVerdad({ ...verdad, sensible: "verdadero" });
    } else if (id === "sensibleF") {
      setVerdad({ ...verdad, sensible: "falso" });
    }

    if (id === "reconoceV") {
      setVerdad({ ...verdad, reconoce: "falso" });
    } else if (id === "reconoceF") {
      setVerdad({ ...verdad, reconoce: "verdadero" });
    }

    if (id === "aportaV") {
      setVerdad({ ...verdad, aporta: "falso" });
    } else if (id === "aportaF") {
      setVerdad({ ...verdad, aporta: "verdadero" });
    }

    if (id === "expresarV") {
      setVerdad({ ...verdad, expresar: "verdadero" });
    } else if (id === "expresarF") {
      setVerdad({ ...verdad, expresar: "falso" });
    }
  };
  return (
    <article className={fomento.articleVerdaderoFalso}>
      <div>
        <h3>Pregunta Verdadero-Falso</h3>

        <div onChange={comprobar}>
          <section>
            <form name="" action="#" className="">
              <div>
                <p>
                  <span>
                    Es sensible a los problemas globales y es capaz de
                    extrapolarlos a problemas locales en su entorno más
                    próximo. 
                  </span>
                </p>
              </div>
              <p>
                <label>
                  <input type="radio" name="sensible" id="sensibleV" />
                  Verdadero
                </label>
                <label>
                  <input type="radio" name="sensible" id="sensibleF" /> Falso
                </label>
              </p>
            </form>
            {
              <section>
                {sensible === "verdadero" ? (
                  <p className={fomento.correcto}>
                    <strong>Correcto</strong>
                  </p>
                ) : sensible === "falso" ? (
                  <p className={fomento.incorrecto}>
                    <strong>Incorrecto</strong>
                  </p>
                ) : null}
              </section>
            }
          </section>
          <section>
            <form name="" action="#">
              <div>
                <p>
                  <span>
                    Reconoce otras perspectivas aunque muestra rectitud ante su
                    propio punto.
                  </span>
                </p>
              </div>
              <p>
                <label>
                  <input type="radio" name="reconoce" id="reconoceV" />
                  Verdadero
                </label>
                <label>
                  <input type="radio" name="reconoce" id="reconoceF" /> Falso
                </label>
              </p>
            </form>
            {
              <section>
                {reconoce === "verdadero" ? (
                  <div>
                    <p className={fomento.correcto}>
                      <strong>Correcto</strong>
                    </p>
                    <p className={fomento.reconoce}>
                      Reconoce otros puntos de vista y se muestra flexible a la
                      autocorreción
                    </p>
                  </div>
                ) : reconoce === "falso" ? (
                  <p className={fomento.incorrecto}>
                    <strong>Incorrecto</strong>
                  </p>
                ) : null}
              </section>
            }
          </section>
          <section>
            <form name="" action="#">
              <div>
                <p>
                  <span>
                    Aporta una perspectiva general y opina sobre lo que piensan
                    los demás comprendiendo el problema y aportando posibles
                    soluciones. 
                  </span>
                </p>
              </div>
              <p>
                <label>
                  <input type="radio" name="aporta" id="aportaV" />
                  Verdadero
                </label>
                <label>
                  <input type="radio" name="aporta" id="aportaF" /> Falso
                </label>
              </p>
            </form>
            <section>
              {aporta === "verdadero" ? (
                <div>
                  <p className={fomento.correcto}>
                    <strong>Correcto</strong>
                  </p>
                  <p className={fomento.reconoce}>
                    Aporta su propia perspectiva en la comprensión del problema
                    aportando posibles soluciones 
                  </p>
                </div>
              ) : aporta === "falso" ? (
                <p className={fomento.incorrecto}>
                  <strong>Incorrecto</strong>
                </p>
              ) : null}
            </section>
          </section>
          <section>
            <form name="" action="#">
              <div>
                <p>
                  <span>
                    Suele expresar cuestiones específicas en torno a problemas
                    surgidos de la propia experiencia en el entorno escolar. 
                  </span>
                </p>
              </div>
              <p>
                <label>
                  <input type="radio" name="expresar" id="expresarV" />
                  Verdadero
                </label>
                <label>
                  <input type="radio" name="expresar" id="expresarF" /> Falso
                </label>
              </p>
            </form>
            <section>
              {expresar === "verdadero" ? (
                <p className={fomento.correcto}>
                  <strong>Correcto</strong>
                </p>
              ) : expresar === "falso" ? (
                <p className={fomento.incorrecto}>
                  <strong>Incorrecto</strong>
                </p>
              ) : null}
            </section>
          </section>
        </div>
      </div>
    </article>
  );
};

export default VerdaderoFalso;
