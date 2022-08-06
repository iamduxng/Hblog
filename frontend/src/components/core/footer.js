import React from 'react'

const styles = {
  wrapper: 'bg-black text-white',
  container: 'container flex items-center justify-between py-8 md:py-16',
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>Copyright {currentYear}</p>
      </div>
    </div>
  )
}

export default Footer
