import Head from 'next/head'

// import Board from '../components/Board'
// import HeadBrb from '../components/head-brb'
// import HomeScene from '../components/HomeScene'

import CV from '../components/cv-a4'

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#0c0c0c' }}>
      <Head>
        <title>Léandre Daumont - Resume</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CV />
      {/* <Board /> */}
      {/* <HomeScene /> */}
      {/* <HeadBrb /> */}
    </div>
  )
}
