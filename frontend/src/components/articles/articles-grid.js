import React from 'react'
import ArticleCard from 'components/article/article-card'

const styles = {
  listWrapper: 'grid grid-cols-1 gap-4 md:grid-cols-3',
  // halfWidthBlock: 'md:row-span-2 md:col-span-2',
  // fullWidthBlock: 'md:row-span-1 md:col-span-3',
}

const ArticlesGrid = ({ articles, getItemClasses = () => {} }) => {
  // const getBlockClasses = (idx) => {
  //   if (idx === 0 || idx === 11) {
  //     return styles.halfWidthBlock
  //   } else if (idx === 6) {
  //     return styles.fullWidthBlock
  //   } else {
  //     return null
  //   }
  // }

  return (
    <div className={styles.listWrapper}>
      {articles.map((article, idx) => (
        <div key={`articleCard_${idx}`} className={getItemClasses(idx)}>
          <ArticleCard article={article}/>
        </div >
      ))}
    </div>
  )
}

export default ArticlesGrid
