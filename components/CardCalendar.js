import { useState, useEffect } from "react";
import styles from "../styles/Calendar.module.css"

export default function CardCalendar () {

    const [calendar,setCalendar] = useState([])
    
        //useEffect pour initialiser le hook d'etat au premier chargement de la page
        useEffect(() => {
        fetch("http://localhost:3000/calendars")
          .then((response) => response.json())
          .then((data) => {
            setCalendar(data.data);
          });
      }, []);
    
        const watch = calendar.map((e,i) => (
                <div className={styles.calendarCard} key={i}>
                    <div className={styles.divImage}>
                        <img className={styles.image} src={e.photo}></img>
                    </div>
                    <div className={styles.divText}>
                        <p>{e.name}</p>
                        <p>{e.dlc}</p>
                    </div>
                    
                </div>
        ));
    
    return (
        <div className={styles.calendar}>{watch}</div>
    )
}