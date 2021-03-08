import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }`)

    return (
        <header className={headerStyles.header}>

            <nav>
                <div className={headerStyles.menu}>
                    <Link className={headerStyles.website_name} to="/">
                        {data.site.siteMetadata.title}
                    </Link>
                    <div className={headerStyles.menu_links}>
                        <Link to="/" className={headerStyles.link}>Home</Link>
                        <Link to="/blog" className={headerStyles.link}>Blog</Link>
                        <Link to="/about" className={headerStyles.link}>About</Link>
                        <Link to="/contact" className={headerStyles.link}>contacts</Link>
                    </div>
                    <div className={headerStyles.menu_icon}>
                        <span className={headerStyles.icon}></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
