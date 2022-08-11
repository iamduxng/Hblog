import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HomeCategory from 'components/home/category'
import ArticleSliderOne from 'components/articles/articles-slider-one'
import { FaChevronLeft, FaChevronRight } from 'components/icons'

const styles = {
  navIcon: 'p-4 h-full bg-white bg-opacity-40'
}

const HomeCategory1stPriority = () => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 1,
        sort: { fields: updatedAt },
        filter: {
          priority: {
            eq: "p1"
          },
          isShownOnHome: {
            eq: true
          }
        }
      ) {
        nodes {
          ...HomeCategory,
        }
      }
    }
  `)

  const sliderRef = useRef()

  const slickNext = () => sliderRef.current.slickNext()
  const slickPrev = () => sliderRef.current.slickPrev()

  return (
    <>
      { allStrapiCategory.nodes.map((category, idx) => (
        <div key={`category_p1_${idx}`}>
          <HomeCategory name={category.name} slug={category.slug}>
            <FaChevronLeft
              className={styles.navIcon}
              size="1.5rem"
              onClick={slickPrev}
            />
            <ArticleSliderOne ref={sliderRef} articles={category.articles} />
            <FaChevronRight
              className={styles.navIcon}
              size="1.5rem"
              onClick={slickNext}
            />
          </HomeCategory>
        </div>
      )) }
    </>
  )
}

export default HomeCategory1stPriority
