import React from 'react'
import { graphql, Link } from 'gatsby'
import H1 from 'components/common/h1'
import Button from 'components/common/button'

const styles = {
  section: 'flex flex-col',
  head: 'flex justify-center items-center capitalize',
  title: 'p-1 border-b-4 border-amber-400',
  main: 'my-8 pb-6 border-b border-gray-200',
  footer: 'flex justify-center',
  seeMoreLink: 'font-medium underline text-sky-400 w-32 block',
}

const HomeCategory = ({ children, name, slug }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        { name && (
          <H1 className={styles.title}>{ name }</H1>
        ) }
      </div>
      <div className={styles.main}>
        { children }
      </div>
      <div className={styles.footer}>
        { slug && (
          <Link to={`/${slug}`} className={styles.seeMoreLink}>
            <Button variant="primary">
              See more
            </Button>
          </Link>
        ) }
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
      description,
      createdAt(formatString: "DD-MM-YYYY"),
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
