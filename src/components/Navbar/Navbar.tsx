import React from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us <ChevronDown size={12} /></Link></li>
            <li><Link href="/services">Services <ChevronDown size={12} /></Link></li>
            <li><Link href="/page">Page <ChevronDown size={12} /></Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
          <div className={styles.socials}>
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            <i><FontAwesomeIcon icon={faYoutube} /></i>
          </div>
        </nav>
    </div>
  )
}

export default Navbar