import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>logo</div>
      <div className={styles.link}>
        <li className={styles.linkText}>lien 1</li>
        <li>lien 2</li>
        <li>lien 3</li>
      </div>
      <div className={styles.icon}>icon connection</div>
    </div>
  );
}
