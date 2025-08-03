import React from 'react'
import styles from './Attributes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGear, faAward, faCircleCheck, faGears } from '@fortawesome/free-solid-svg-icons'

const Attributes = () => {
  return (
    <div>
        <section className={styles.attributes}>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faUserGear} size='2x' />
                <h3>Innovation</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faAward} size='2x' />
                <h3>High Quality</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faCircleCheck} size='2x' />
                <h3>Best Product</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faGears} size='2x' />
                <h3>Top Services</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </section>
    </div>
  )
}

export default Attributes