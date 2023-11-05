import style from "../Pagination/Pagination.module.css";
import IconsReft from "../Icons/IconsReft";
import IconsLeft from "../Icons/IconsLeft";

export default function Pagination() {
  return (
    <div className={style.Pagination}>
      <IconsLeft />
      1/5
      <IconsReft />
    </div>
  );
}
