import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

export const query = graphql`query ($slug: String!) {
    markdownRemark (
      fields: {
        slug: { eq: $slug }
      }
    ) {
        frontmatter { title date }
        html
      }

      contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
          raw
        }
      }
      
  }`

const Blog = (props) => {
    //const { title, publishedDate, body } = props.data.contentfulBlogPost;
    
    return (
        <Layout>
            {
             props.data.markdownRemark ? 
             <>
              <h1>{ props.data.markdownRemark.frontmatter.title }</h1> 
              <p>{ props.data.markdownRemark.frontmatter.date }</p>
              <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> 
             </>:
             <>
              <h1>{ props.data.contentfulBlogPost.title }</h1> 
              <p>{ props.data.contentfulBlogPost.publishedDate }</p>
              { documentToReactComponents( JSON.parse(props.data.contentfulBlogPost.body.raw) ) }
             </>
            }
        </Layout>
    )
}

export default Blog
//n=b

