import Header from "../components/Header";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () =>  {
    fetch('http://localhost:3000/signin')
    .then(response => response.json())
 }
  
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <h1>Se connecter</h1>
        </div>
        <div>
          <input type="email" placeholder="Votre email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <input type="password" placeholder="Votre mot de passe" onChange={(e) => setPassword(e.target.value)} value={password} />
          <button onClick={() => handleSubmit()}>Login</button>
        </div>
        

      </main>
    </div>
  );
}
