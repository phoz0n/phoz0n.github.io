import Head from 'next/head'

import Board from '../components/Board'

// import HeadBrb from '../components/head-brb'
// import HomeScene from '../components/HomeScene'
export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Board />
      {/* <HomeScene /> */}
      {/* <HeadBrb /> */}
    </div>
  )
}
