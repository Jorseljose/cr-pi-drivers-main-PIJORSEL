import style from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={style.Filter}>
      <div>Buscar</div>
      <div>Filtrar por equipo</div>
      <div>Filtrar por Origen</div>
      <div>Ordenar Alfabeticamente</div>
      <div>Ordenar por Fechas</div>
    </div>
  );
}
