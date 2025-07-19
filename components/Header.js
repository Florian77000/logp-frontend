import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Popover } from "antd";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { logout} from "../reducer/user";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  
  //gestion du popover lors du login
  const [userPopoverOpen, setUserPopoverOpen] = useState(false);
  const hideUserPopover = () => {
    setUserPopoverOpen(false);
  };
  const handleUserPopoverOpenChange = (newOpen) => {
    setUserPopoverOpen(newOpen);
  };
  //fin gestion du popover lors du login

  //gestion du popover menu pour ecran smartphone
  const [mainMenuPopoverOpen, setMainMenuPopoverOpen] = useState(false);
  const hideMainMenuPopover = () => {
    setMainMenuPopoverOpen(false);
  };
  const handleMainMenuPopoverOpenChange = (newOpen) => {
    setMainMenuPopoverOpen(newOpen);
  };
  // end gestion du popover menu pour ecran smartphone


  //gerer le jsx en fonction de si connecté ou non
     let userSection;
      const handleLogout = () => {
      dispatch(logout());
      hideUserPopover();
      }
     if(user.email) {
        userSection = (
          <div>
            <p>bienvenue {user.email}</p>
            <Popover
          content={
            <div className={styles.linkPopover}>
              <li className={styles.linkTextAdmin}>ajouter un circuit</li>
              <li className={styles.linkTextAdmin}>lien 2</li>
              <li className={styles.linkTextAdmin}>lien 3</li>
                <button onClick={() => handleLogout()}>logout</button>
              <a onClick={hideUserPopover}>Close</a>
            </div>
          }
          trigger="click"
          open={userPopoverOpen}
          onOpenChange={handleUserPopoverOpenChange}
        >
          <FontAwesomeIcon
            className={styles.iconBarsAdmin}
            icon={faBars}
            size="2xl"
          />
        </Popover>
           </div>
        )
     } else {
      userSection = (
     <>
      <Link href="/signin">
          <FontAwesomeIcon
            className={styles.iconUser}
            icon={faUser}
            size="xl" 
          />
        </Link>
      </>
      )
     }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="logo.png"></img>
      </div>
      <nav className={styles.link}>
        <li ><Link  href="./calendar" ><a className={styles.linkText}>Calendrier</a></Link></li>
        <li ><Link  href="./addCalendar" ><a className={styles.linkText}>Ajout circuit</a></Link></li>
        <li ><Link  href="#" ><a className={styles.linkText}>Lien 3</a></Link></li> 
      </nav>
      <div className={styles.icon}>
        <div>{userSection}</div>
        <Popover
          content={
            <div className={styles.linkPopover}>
              <li className={styles.linkText}>lien 1</li>
              <li className={styles.linkText}>lien 2</li>
              <li className={styles.linkText}>lien 3</li>
              <a onClick={hideMainMenuPopover}>Close</a>
            </div>
          }
          trigger="click"
          open={mainMenuPopoverOpen}
          onOpenChange={handleMainMenuPopoverOpenChange}
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
