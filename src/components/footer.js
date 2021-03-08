import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`{
        site {
          siteMetadata {
            author
          }
        }
      }`)

    return (
        <footer className={footerStyles.footer}>
            <p>Created by {/*der-Ubermensch*/
            data.site.siteMetadata.author}, &#169; 2021.</p>
            <p>Created my free logo at <a href="https://LogoMakr.com">LogoMakr.com</a> </p>
            
        </footer>
    )
}

export default Footer

