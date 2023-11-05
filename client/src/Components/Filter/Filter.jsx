import Search from "../Search/Search";
import Select from "../Select/Select";
import style from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={style.Filter}>
      <Search />
      <Select placeholder="Filtrar por equipo" />
      <Select placeholder="Filtrar por Origen" />
      <Select placeholder="Ordenar Alfabeticamente" />
      <Select placeholder="Ordenar por Fechas" />
    </div>
  );
}
