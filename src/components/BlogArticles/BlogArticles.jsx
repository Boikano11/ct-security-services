import React from 'react'
import styles from './BlogArticles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { mulish, poppins } from '@/app/fonts';

const BlogArticles = () => {
  return (
    <div>
        <section className={styles.blogArticles}>
            <header className={styles.header}>
                <h1 className={poppins.className}>Blog & Article</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint quos delectus.</p>
            </header>
            <br />
            <main>
                <div className={styles.card}>
                    <img src="/camera.jpeg" alt="imm"/>
                    <br />
                    <span><i><FontAwesomeIcon icon={faFolderOpen} /></i> <small>Uncategorized</small></span>
                    <h4 className={mulish.className} >Security solutions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, temporibus!</p>
                    <button type="button">Learn more &rarr;</button>
                </div>

                <div className={styles.card}>
                    <img src="/camera.jpeg" alt="imm"/>
                    <br />
                    <span><i><FontAwesomeIcon icon={faFolderOpen} /></i> <small>Uncategorized</small></span>
                    <h4 className={mulish.className} >Monitor the workplace</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, temporibus!</p>
                    <button type="button">Learn more &rarr;</button>
                </div>

                <div className={styles.card}>
                    <img src="/camera.jpeg" alt="imm"/>
                    <br />
                    <span><i><FontAwesomeIcon icon={faFolderOpen} /></i> <small>Uncategorized</small></span>
                    <h4 className={mulish.className} >Why choose securez</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, temporibus!</p>
                    <button type="button">Learn more &rarr;</button>
                </div>
            </main>
        </section>
    </div>
  )
}

export default BlogArticles