import Search from "../Search/Search";
import style from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={style.Filter}>
      <Search />
      <div>Filtrar por equipo</div>
      <div>Filtrar por Origen</div>
      <div>Ordenar Alfabeticamente</div>
      <div>Ordenar por Fechas</div>
    </div>
  );
}
