import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
	const [isFirst, setIsFirst] = useState("hidden");
	const [isSecond, setIsSecond] = useState("hidden"); 
	const [isThird, setIsThird] = useState("hidden");
	const [isFourth, setIsFourth] = useState("hidden");
	
	function First() {
		setIsFirst("visible");
		setIsSecond("hidden");
		setIsThird("hidden)");
		setIsFourth("hidden");
		let skill = "React JS"
	}
	function Second() {
		setIsFirst("hidden");
		setIsSecond("visible");
		setIsThird("hidden");
		setIsFourth("hidden");
		let skill = "Next "
	}
	function Third() {
		setIsFirst("hidden");
		setIsSecond("hidden");
		setIsThird("visible");
		setIsFourth("hidden");
	}
	function Fourth() {
		setIsFirst("hidden");
		setIsSecond("hidden");
		setIsThird("hidden");
		setIsFourth("visible");
	}
	
	return(
		<div className={styles.skills}>
					<div className={styles.skill_body}>
						<img src={props.img1} onClick={First}/>
						<img src={props.img2} onClick={Second}/>
						<img src={props.img3} onClick={Third}/>
						<img src={props.img4} onClick={Fourth}/>
					</div>
						<div className={styles.skill}>
							<p style={{visibility:isFirst}}>{props.first}</p>
							<p style={{visibility:isSecond}}>{props.second}</p>
							<p style={{visibility:isThird}}>{props.third}</p>
							<p style={{visibility:isFourth}}>{props.fourth}</p>
						</div>
					</div>
	)
}
export function Job(props) {
	
   return(
		 <div className={styles.job}>
				<div>
					<img/><h1>{skill}</h1><button onClick={props.setState}><span style={{transform: props.state? "translatex(-17px)":"translatex(17px)"}}></span></button>
				</div>
					<div className={styles.info}>
						<p>{props.info}</p><a href="#">{props.button}</a>
				</div>
				</div>
	 )
}
