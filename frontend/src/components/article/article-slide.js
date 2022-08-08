import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const styles = {
  wrapper: 'flex flex-col h-full overflow-hidden rounded-lg bg-white shadow',
  shortContent: 'p-4 flex-1',
}

const ArticleSlide = ({ article }) => {
  return (
    <Link to={`/article/${article.slug}`} className={styles.wrapper}>
      <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
      />
    </Link>
  )
}

export default ArticleSlide
