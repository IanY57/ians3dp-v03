import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const errorPage = () => {
  return (
    <Layout>
      <h2>opps dead end</h2>
      <Link to="/">return home</Link>
    </Layout>
  )
}

export default errorPage
