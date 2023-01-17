import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Nav, Contact, Box} from './main.js';

import styles from '../styles/Home.module.css'

export default function App(){
	
	return(
		<div className={styles.container}>
      <Head>
        <title>Fate</title>
        <meta name="description" content="Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
				
      </Head>
			<Nav/>
      <main className={styles.main}> 
				<div className={styles.hero}>
				<div className={styles.hero_text}>
					<h1>Fate here!!</h1>
					<p>I am Full Stack developer experienced in Next JS, React and WordPress.I also work as a Graphic designer making various kinds of designs</p>
					<div className={styles.hero_button}>
					<a>Websites</a>
					<a>Designs</a>
					</div>
				</div>
					<div className={styles.anime}>
					<div className={styles.anime_box} style={{borderTopLeftRadius:"12px"}}>
					<img src=""/>
						<div className={styles.small_box} style={{borderTopLeftRadius:"12px"}}><img/></div>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box}><img/></div>
					</div>
						<div className={styles.anime_box} style={{borderTopRightRadius:"12px"}}>
					<img src=""/>
						<div className={styles.small_box} ><img/></div>
						<div className={styles.small_box} style={{borderTopRightRadius:"12px"}}><img/></div>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box}><img/></div>
					</div>
						<div className={styles.anime_box} style={{borderBottomLeftRadius:"12px"}}>
					<img src=""/>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box} style={{borderBottomLeftRadius:"12px"}}><img/></div>
						<div className={styles.small_box}><img/></div>
					</div>
						<div className={styles.anime_box} style={{borderBottomRightRadius:"12px"}}>
					<img src=""/>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box}><img/></div>
						<div className={styles.small_box} style={{borderBottomRightRadius:"12px"}}><img/></div>
					</div>
					</div>
				</div>
				<h2>What I do</h2>
				<p>Previously I only worked as a Graphic designer on Fiverr but after completing my studies in React I am working as a full stack developer too</p>
				<div className={styles.div_container}>
					<Box 
					title="Full Stack developer"
					info="I have more then 2 years experience on React and 1 year in Next JS and I prefer frontend work more then backend"
						width="300px"
						button="Read More"
					/>
					<Box 
					title="Graphic designer"
					info="I have been working as a Graphic designer for more then 3 years and I have experience in Figma, Adobe XD and almost all adobe applications"
						width="300px"
						button="Read More"
					/>
				</div>
				<div className={styles.div_container}>
				<Contact 
					title="Full Stack developer"
					info="I have more then 2 years experience on React and 1 year in Next JS and I prefer frontend work more then backend"
					width="500px"
					background="#fff"
					color="#333"
					border="1px solid #333"
					/>
					<Box 
					title="Full Stack developer"
					info="I have more then 2 years experience on React and 1 year in Next JS and I prefer frontend work more then backend"
					background="#fff"
					color="#333"
					background_btn="lightblue"
					color_btn="#fff"
					border="1px solid #333"
					border_btn="1px solid #333"
					/>
				</div>
				<div className={styles.div_container}>
					<Box 
					title="Full Stack developer"
					info="I have more then 2 years experience on React and 1 year in Next JS and I prefer frontend work more then backend"
					/>
					<Box 
					title="Full Stack developer"
					info="I have more then 2 years experience on React and 1 year in Next JS and I prefer frontend work more then backend"
					/>
					<Box 
					title="Full Stack developer"
					info="I have more then 2 years experience on React and 1 year in Next JS and I prefer frontend work more then backend"
					/>
				</div>
      </main>

      <footer className={styles.footer}>
				<h2>Let me help you achieve your goal</h2>
      </footer>
    </div> 
	)
}
