// the pages directory is where static pages are placed
// index.js in the src/pages folder is the home page

import React from "react"
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'


const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I'm Wilson.  I'm an aspiring full-stack developer based in Toronto, Canada. </h2>
      {/* Use <Link> instead of using <a> tags */}
      <p> Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage