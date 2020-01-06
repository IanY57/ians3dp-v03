import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const products = () => {
  return (
    <Layout>
      <h2>Hi from Products page</h2>
      <Link to="/">Return Home</Link>
    </Layout>
  )
}

export default products
