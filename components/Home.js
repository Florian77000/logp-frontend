import styles from "../styles/Home.module.css";
import Header from "./Header";

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to loGP</h1>
      </main>
    </div>
  );
}

export default Home;
