import styles from '@/components/Partners/Partners.module.css'

const Partners = () => {
  return (
    <div>
        <section className={styles.partners}>
            <div className={styles.partnersText}>
                <h1>Our Partners</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas, officia sint alias id facere.</p>
            </div>
            <div className={styles.partner1}><p>1</p></div>
            <div className={styles.partner2}>2</div>
            <div className={styles.partner3}>3</div>
        </section>
    </div>
  )
}

export default Partners