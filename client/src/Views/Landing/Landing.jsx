import Button from "../../Components/Button/Button";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <div className={styles.landingCard}>
        <h1>
          Bienvenido a mi aplicación de{" "}
          <span className={styles.titleBold}>Drivers</span>
        </h1>
        <Button onClick={() => navigate("/app/home")}>Entrar</Button>
      </div>
    </div>
  );
}
