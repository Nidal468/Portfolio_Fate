import {useState} from 'react'
import Head from 'next/head'
import {Nav, Skill, ContactFooter} from './components/main.js';
import styles from '../styles/Home.module.css'

export default function App(){
	const [isActive, setIsActive] = useState(true)
	const [isSkill, setIsSkill] = useState(true)
	
	const title = "Abu Saleh";
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
				<div className={styles.about}>
				<div className={styles.about_title}>
					<small style={{color:"#7EC8E3", fontSize:"8px", width:"60%"}}>--About me--</small><h1>Abu Saleh</h1><h5>Full stack developer/Graphic Designer</h5>
				</div>
					<div className={styles.about_info}>
						<p>{info}</p><div className={styles.about_info_years}><h2>3</h2><h4>Years of experience</h4></div><a href="#">{button}</a>
				</div>
				</div>
					<img className={styles.image1} src="images/007.png"/>
				</div>
				<Skill 
						state={isSkill}
						setState={() => setIsSkill(current =>! current)}
						/>
				<ContactFooter/>
      </main>

      <footer className={styles.footer}>
				<h2>Let me help you achieve your goal</h2>
      </footer>
    </div> 
	)
}
