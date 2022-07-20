import React from 'react'
import Footer from 'components/core/footer'
import Navbar from 'components/core/navbar'
import CustomBreadcrumb from 'components/core/breadcrumb'
import InputSearch from 'components/common/input-search'

const styles = {
  mainHeading: 'flex flex-col mb-16 md:flex-row md:items-center md:justify-between',
  breadcrumb: 'mb-4 md:mb-0',
  searchBar: 'w-full md:max-w-md',
}

const Layout = ({ children, location, crumbLabel, searchFunc }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        <main className="container mt-12">
          <div className={styles.mainHeading}>
            <div className={styles.breadcrumb}>
              <CustomBreadcrumb location={location} crumbLabel={crumbLabel} />
            </div>
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
