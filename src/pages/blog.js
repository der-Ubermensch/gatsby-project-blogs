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
              frontmatter { title date }
              fields { slug }
            }
          }
        }

        allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ){
          edges {
            node { title slug publishedDate(formatString:"MMMM Do, YYYY") }
          }
        }
      }`);

    const blogsMd = data.allMarkdownRemark.edges.map((edge) => {
      const {slug, title, date } = { ...edge.node.fields, ...edge.node.frontmatter }
        return (
        <li className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <h6>MD</h6>
              <p>{date}</p>
            </Link>
        </li>
        )
    });

    const blogsCms = data.allContentfulBlogPost.edges.map((edge) => {
      const { slug, title, publishedDate } = edge.node
      return (
      <li className={blogStyles.post}>
          <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <h6>CMS</h6>
            <p>{publishedDate}</p>
          </Link>
      </li>
      )
  });


    return (
        <Layout>

        <h1>Blog</h1>
        <p>Posts will show up here later on.</p>
        <ol className={blogStyles.posts}>
          { blogsMd }
          { blogsCms }
        </ol>

        </Layout>
    )
}

export default BlogPage