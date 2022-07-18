import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const HomePage = ({ location }) => {
  return (
    <Layout location={location} crumbLabel="Home">
      <Seo seo={{ metaTitle: 'Home' }} />
    </Layout>
  )
}

export default HomePage
