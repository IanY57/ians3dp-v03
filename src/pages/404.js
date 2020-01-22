import React from "react"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

//import styles from "../css/error.module.css"

const errorPage = ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultHome.childImageSharp.fluid}>
        <Banner
          title="Somthing has gone horribly wrong"
          info="I cannot find your page"
        >
          <Link to="/" className="btn-white">
            Returun Home
          </Link>
        </Banner>
      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultHome: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default errorPage
