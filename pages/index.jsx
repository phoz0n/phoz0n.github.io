import Head from 'next/head'

import WalletScene from '../components/WalletScene'

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#eee' }}>
      <Head>
        <title>Poop</title>
        <meta name="description" content="popo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletScene />
    </div>
  )
}
