import styles from "./Select.module.css";

export default function Select({ placeholder }) {
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
