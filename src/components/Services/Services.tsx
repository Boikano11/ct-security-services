import styles from '@/components/Services/Services.module.css'

const Services = () => {
  return (
    <div>
        <section className={styles.services}>
            <div className={styles.servicesHeader}>
                <section className={styles.servicesLeft}>
                    <h1>
                        We Provide The Best Services
                    </h1>
                </section>
                <section className={styles.servicesRight}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa mollitia qui laboriosam impedit exercitationem reprehenderit neque!
                </section>
            </div>
            <div className={styles.servicesBody}>
                <div className={styles.serviceCard}>
                    <i></i>
                    <h3>Security Camera</h3>
                    <p>We bring the right people together to challenge established thinking and drive transform in 2020.</p>
                    <button>Learn more</button>
                </div>
                <div className={styles.serviceCard}>
                    <i></i>
                    <h3>Fire Detection</h3>
                    <p>We bring the right people together to challenge established thinking and drive transform in 2020.</p>
                    <button>Learn more</button>
                </div>
                <div className={styles.serviceCard}>
                    <i></i>
                    <h3>Smart Home</h3>
                    <p>We bring the right people together to challenge established thinking and drive transform in 2020.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services