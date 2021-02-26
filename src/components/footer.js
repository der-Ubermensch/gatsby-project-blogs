import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`{
        site {
          siteMetadata {
            author
          }
        }
      }`)

    return (
        <footer>
            <p>Created by {/*der-Ubermensch*/
            data.site.siteMetadata.author}, &#169; 2021.</p>
        </footer>
    )
}

export default Footer
