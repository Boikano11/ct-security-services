import React from 'react'
import styles from './Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div>
        <section className={styles.hero}>
            <div className={styles.hero_left}>
                <h1>Professional</h1>
                <h1><span>Security Services</span></h1>
                <h1>You Can Trust</h1>
                <hr className={styles.horizontal} />
                <p>Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit.
                     Autem totam quisquam,
                     assumenda omnis aperiam eaque, mollitia quaerat numquam ut maiores sed impedit,
                     illum voluptatum praesentium quidem neque unde? Aliquam, accusamus?
                </p>
                <div className={styles.hero_stats}>
                    <div>
                        <h1>11</h1>
                        <p>Experience</p>
                    </div>
                    <div>
                        <h1>25</h1>
                        <p>Product</p>
                    </div>
                    <div>
                        <h1>100+</h1>
                        <p>Project Done</p>
                    </div>
                </div>
            </div>
            <div className={styles.hero_right}>
                <img src="https://getsafeandsound.com/wp-content/uploads/2024/05/IP-Camera.jpg" alt="hero-image" />
                <FontAwesomeIcon icon={faPlayCircle} className={styles.hero_icon} size='4x' />
            </div>
        </section>
    </div>
  )
}

export default Hero