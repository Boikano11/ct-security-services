import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div>
        <div className={styles.newsletter}>
            <section className={styles.left}>
                <h1>Our Newsletters</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, iusto id. 
                    Eius voluptatibus recusandae molestiae quisquam quos
                    consequatur ea nisi saepe rerum dolorum, repellat fugiat totam eum, 
                    veritatis expedita quia.
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