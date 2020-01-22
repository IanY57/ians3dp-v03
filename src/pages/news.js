import React from "react"

import Layout from "../components/Layout"

import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero"

const news = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.newsBcg.childImageSharp.fluid} />
      <Link to="/">Return Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    newsBcg: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default news
