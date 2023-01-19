import {useState} from 'react'
import Head from 'next/head'
import {Nav, Skill} from './main.js';
import styles from '../styles/Home.module.css'

export default function App(){
	const [isActive, setIsActive] = useState(true)
	const [isSkill, setIsSkill] = useState(true)
	
	const title = isActive? "Full Stack Developer":"Graphic designer";
	const info = isActive? "I am a full stack developer with 2 years experience and I mainly use React and sometimes Next JS.":"I have been a graphic designer for more then 2 year and I am skilled in designing UI and also good at making designs suited for better user experience";
	const button = isActive? "Check out my projects":"View my designs";

	
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
						<span></span>
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
				<div className={styles.main_container}>
				<div className={styles.job}>
				<div><img/><h1>{title}</h1><button onClick={() => setIsActive(current =>! current)}><span style={{transform: isActive? "translatex(-17px)":"translatex(17px)"}}></span></button></div>
					<div className={styles.info}>
						<p>{info}</p><a href="#">{button}</a>
				</div>
				</div>
					<img className={styles.image1}/>
				</div>
					<Skill 
						state={isSkill}
						setState={() => setIsSkill(current =>! current)}
						/>
      </main>

      <footer className={styles.footer}>
				<h2>Let me help you achieve your goal</h2>
      </footer>
    </div> 
	)
}
