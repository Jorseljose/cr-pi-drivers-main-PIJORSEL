import SearchIcon from "../Icons/SearchIcon";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.Search}>
      <input type="text" placeholder="Buscar" className={styles.input} />
      <SearchIcon />
    </div>
  );
}
