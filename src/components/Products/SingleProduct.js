import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../../css/tour.module.css"

const SingleProduct = ({ item }) => {
  const { name, description, price, slug, image } = item

  let mainImage = image.fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single product" />
        <AniLink fade className={styles.link} to={`/products/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <h4 className={styles.info}>${price}</h4>
      </div>
    </article>
  )
}

export default SingleProduct
