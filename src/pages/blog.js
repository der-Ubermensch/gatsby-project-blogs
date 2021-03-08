import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";


const  BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter { title date }
              fields { slug }
            }
          }
        }

        allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ){
          edges {
            node { id title slug publishedDate(formatString:"MMMM Do, YYYY") }
          }
        }
      }`);

    const blogsMd = data.allMarkdownRemark.edges.map((edge) => {
      const { slug, title, date } = { ...edge.node.fields, ...edge.node.frontmatter }
        return (
        <li className={blogStyles.post} key={edge.node.id}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <h6>MD</h6>
              <p>{date}</p>
            </Link>
        </li>
        )
    });

    const blogsCms = data.allContentfulBlogPost.edges.map((edge) => {
      const { id, slug, title, publishedDate } = edge.node
      return (
      <li className={blogStyles.post} key={id}>
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
        <Head title="Blog"/>

        <div className={blogStyles.container}>
          <h1>Blog</h1>
          <p>I used graphql to make the relevant data queries. The first two posts are from markdown files stored locally on the file system and the rest are fetched from Contentful.  </p>
          <ol className={blogStyles.posts}>
            { blogsMd }
            { blogsCms }
          </ol>
        </div>

        </Layout>
    )
}

export default BlogPage