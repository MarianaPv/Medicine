import React, { useState, useContext } from "react";
import { Input, InputLabel } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./index.css";
import * as ROUTES from "../../Routes/Routes.js";
import UserContext from "../../Context/context";
import Axios from "axios";

function HomePage(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [token, setToken] = useState("");

  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const loginRes = await Axios.post(
        "http://localhost:3001/users/login",
        loginUser,
        config
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      props.history.push("/estadisticas");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      alert("El correo o contraseña digitados son incorrectos");
    }
  };

  return (
    <div className="body">
      <div className="square">
        <div className="content">BIENVENIDO</div>
        <div className="form">
          <div>
            <InputLabel
              style={{ fontFamily: "Jost", color: "black" }}
              htmlFor="email"
            >
              Correo Electrónico
            </InputLabel>
            <Input
              id="email"
              name="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "2.5vh" }}>
            <InputLabel
              style={{ fontFamily: "Jost", color: "black" }}
              htmlFor="password"
            >
              Contraseña
            </InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to={ROUTES.STATS}>
            <button className="button" onClick={submit}>
              {" "}
              INGRESAR
            </button>
          </Link>
          <div className="member">
            ¿No eres miembro?
            <Link to={ROUTES.REGISTER}>
              <button className="link">Registrate aquí</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomePage);
