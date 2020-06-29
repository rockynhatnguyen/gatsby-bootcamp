import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Page</h1>
            <p>Want to hire me?</p>
            <p>Contact me at rockynhatnguyen@gmail.com</p>
            <p>Find me on <Link to="https://www.linkedin.com/in/rockynhatnguyen/" target="_blank">Linkedin.</Link></p>
        </Layout>
    )
}

export default ContactPage
