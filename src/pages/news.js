import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const news = () => {
  return (
    <Layout>
      <h2>hello from news page</h2>
      <Link to="/">Return Home</Link>
    </Layout>
  )
}

export default news
