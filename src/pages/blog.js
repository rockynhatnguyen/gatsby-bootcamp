import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publishDate,
            order: DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishDate(formatString: "MMM Do, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
          <Head title="Blogs" />
            <h1>Blog Page</h1>
            <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map(post => 
                    <li className={blogStyles.post} key={post.node.title}>
                        <Link to={`/blog/${post.node.slug}`}>
                            <h2>{post.node.title}</h2>
                            <p>{post.node.publishDate}</p>
                        </Link>
                    </li>)}
            </ol>
        </Layout>
    )
}

export default BlogPage

