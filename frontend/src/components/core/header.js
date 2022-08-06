
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import H1 from 'components/common/H1'
import HeaderDesktop from 'components/header/desktop'
import HeaderMobile from 'components/header/mobile'

const styles = {
  wrapper: 'bg-black text-white',
  container: 'container flex items-center justify-between py-4 md:py-0',
}

const Header = () => {
  const breakpoints = useBreakpoint()
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 3,
        sort: {
          fields: updatedAt
        },
      ) {
        nodes {
          name,
          slug,
        }
      }
    }
  `)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <H1>Hblog</H1>
        </Link>
        {breakpoints.md ? (
          <HeaderDesktop categories={allStrapiCategory.nodes} />
        ) : (
          <HeaderMobile categories={allStrapiCategory.nodes} />
        )}
      </div>
    </div>
  )
}

export default Header
