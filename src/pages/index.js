import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

const index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Ian's 3D Printing Service"
          info="Put something about FDM style printing"
        >
          <Link to="/products" className="btn-white">
            explore products
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}

export default index
