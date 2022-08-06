import React from 'react'
import Footer from 'components/core/footer'
import Navbar from 'components/core/navbar'

const styles = {
  wrapper: 'flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900'
}

const LayoutPost = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navbar />
        <main className="container mt-12">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutPost
