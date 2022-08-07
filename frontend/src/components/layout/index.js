import React from 'react'
import Footer from 'components/core/footer'
import Header from 'components/core/header'
import H1 from 'components/common/h1'
import InputSearch from 'components/common/input-search'

const styles = {
  main: 'container mt-20 mb-40',
  wrapper: 'flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900',
  mainHeading: 'flex flex-col mb-16 md:flex-row md:items-center md:justify-between capitalize',
  breadcrumb: 'mb-4 md:mb-0',
  searchBar: 'w-full md:max-w-md md:ml-auto',
}

const Layout = ({ children, location, crumbLabel, searchFunc }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header location={location} />
        <main className={styles.main}>
          <div className={styles.mainHeading}>
            {crumbLabel && (
              <H1 className={styles.breadcrumb}>{ crumbLabel }</H1>
            )}
            <div className={styles.searchBar}>
              <InputSearch searchFunc={searchFunc} placeholder="Search..." />
            </div>
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
