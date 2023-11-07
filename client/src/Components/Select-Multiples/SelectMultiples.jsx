import { useState } from "react";
import styles from "../Select-Multiples/SelectMultiples.module.css";

const options = {};

export default function SelectMultiples({ label }) {
  return (
    <div className={styles.Select}>
      <div className={styles.label}>{label}</div>
      <div className={styles.container}></div>
    </div>
  );
}
