
import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import H1 from 'components/common/H1'
import HeaderDesktop from 'components/header/desktop'
import HeaderMobile from 'components/header/mobile'

const styles = {
  wrapper: 'bg-black text-white',
  container: 'container flex items-center justify-between py-4 md:py-0',
}

const Header = ({ location }) => {
  const breakpoints = useBreakpoint()
  const { pathname } = location
  const currentCategory = useMemo(() => pathname.split('/')[1], [pathname])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <H1>Hblog</H1>
        </Link>
        {breakpoints.md ? (
          <HeaderDesktop currentCategory={currentCategory} />
        ) : (
          <HeaderMobile currentCategory={currentCategory} />
        )}
      </div>
    </div>
  )
}

export default Header
