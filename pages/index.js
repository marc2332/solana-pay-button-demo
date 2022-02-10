import Head from 'next/head'
import { useEffect } from 'react'
import SolanaPayButton from '../components/SolanaPay'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

function getConfig(){
  const params = new URLSearchParams(location.search);

  return [
    params.get("address") || "6moute4cAhkmhA5VGrmhFB3cbZJRCwSoxHe8ZEiPAQRi",
    params.get("amount") || 0.01,
  ]
}

export default function Home() {

  const [[address, amount], setConfig] = useState(["",""]);

  useEffect(() => {
    setConfig(getConfig());
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Solana Pay Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Let's try Solana Pay with Reactor Wallet 😄</p>
        <SolanaPayButton uri={`solana:${address}?amount=${amount}`}>Pay with</SolanaPayButton>
      </main>
    </div>
  )
}
