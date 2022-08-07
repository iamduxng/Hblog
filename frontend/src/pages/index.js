import React from 'react'
import Layout from 'components/layout'
import Seo from 'components/seo'
import CategoryLatest from 'components/home/category-latest'
import HomeCategory1stPriority from 'components/home/category-p1'
import HomeCategory2ndPriority from 'components/home/category-p2'
import HomeCategory3rdPriority from 'components/home/category-p3'

const styles = {
  category: 'mb-28'
}

const HomePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo seo={{ metaTitle: 'Home' }} />

      <div className={styles.category}>
        <CategoryLatest />
      </div>
      <div className={styles.category}>
        <HomeCategory1stPriority />
      </div>
      <div className={styles.category}>
        <HomeCategory2ndPriority />
      </div>
      <div className={styles.category}>
        <HomeCategory3rdPriority />
      </div>
    </Layout>
  )
}

export default HomePage
