import React from 'react'
import Footer from 'components/core/footer'
import Header from 'components/core/header'

const styles = {
  main: 'mt-20 mb-40 overflow-hidden',
  wrapper: 'flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900',
  breadcrumb: 'mb-4 md:mb-0',
  searchBar: 'w-full md:max-w-md md:ml-auto',
}

const Layout = ({ children, location }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header location={location} />
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
