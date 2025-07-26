import styles from "../styles/Home.module.css";
import Header from "./Header";

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.divTitle}>
          <img className={styles.imgTitle} src="./damier.png"></img>
          <h1 className={styles.title}>Bienvenue à la LoGP</h1>
        </div>
        <div className={styles.accroche}>
          <h3>Participez à des courses en ligne, seul ou en équipe, remportez le titre dans votre catégorie</h3>
        </div>
        <div className={styles.homeBtn}>
          <button className={styles.btn}>Rejoindre la ligue</button>
        </div>
        v1.1
      </main>
    </div>
  );
}

export default Home;
