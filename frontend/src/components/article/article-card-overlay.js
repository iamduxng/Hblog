import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const styles = {
  wrapper: 'relative block overflow-hidden',
  overlay: 'absolute top-0 left-0 bg-horizontal-black-gradient w-full h-full flex items-center',
  thumbnail: 'w-full',
  shortContent: 'w-3/4 md:w-1/2 py-4 pl-28',
  title: 'font-bold text-white text-lg md:text-3xl',
  description: 'text-gray-300 my-2 sm:my-6 line-clamp-1 sm:line-clamp-2 sm:text-xl',
  divide: 'bg-amber-400 h-1 w-28',
  time: 'text-gray-300',
}

const ArticleCardOverlay = ({ article }) => {
  return (
    <Link
      to={`/article/${article.slug}`}
      className={styles.wrapper}
    >
      <GatsbyImage
        className={styles.thumbnail}
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
      />
      <div className={styles.overlay}>
        <div className={styles.shortContent}>
          <div className={styles.title}>
            {article.title}
          </div>
          <p className={styles.description}>
            {article.description}
          </p>
          <div className={styles.divide} />
        </div>
      </div>
    </Link>
  )
}

export default ArticleCardOverlay
