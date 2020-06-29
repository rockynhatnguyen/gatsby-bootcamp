import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Page</h1>
            <p>I am a Full-Stack Developer.</p>
            <p>Want to hire me?</p>
            <p><Link to="/contact">Contact me here.</Link></p>
        </Layout>
    )
}

export default AboutPage
