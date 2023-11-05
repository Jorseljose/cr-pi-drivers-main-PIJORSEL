import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <div className={style.Navbar}>
      <Logo></Logo>
      <Button>Crear</Button>
    </div>
  );
}
