import React from 'react'
import styles from './Socials.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div>
        <div className={styles.socials}>
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            <i><FontAwesomeIcon icon={faYoutube} /></i>
        </div>
    </div>
  )
}

export default Socials