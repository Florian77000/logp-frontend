import { useState, useEffect } from "react";
import styles from "../styles/Calendar.module.css";
import moment from 'moment';
moment.locale('fr');
import 'moment/locale/fr';

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
                    <div className={styles.hours}>
                        {moment(e.date).format('Do MMM')}
                    </div>
                    <div className={styles.divText}>
                        <h3>{e.name}</h3>
                        <h4>{e.dlc}</h4>
                        <p className={styles.textEvent}>Début de l'event : </p>
                    </div> 
                </div>
        ));
    
    return (
        <>
        <h1 className={styles.title}>Calendrier</h1>
        <div className={styles.calendar}>{watch}</div>
        </>
    )
}