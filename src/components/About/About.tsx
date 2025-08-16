import React from 'react'
import styles from '@/components/About/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { mulish } from '@/app/fonts';

const About = () => {
  return (
    <div>
        <section className={styles.about}>
            <div className={styles.aboutImg}>
                <img className={styles.top} src="https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/06/tp-link-tapo-c510w-outdoor-installation-under-eave.jpg" alt="" />
                <img className={styles.bottom} src="https://wezatech.com/wp-content/uploads/2024/06/Security-camera-on-the-wall-close-up-and-worker-hand-with-a-work-tools-1024x653.jpg" alt="" />
            </div>
            <div className={styles.aboutText}>
                <h2>About Us</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio amet repudiandae magni, 
                    necessitatibus fuga eligendi cumque nihil libero tempore, ducimus laborum eius porro veritatis saepe iure illum soluta quasi illo. 
                    Nostrum optio voluptatem veritatis sapiente mollitia rem delectus aliquid porro assumenda nesciunt, possimus vel quis exercitationem illum cumque.
                     Fugiat, dicta soluta?
                </p>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, hic impedit. Quos, error voluptates excepturi aliquid exercitationem harum?</p>
                <br />
                <button>Learn More</button>
            </div>
            <div className={styles.aboutWhy}>
                <h3 className={`${styles.whyUs} ${mulish.className}`}>Why Choose Us</h3><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, delectus sequi expedita nesciunt nulla cupiditate tenetur?</p><br />
                <h4 className={mulish.className}><i><FontAwesomeIcon icon={faThumbsUp} /></i> 23 Years Of Experience</h4>
                <p className={styles.padLeft}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, cumque!</p><br />
                <h4 className={mulish.className}><i><FontAwesomeIcon icon={faHeadset} /></i> 24/7 Support</h4>
                <p className={styles.padLeft}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, cumque!</p><br />
                <h4 className={mulish.className}><i><FontAwesomeIcon icon={faFileLines} /></i> Industry Certified</h4>
                <p className={styles.padLeft}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, cumque!</p><br />
            </div>
        </section>
    </div>
  )
}

export default About