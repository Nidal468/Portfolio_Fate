import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Nav} from './main.js';

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fate</title>
        <meta name="description" content="Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav/>
				<div className={styles.hero}>
				<div className={styles.hero_text}>
					<h1>Fate here!!</h1>
					<p>I am Full Stack developer skilled in Next JS, React and WordPress</p>
					<div className={styles.hero_button}>
					<a>Websites</a>
					<a>Designs</a>
					</div>
				</div>
				</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/__repl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on
          <span className={styles.logo}>
            <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
          </span>
          Replit
        </a>
      </footer>
    </div>
  )
}

export default Home
