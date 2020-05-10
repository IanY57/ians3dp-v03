import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

import Banner from "../components/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedProducts from "../components/home/FeaturedProducts"

const index = ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultHome.childImageSharp.fluid}>
        <Banner
          title="Ian's 3D Printing Service"
          info="Fused filament fabrication (FFF), also known under the trademarked term fused deposition modeling (FDM), 
          is a 3D printing process that uses a continuous filament of a thermoplastic material.
          The print head is moved under computer control to define the printed shape."
        >
          <Link to="/products" className="btn-white">
            explore products
          </Link>
        </Banner>
      </StyledHero>
      <About />

      <Services />

      <FeaturedProducts />
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
