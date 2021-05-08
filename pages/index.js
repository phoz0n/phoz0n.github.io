import Head from "next/head";
import styles from "../styles/Home.module.css";

import CanvasComponent from "../components/canvas";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CanvasComponent />

      <main className={styles.main}>
        <h1 className={styles.title}>Bonjour</h1>
      </main>
    </div>
  );
}
