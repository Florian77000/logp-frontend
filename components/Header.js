import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="logo.png"></img>
      </div>
      <div className={styles.link}>
        <li className={styles.linkText}>lien 1</li>
        <li className={styles.linkText}>lien 2</li>
        <li className={styles.linkText}>lien 3</li>
      </div>
      <div className={styles.icon}>
        <Link href="/signin">
          <FontAwesomeIcon
            className={styles.iconUser}
            icon={faUser}
            size="xl"
          />
        </Link>

        <FontAwesomeIcon className={styles.iconBars} icon={faBars} size="2xl" />
      </div>
    </div>
  );
}
