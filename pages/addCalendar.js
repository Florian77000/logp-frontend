
import Header from "../components/Header";
import styles from "../styles/Calendar.module.css";
import { useState } from "react";

export default function addCalendar () {

    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [dlc, setDlc] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleUpload = async() => {
        if(!image) {
            return alert ('Please select image')
        }
        const imageData = new FormData();
        imageData.append('file', image);
        imageData.append('upload_preset', 'imgLogp');

        const response = await fetch("https://api.cloudinary.com/v1_1/dvndnxdsy/image/upload", {
            method : 'POST',
            body : imageData,
        });

        const data = await response.json();
        setUrl(data.secure_url);
    }

    const handleCalendar = () => {
        if(!name || !dlc || !url) {
            alert ('champs manquant');
            return
        } else {
            fetch ('http://localhost:3000/calendars/new', {
                method: 'POST',
                headers:{"content-type":"application/json"},
                body : JSON.stringify({
                    name : name,
                    dlc : dlc,
                    photo : url,
                    date : date,
                })
            })
            .then((reponse) => reponse.json())
            .then((data) => {
                if(data.result === true) {
                    setMessage ('circuit ajouté')
                } else {
                    setMessage ('erreur')
                }
            })
            setName("");
            setDlc("");
            setUrl("");
            setDate("");
        }
    }
    return (
 <>
    <header>
        <Header />
    </header>
    <div>
        <input type="text" placeholder="Nom du circuit" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <select value={dlc} onChange={(e) => setDlc(e.target.value)}>
            <option value="">Choisir un DLC</option>
            <option value="DLC1">Jeu de base</option>
            <option value="DLC2">American Track Pack</option>
            <option value="DLC2">British GT Pack</option>
            <option value="DLC2">2020 GT Wolrd Challenge</option>
            <option value="DLC2">Intercontinental GT Pack</option>
            <option value="DLC2">GT2 Pack</option>
            <option value="DLC2">2023 GT World</option>
        </select>
        <input type="file" width={'200px'} onChange={(e)=>(setImage(e.target.files[0]))}></input>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
    </div>
    <div>
        <button onClick={handleUpload}>upload</button>
    </div>
    <button onClick={handleCalendar}>ajouter</button>      
</>
    )   
}