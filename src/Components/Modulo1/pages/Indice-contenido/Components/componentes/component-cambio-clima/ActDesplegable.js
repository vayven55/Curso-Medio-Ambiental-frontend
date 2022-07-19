import React from "react";
import ideaDesa from '../../ideaDesa.module.css';


const ActDesplegable = () => {
  const comprobar = () => {

  }
  const mostrar = () => {
    
  }

  return (
    <div>
      <h3><span className={ideaDesa.actividadDesplegable_span}>&nbsp;?&nbsp;</span>Actividad desplegable</h3>
      <div>
        <div className={ideaDesa.actividadDesplegable}>
          <h4>Lea y complete</h4>

          <section>
            <form name="" action="#" className="">
              <div className={ideaDesa.select}>
                <p>
                  Debe abordarse  el carácter
                  <select id="">
                    <option></option>
                    <option value="cambio climático">cambio climático</option>
                    <option value="sistémico">sistémico</option>
                    <option value="calentamiento global">
                      calentamiento global
                    </option>
                    <option value="estilo de vida">estilo de vida</option>
                    <option value="todos.">todos.</option>
                  </select>
                  del cambio climático  Es decir, el cambio climático no es un
                  problema que afecte a otros países o que este en manos de los
                  políticos o de las personas con poder. El cambio climático
                  afecta a
                  <select>
                    <option></option>
                    <option value="cambio climático">cambio climático</option>
                    <option value="sistémico">sistémico</option>
                    <option value="calentamiento global">
                      calentamiento global
                    </option>
                    <option value="estilo de vida">estilo de vida</option>
                    <option value="todos.">todos.</option>
                  </select>
                  Por eso lo ideal es abordar el cambio climático planteando a
                  los alumnos las relaciones entre
                  <select>
                    <option></option>
                    <option value="cambio climático">cambio climático</option>
                    <option value="sistémico">sistémico</option>
                    <option value="calentamiento global">
                      calentamiento global
                    </option>
                    <option value="estilo de vida">estilo de vida</option>
                    <option value="todos.">todos.</option>
                  </select>
                  y
                  <select>
                    <option></option>
                    <option value="cambio climático">cambio climático</option>
                    <option value="sistémico">sistémico</option>
                    <option value="calentamiento global">
                      calentamiento global
                    </option>
                    <option value="estilo de vida">estilo de vida</option>
                    <option value="todos.">todos.</option>
                  </select>
                  desde dos perspectivas que se retroalimentan:
                </p>
                <p>
                  
                    ¿Cómo influye nuestro estilo de vida en el
                    <select>
                      <option></option>
                      <option value="cambio climático">cambio climático</option>
                      <option value="sistémico">sistémico</option>
                      <option value="calentamiento global">
                        calentamiento global
                      </option>
                      <option value="estilo de vida">estilo de vida</option>
                      <option value="todos.">todos.</option>
                    </select>
                    <strong>?</strong>
                  
                </p>
                <p>
                  <strong>
                    ¿Cómo el cambio climático puede obligarnos a cambiar nuestro
                    <select>
                      <option></option>
                      <option value="cambio climático">cambio climático</option>
                      <option value="sistémico">sistémico</option>
                      <option value="calentamiento global">
                        calentamiento global
                      </option>
                      <option value="estilo de vida">estilo de vida</option>
                      <option value="todos.">todos.</option>
                    </select>
                    ?
                  </strong>
                </p>
                <div>
                  <p>
                    <input
                      onclick={comprobar}
                      className="button"
                      type="submit"
                      name=""
                      value="Comprobar"
                      id=""
                    />

                    <input
                      onclick={mostrar}
                      type="button"
                      name=""
                      value="Mostrar texto"
                      className=""
                    />
                  </p>
                </div>
              </div>
            </form>
          </section>
          <section>
            <p>
              <span>
                Debe abordarse  el carácter
                <u>sistémico</u> del cambio climático  Es decir, el cambio
                climático no es un problema que afecte a otros países o que este
                en manos de los políticos o de las personas con poder. El cambio
                climático afecta a <u>todos. </u>Por eso lo ideal es abordar el
                cambio climático planteando a los alumnos las relaciones entre{" "}
                <u>cambio climático </u>y<u>estilo de vida</u> desde dos
                perspectivas que se retroalimentan:
              </span>
            </p>
            <p>
              <span>
                ¿Cómo influye nuestro estilo de vida en el{" "}
                <u>calentamiento global</u>?
              </span>
            </p>
            <p>
              <span>
                ¿Cómo el cambio climático puede obligarnos a cambiar nuestro{" "}
                <u>estilo de vida</u>?
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ActDesplegable;
