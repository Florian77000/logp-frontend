import Header from "../components/Header";
import styles from "../styles/Signin.module.css"
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageSucces, setMessageSucces] = useState ("");

  const router = useRouter ();
 
  //connexion sur la route pour ajouter un user
  const handleSubmit = () =>  {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
         if (!emailRegex.test(email)) {
    setMessage("Le format d'email est incorrect");
    return;
  }

  if (!passwordRegex.test(password)) {
    setMessage("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
    return;
  }
  
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
      setMessageSucces("Votre compte a été créé avec succès, redirection ");
      setTimeout(() => {
        router.push('/signin'); // redirection après 3 secondes
      }, 3000);
      } else {
        setMessageSucces("L'email ou le mot de passe est incorrect")
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
              <div className={styles.alert}>
                <button className={styles.button} onClick={() => handleSubmit()}>Login</button>
                <p className={styles.alertText}>{message}</p>
                <p className={styles.alertTextSucces}>{messageSucces}</p>
              </div>
            </div>
            <div className={styles.other}>
              <Link href="./signin"><a className={styles.otherText}>Deja un compte?</a></Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.imgFumee} src="./fumée.jpg"></img>
        </div>
        </main>
    </div>
  );
}