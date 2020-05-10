import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SingleProduct from "../Products/SingleProduct"

const getProducts = graphql`
  query {
    products: allContentfulProducts(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          slug
          price
          featured
          description {
            description
          }
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const FeaturedProducts = () => {
  const response = useStaticQuery(getProducts)

  const singleproduct = response.products.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="products" />
      <div className={styles.center}>
        {singleproduct.map(({ node }) => {
          return <SingleProduct key={node.contentful_id} item={node} />
        })}
      </div>

      <AniLink fade to="/products" className="btn-primary">
        All Products
      </AniLink>
    </section>
  )
}

export default FeaturedProducts
