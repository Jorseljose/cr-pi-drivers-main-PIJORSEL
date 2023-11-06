import styles from "../Select-Multiples/SelectMultiples.module.css";

export default function SelectMultiples({ placeholder }) {
  return (
    <div className={styles.Select}>
      <select className={styles.input}>
        <option value="" disabled selected>
          {placeholder}
        </option>
      </select>
    </div>
  );
}
