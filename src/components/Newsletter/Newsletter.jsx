import React from 'react'
import styles from './Newsletter.module.css'
import { mulish } from '@/app/fonts'

const Newsletter = () => {
  return (
    <div>
        <div className={styles.newsletter}>
            <section className={styles.left}>
                <h1 className={mulish.className}>Our Newsletters</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam inventore fugit quisquam esse?
                </p>
            </section>
            <section className={styles.right}>
                <input type="email" name="email" id="email" placeholder='Email' />
                <button type="submit">Submit Button</button>
            </section>
            
        </div>
    </div>
  )
}

export default Newsletter