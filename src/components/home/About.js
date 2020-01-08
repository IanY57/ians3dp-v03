import React from "react"

import Title from "../Title"
import img from "../../images/about_v2.png"

import styles from "../../css/about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about me" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Welcome to Ian's 3D Printing Service</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur eros et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur eros et.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
