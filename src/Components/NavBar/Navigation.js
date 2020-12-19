import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Routes/Routes.js";
import { withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="bodyy">
      <section>
        <header>
          <div className="navBox">
            <ul className="extra">
              <li style={{ marginLeft: "50vw" }}>
                <Link to={ROUTES.STATS}>Estadísticas</Link>
              </li>
              <li>
                <Link to={ROUTES.HISTORIA}>Historia Clínica</Link>
              </li>
              <Link to={ROUTES.HOMEPAGE}>
                <button className="logout">Cerrar Sesión</button>
              </Link>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
}
export default withRouter(Navigation);
