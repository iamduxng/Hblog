import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const styles = {
  wrapper: 'relative block flex flex-col h-full overflow-hidden rounded-lg',
  heading: 'mt-2 px-1.5 flex items-center justify-between',
  time: 'text-gray-500 text-xs flex-1',
  divide: 'h-1 bg-amber-400 w-20',
  shortContent: 'my-4 flex-1 px-1.5',
  title: 'font-bold text-lg',
  description: 'mt-2 text-gray-500 line-clamp-2',
  overlay: 'absolute w-full h-full bg-black opacity-0 transition-opacity duration-300',
  hoveredOverlay: '!opacity-10',
  imageWrapper: 'overflow-hidden',
  image: 'transition-all duration-300',
  hoveredImage: 'scale-110'
}

const ArticleCard = ({ article }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      to={`/article/${article.slug}`}
      className={styles.wrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles.imageWrapper}>
        <GatsbyImage
          className={`${styles.image} ${isHover ? styles.hoveredImage : ''}`}
          image={getImage(article.cover?.localFile)}
          alt={article.cover?.alternativeText}
        />
      </div>
      <div className={styles.heading}>
        <div className={styles.time}>
          {article.createdAt}
        </div>
        <div className={styles.divide} />
      </div>
      <div className={styles.shortContent}>
        <div className={styles.title}>
          {article.title}
        </div>
        <p className={styles.description}>
          {article.description}
        </p>
      </div>
      <div className={`${styles.overlay} ${isHover ? styles.hoveredOverlay : ''}`} />
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
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
`

export default ArticleCard
