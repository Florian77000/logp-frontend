
import Header from "../components/Header";
import styles from "../styles/Calendar.module.css";
import { useState } from "react";

export default function Calendar () {

    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [dlc, setDlc] = useState('');
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
        }
    }
    return (
 <>
    <header>
        <Header />
    </header>
    <div>
        <input type="text" placeholder="Nom du circuit" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder="Nom du dlc" value={dlc} onChange={(e)=>setDlc(e.target.value)}></input>
        <input type="file" width={'200px'} onChange={(e)=>(setImage(e.target.files[0]))}></input>
    </div>
    <div>
        <button onClick={handleUpload}>upload</button>
    </div>
    <button onClick={handleCalendar}>ajouter</button>      
</>
    )   
}