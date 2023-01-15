import {useState, useEffect} from 'react';

import styles from '../styles/Home.module.css'

export function Nav() {
   return(
		 <nav className={styles.Nav_body}>
			 <img src="logo.png"/>
			 <ul>
				 <li><a href="#">Home</a></li>
				 <li><a href="#">Designs</a></li>
				 <li><a href="#">Demos</a></li>
				 <li><a href="#">Gigs</a></li>
			 </ul>
			 <h5><a href="#">Hire Now</a></h5>
		 </nav>
	 )
}
