import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";


const  BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }`);

    const blogs = data.allMarkdownRemark.edges.map((edge) => {
        return (
        <li className={blogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
        </li>
        )
    });


    return (
        <Layout>

        <h1>Blog</h1>
        <p>Posts will show up here later on.</p>
        <ol className={blogStyles.posts}>
          { blogs }
        </ol>

        </Layout>
    )
}

export default BlogPage