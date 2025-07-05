import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Popover } from "antd";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="logo.png"></img>
      </div>
      <nav className={styles.link}>
        <li ><Link  href="#" ><a className={styles.linkText}>Lien 1</a></Link></li>
        <li ><Link  href="#" ><a className={styles.linkText}>Lien 2</a></Link></li>
        <li ><Link  href="#" ><a className={styles.linkText}>Lien 3</a></Link></li>
      </nav>
      <div className={styles.icon}>
        <Link href="/signin">
          <FontAwesomeIcon
            className={styles.iconUser}
            icon={faUser}
            size="xl"
          />
        </Link>
        <Popover
          content={
            <div className={styles.linkPopover}>
              <li className={styles.linkText}>lien 1</li>
              <li className={styles.linkText}>lien 2</li>
              <li className={styles.linkText}>lien 3</li>
              <a onClick={hide}>Close</a>
            </div>
          }
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <FontAwesomeIcon
            className={styles.iconBars}
            icon={faBars}
            size="2xl"
          />
        </Popover>
      </div>
    </div>
  );
}
