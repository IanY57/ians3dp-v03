import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

import Banner from "../components/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"
import StyledHero from "../components/StyledHero"

const index = ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultHome.childImageSharp.fluid}>
        <Banner
          title="Ian's 3D Printing Service"
          info="Put something about FDM style printing"
        >
          <Link to="/products" className="btn-white">
            explore products
          </Link>
        </Banner>
      </StyledHero>

      <Services />
      <About />
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

export default index
