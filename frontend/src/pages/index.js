import React from 'react'
import Layout from 'components/layout'
import Seo from 'components/seo'
import HomeIntroduction from 'components/home/introduction'
import HomeCategoryLatest from 'components/home/category-latest'
import HomeCategory1stPriority from 'components/home/category-p1'
import HomeCategory2ndPriority from 'components/home/category-p2'
import HomeCategory3rdPriority from 'components/home/category-p3'

const styles = {
  section: 'mb-28'
}

const HomePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo seo={{ metaTitle: 'Home' }} />

      <div className={styles.section}>
        <HomeIntroduction />
      </div>

      <div className={styles.section}>
        <HomeCategoryLatest />
      </div>

      <div className={styles.section}>
        <HomeCategory1stPriority />
      </div>

      <div className="container">
        <div className={styles.section}>
          <HomeCategory2ndPriority />
        </div>
        <div className={styles.section}>
          <HomeCategory3rdPriority />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
