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