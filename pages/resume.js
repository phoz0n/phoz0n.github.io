import Head from "next/head";

import CanvasComponent from "../components/canvas";

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CanvasComponent />
    </div>
  );
}
