import { useState, useEffect } from "react";

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
            <div key={i}>
                <p>{e.name}</p>
                <p>{e.dlc}</p>
            </div>
        ));
    
    return (
        <>
        <h1>Calendrier</h1>
        <div>{watch}</div>
        </>
    )
}