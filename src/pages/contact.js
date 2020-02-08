import React from "react"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"

import Contact from "../components/contact/Contact"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultContact.childImageSharp.fluid} />
      <Contact />
      <Link to="/">Return Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultContact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
