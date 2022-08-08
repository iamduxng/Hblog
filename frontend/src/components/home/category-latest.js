import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import H1 from 'components/common/h1'
import ArticleSlider from 'components/articles/articles-slider'
import { FaChevronLeft, FaChevronRight } from 'components/icons'

const styles = {
  head: 'container w-full flex items-center justify-center mb-8',
  title: 'mx-8 capitalize',
  navIcon: 'cursor-pointer'
}

const HomeCategoryLatest = () => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle (
        limit: 10,
        sort: {
          order: DESC,
          fields: createdAt,
        }
      ) {
        nodes {
          ...ArticleCard,
        }
      }
    }
  `)

  return (
    <>
      <div className={styles.head}>
        <FaChevronLeft className={styles.navIcon} size="1.5rem" />
        <H1 className={styles.title}>Latest</H1>
        <FaChevronRight className={styles.navIcon} size="1.5rem" />
      </div>
      <ArticleSlider articles={allStrapiArticle.nodes} />
    </>
  )
}

export default HomeCategoryLatest
