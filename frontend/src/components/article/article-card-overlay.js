import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const styles = {
  wrapper: 'relative block overflow-hidden',
  overlay: 'absolute top-0 left-0 horizontal-black-gradient w-full h-full flex items-center',
  shortContent: 'w-3/4 p-8 md:w-1/2 md:pl-16',
  title: 'font-bold text-white text-lg md:text-3xl',
  description: 'text-gray-300 my-4 md:my-6 line-clamp-2 md:text-xl',
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
