import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="logo.png"></img>
      </div>
      <div className={styles.link}>
        <li className={styles.linkText}>lien 1</li>
        <li className={styles.linkText}>lien 5</li>
        <li className={styles.linkText}>lien 3</li>
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faUser} size="xl" />
      </div>
    </div>
  );
}
