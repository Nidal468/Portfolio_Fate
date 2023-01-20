import {useState, useEffect} from 'react';

import Link from 'next/link';
import data from '../Data/data.json'; 

import styles from '../styles/Home.module.css'

export function Nav() {
   return(
		 <nav className={styles.Nav_body}>
			 <img src="logo.png"/>
			 <ul>
				 <li><Link href="/designs">Home</Link></li>
				 <li><Link href="/designs">Designs</Link></li>
				 <li><Link href="/designs">Projects</Link></li>
				 <li><Link href="/designs">Gigs</Link></li>
			 </ul>
			 <h5><a href="#">Hire Now</a></h5>
		 </nav>
	 )
}
export function Box(props){
	return(
		<div className={styles.box} style={{"width":props.width, "background":props.background,"color":props.color, "border":props.border}}>
						<h2>{props.title}</h2>
						<p>{props.info}</p>
			<button style={{"background":props.background_btn,"color":props.color_btn, "border":props.border_btn}}>{props.button}</button>
				</div>
	)
}
export function Contact(props){
	return(
		<div className={styles.box} style={{"width":props.width, "background":props.background,"color":props.color, "border":props.border}}>
						<h2>{props.title}</h2>
						<p>{props.info}</p>
			<ul>
			<li><p>LinkedIn</p><a href="#"><i className="fi fi-rr-caret-right"></i></a></li>
				<li><p>Fiverr</p><a href="#"><i className="fi fi-rr-caret-right"></i></a></li>
				<li><p>Discord</p><a href="#"><i className="fi fi-rr-caret-right"></i></a></li>
				<li><p>Upwork</p><a href="#"><i className="fi fi-rr-caret-right"></i></a></li>
			</ul>
				</div>
	)
}
export function Skill(props){
	const [isData, setIsData] = useState(0);
	return(
			<div className={styles.main_container}>
			<div className={styles.skills}>
					<div className={styles.skill_body}>
						<img src={props.img1} onClick={() => setIsData(0)} style={{border:`1px solid ${data[isData].color}`}}/>
						<img src={props.img2} onClick={() => setIsData(1)} style={{border:`1px solid ${data[isData].color}`}}/>
						<img src={props.img3} onClick={() => setIsData(2)} style={{border:`1px solid ${data[isData].color}`}}/>
						<img src={props.img4} onClick={() => setIsData(3)} style={{border:`1px solid ${data[isData].color}`}}/>
					</div>
						<div className={styles.skill}>
							<p style={{top:data[isData].position, background:data[isData].color}}>{data[isData].title}</p>
						</div>
					</div>
					<div className={styles.job}>
				<div>
					<img/>
					<h1>{data[isData].title}</h1>
					<button onClick={props.setState}>
						<span style={{transform: props.state? "translatex(-17px)":"translatex(17px)"}}></span>
					</button>
				</div>
					<div className={styles.info}>
						<p>{data[isData].content}</p>
						<a href="#">Check out my {data[isData].title} projects</a>
				</div>
					</div>
		</div>
	)
}
export function ContactFooter(props){
	return(
		<div className={styles.contact_footer_container}>
		<div className={styles.contact_footer}>
			<img src=""/>
			<img src=""/>
			<img src=""/>
			<img src=""/>
			<img src=""/>
			<img src=""/>
		</div>
		</div>
	)
}