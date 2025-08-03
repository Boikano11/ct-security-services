import React from 'react'
import styles from './Footer.module.css'
import Socials from '@/components/Socials/Socials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
        <div className={styles.footer}>
            <section className={styles.footerNav}>
                <div className={styles.socialLinks}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magni unde labore facere deleniti voluptas velit dolores, 
                        pariatur nemo itaque numquam ad.
                         Eius eveniet aliquam inventore eum possimus rerum amet unde! 
                    </p>
                    <Socials />
                </div>
                <div className={styles.navLinks}>
                    <h4>Navigation</h4>
                    <br />
                    <ul>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Abouts Us</li>
                        <li>Services</li>
                        <li>404</li>
                    </ul>
                </div>
                <div className={styles.quickLinks}>
                    <h4>Quick Link</h4>
                    <br />
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className={styles.workingHours}>
                    <h4>Working Hours</h4>
                    <br />
                    <p className={styles.time}>&#128337; 7AM - 5PM. Mon - Sat</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        corporis nulla voluptatibus.
                    </p>
                    <button type="button"><i><FontAwesomeIcon icon={faPhone} /></i> Call Us</button>
                </div>
            </section>
            <hr />
            <section className={styles.copyWrite}>
                <b><p>&copy; 2025 - Developed by Tsholofetso Pooe &middot; All Rights Reserved</p></b>
            </section>
        </div>
    </div>
  )
}

export default Footer