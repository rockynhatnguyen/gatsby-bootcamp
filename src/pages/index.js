import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>My name is Rocky.</h2>
      <p>Learn more <Link to="/about">about me here.</Link></p>
      <p>Check out my written work <Link to="/blog">here.</Link></p>
      <p>Need a developer?</p>
      <p><Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage