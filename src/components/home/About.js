import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"

import styles from "../../css/about.module.css"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "about_v2.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="My first 3D Printer, a Printrbot Junior version 2"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Welcome to Ian's 3D Printing Service</h4>
          <h5>
            As you can see this site is very much under construction, Please
            call back soon to see the progression.
          </h5>
          <h5>
            The site is being build with Gatsbyjs using Udemy.com and a course
            by: John Smilga
          </h5>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
