import React from "react"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"

const products = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.productBcg.childImageSharp.fluid} />
      <Link to="/">Return Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    productBcg: file(relativePath: { eq: "products.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default products
