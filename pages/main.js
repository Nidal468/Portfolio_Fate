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
	const first = props.state? "React JS":"Figma";
	const second = props.state? "Next JS":"Adobe XD";
	const third = props.state? "Typescript":"Adobe PhotoShop";
	const fourth = props.state? "Node JS":"Adobe Illustrator";
	const [isName, setIsName] = useState(first);
	const [isPosition, setIsPosition] = useState("0px")
	const [isColor, setIsColor] = useState("cyan")
	const border = `1px solid ${isColor}`;
	
	function First() {
		setIsName(first);
		setIsPosition("0px");
		setIsColor("cyan");
	}
	function Second() {
		setIsName(second);
		setIsPosition("55px");
		setIsColor("green");
	}
	function Third() {
		setIsName(third);
		setIsPosition("115px");
		setIsColor("red");
	}
	function Fourth() {
		setIsName(fourth);
		setIsPosition("170px");
		setIsColor("blue");
	}
	
	return(
		<div className={styles.main_container}>
			<div className={styles.skills}>
					<div className={styles.skill_body}>
						<img src={props.img1} onClick={First} style={{border:border}}/>
						<img src={props.img2} onClick={Second} style={{border:border}}/>
						<img src={props.img3} onClick={Third} style={{border:border}}/>
						<img src={props.img4} onClick={Fourth} style={{border:border}}/>
					</div>
						<div className={styles.skill}>
							<p style={{top:isPosition, background:isColor}}>{isName}</p>
						</div>
					</div>
			<div className={styles.job}>
				<div>
					<img/><h1>{isName}</h1><button onClick={props.setState}><span style={{transform: props.state? "translatex(-17px)":"translatex(17px)"}}></span></button>
				</div>
					<div className={styles.info}>
						<p style={{background:isColor}}>{props.info}</p><a href="#">{props.button}</a>
				</div>
				</div>
		</div>
	)
}