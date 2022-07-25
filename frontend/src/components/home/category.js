import React from 'react'
import { graphql } from 'gatsby'
import H2 from 'components/common/h2'
import ArticleCard from 'components/article/article-card'

const styles = {
  section: 'flex flex-col',
  title: 'mb-4',
  articlesWrapper: 'grid grid-cols-1 md:grid-cols-3 gap-4',
}

const HomeCategory = ({ location, category }) => {
  const { articles, name, strapi_id } = category

  return (
    <div className={styles.wrapper}>
      <H2 className={styles.title}>{ name }</H2>
      <div className={styles.articlesWrapper}>
        {articles.map((article, idx) => (
          <div key={`articleCard_${strapi_id}_${idx}`}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategory

export const query = graphql`
  fragment HomeCategory on STRAPI_CATEGORY {
    id
    strapi_id,
    name,
    slug,
    articles {
      id
      slug
      title
      description
      cover {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77)
          }
        }
      }
    }
  }
`
