import React from 'react'
import { graphql, Link } from 'gatsby'
import H1 from 'components/common/h1'

const styles = {
  section: 'flex flex-col',
  head: 'flex justify-between items-center',
  title: 'mb-8 mr-8 capitalize',
  seeMoreLink: 'font-medium underline text-sky-400',
  articlesWrapper: 'grid grid-cols-1 md:grid-cols-3 gap-4',
}

const HomeCategory = ({ children, name, slug }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        { name && <H1 className={styles.title}>{ name }</H1> }
        { slug && (
          <Link to={`/${slug}`} className={styles.seeMoreLink}>
            See more
          </Link>
        ) }
      </div>
      { children }
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
