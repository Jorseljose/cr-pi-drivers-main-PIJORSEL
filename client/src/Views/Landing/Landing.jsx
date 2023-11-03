// import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Landing/drivers.jpeg";
import style from "../Landing/Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className={style.content}>
        <h1 className={style.title}>Bienvenido a mi aplicación</h1>
        <button onClick={() => navigate("/app/home")}>Ingresar</button>
      </div>
      <img
        src={backgroundImage}
        alt=" Background "
        className="background-image"
      />
    </div>
  );
};
export default Landing;
