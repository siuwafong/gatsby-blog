import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss'
import Head from '../components/head'

// this page can be accessed at localhost:8000/(file_name)
const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
`)

    return (
        <div>
            <Head title="Blog" />
            <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(item => (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${item.node.slug}`}>
                          <h2>{item.node.title}</h2>
                          <p>{item.node.publishedDate}</p>
                        </Link>
                    </li>
                ))}
            </ol>
            </Layout>
        </div>
    )
}

export default BlogPage