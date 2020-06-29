import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 Page" />
            <h1>404 Error</h1>
            <p>Sorry your content was not found.</p>
            <Link to="/">Head Home</Link>
        </Layout>
    )
}

export default NotFound
