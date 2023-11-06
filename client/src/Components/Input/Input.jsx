import styles from "./Input.module.css";

export default function Input({ placeholder, label }) {
  return (
    <div className={styles.InputLabel}>
      <div className={styles.label}>{label}</div>
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
}
