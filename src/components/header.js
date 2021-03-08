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
            {/* <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1> */}
            {/* <nav>
                <ul className={headerStyles.navList}>
                    <li>    <Link className={headerStyles.navItem} 
                            activeClassName={headerStyles.activeNavItem} to="/">Home
                            </Link>    
                    </li>
                    <li>    <Link className={headerStyles.navItem}
                             activeClassName={headerStyles.activeNavItem} to="/blog">Blog
                             </Link>    
                    </li>
                    <li>    <Link className={headerStyles.navItem}
                             activeClassName={headerStyles.activeNavItem} to="/about">About
                             </Link>  
                    </li>
                    <li>    <Link className={headerStyles.navItem}
                             activeClassName={headerStyles.activeNavItem} to="/contact">Contact
                             </Link>
                    </li>
                </ul>    
            </nav> */}
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
