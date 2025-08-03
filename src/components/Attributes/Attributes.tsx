import React from 'react'
import styles from './Attributes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGear, faAward, faCircleCheck, faGears } from '@fortawesome/free-solid-svg-icons'
import { mulish } from '@/app/fonts'

const Attributes = () => {
  return (
    <div>
        <section className={styles.attributes}>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faUserGear} size='2x' />
                <h3 className={mulish.className}>Innovation</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faAward} size='2x' />
                <h3 className={mulish.className}>High Quality</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faCircleCheck} size='2x' />
                <h3 className={mulish.className}>Best Product</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faGears} size='2x' />
                <h3 className={mulish.className}>Top Services</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </section>
    </div>
  )
}

export default Attributes