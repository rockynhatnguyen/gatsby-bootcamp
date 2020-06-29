import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
        <div className={headerStyles.nav}>
            <span className={headerStyles.brand}>
                <Link to="/">{data.site.siteMetadata.title}</Link>
            </span>
            <ul className={headerStyles.navbar}>
                <li className={headerStyles.navItem}><Link activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                <li className={headerStyles.navItem}><Link activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                <li className={headerStyles.navItem}><Link activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                <li className={headerStyles.navItem}><Link activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
