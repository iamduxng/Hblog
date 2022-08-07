import React from 'react'
import Footer from 'components/core/footer'
import Header from 'components/core/header'

const styles = {
  main: 'container mt-20 mb-40',
  wrapper: 'flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900'
}

const LayoutPost = ({ children, location }) => {
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

export default LayoutPost
