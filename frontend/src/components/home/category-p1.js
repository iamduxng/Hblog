import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HomeCategory from 'components/home/category'
import ArticleSliderOne from 'components/articles/articles-slider-one'
import { FaChevronLeft, FaChevronRight } from 'components/icons'

const styles = {
  wrapper: 'relative',
  navIcon: 'absolute z-1 top-1/2 p-3 r text-amber-400 bg-white bg-opacity-50 transform -translate-y-1/2 cursor-pointer',
  navIconPrev: 'left-0 rounded-r-2xl',
  navIconNext: 'right-0 rounded-l-2xl',
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
            <div className={styles.wrapper}>
              <ArticleSliderOne ref={sliderRef} articles={category.articles} />
              <div className={`${styles.navIcon} ${styles.navIconPrev}`}>
                <FaChevronLeft
                  size="2rem"
                  onClick={slickPrev}
                />
              </div>
              <div className={`${styles.navIcon} ${styles.navIconNext}`}>
                <FaChevronRight
                  size="2rem"
                  onClick={slickNext}
                />
              </div>
            </div>
          </HomeCategory>
        </div>
      )) }
    </>
  )
}

export default HomeCategory1stPriority
