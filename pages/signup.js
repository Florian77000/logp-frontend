import Header from "../components/Header";
import styles from "../styles/Signin.module.css"
import { useState } from "react";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
 
  //connexion sur la route pour ajouter un user
  const handleSubmit = () =>  {
    fetch('http://localhost:3000/users/new', {
      method:'POST',
      headers: {"content-type":"application/json"},
      body : JSON.stringify({
        email : email,
        password : password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.result === true) {
        setMessage("ok")
      } else {
        setMessage("erreur")
      }
    })
     setEmail(""); //met le input email vide après click sur le bouton
    setPassword(""); //met le input password vide après click sur le bouton
   }
  
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.part}>
            <div className={styles.title}>
              <p className={styles.titleText}>Créer mon compte</p>
            </div>
            <div className={styles.input}>
              <input className={styles.inputText} type="email" placeholder = "Votre email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <input className={styles.inputText} type="password" placeholder="Votre mot de passe" onChange={(e) => setPassword(e.target.value)} value={password} />
              <button className={styles.button} onClick={() => handleSubmit()}>Créer</button>
            </div>
            <div className={styles.other}>
              <p className={styles.otherText}>Deja un compte? </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.imgFumee} src="./fumée.jpg"></img>
        </div>
        </main>
        <div>
          <p>{message}</p>
        </div>
      
    </div>
  );
}