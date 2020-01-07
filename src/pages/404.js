import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import styles from "../css/error.module.css"

const errorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="something has gone wrong">
          <Link to="/" className="btn-white">
            return to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default errorPage
