import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

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
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references { title file {url} fixed(width: 1024) { width height src } }
      }
    }	
      
  }`

 
  

const Blog = (props) => {


    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          console.log("---------------------", node)
          // const { file } = node.data.target.fields;
          // const { url } = file;
          const url = props.data.contentfulBlogPost.body.references[0].file.url;
          const alt = props.data.contentfulBlogPost.body.references[0].title;
          return <img src={url} alt={alt}/>;
        }
      }
    };

    
    return (
        <Layout>
            
            {
             props.data.markdownRemark ? 
             <div className={blogStyles.container}>
                <Head title={props.data.markdownRemark.frontmatter.title}/>
                <h1>{ props.data.markdownRemark.frontmatter.title }</h1> 
                <p>{ props.data.markdownRemark.frontmatter.date }</p>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> 
             </div>:
             <div className={blogStyles.container}>
                <Head title={props.data.contentfulBlogPost.title}/>
                <h1>{ props.data.contentfulBlogPost.title }</h1> 
                <p>{ props.data.contentfulBlogPost.publishedDate }</p>
              
                { documentToReactComponents( JSON.parse(props.data.contentfulBlogPost.body.raw), options  )}
                {/* { documentToReactComponents( props.data.contentfulBlogPost[0], options ) } */}
             </div>
            }
        </Layout>
    )
}

export default Blog


