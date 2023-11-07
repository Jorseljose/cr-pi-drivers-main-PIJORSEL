import { useState } from "react";
import styles from "../Select-Multiples/SelectMultiples.module.css";

export default function SelectMultiples({ placeholder, onChange, label }) {
  const [values, setValues] = useState([]);

  return (
    <div className={styles.Select}>
      <div className={styles.label}>{label}</div>
      <div className={styles.container}>
        {values.map((value) => (
          <div key={value}>{value}</div>
        ))}
        <input className={styles.input} placeholder={placeholder} />
      </div>
    </div>
  );
}
