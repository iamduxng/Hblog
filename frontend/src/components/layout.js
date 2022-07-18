import React from 'react'
import Footer from 'components/core/footer'
import Navbar from 'components/core/navbar'
import CustomBreadcrumb from 'components/core/breadcrumb'

const styles = {
  breadcrumb: 'mb-8',
}

const Layout = ({ children, location, crumbLabel }) => {
  return (
    <div class="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        <main class="container mt-12">
          <div className={styles.breadcrumb}>
            <CustomBreadcrumb location={location} crumbLabel={crumbLabel} />
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
