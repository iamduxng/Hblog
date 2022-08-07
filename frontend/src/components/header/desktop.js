import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeaderItemList from 'components/header/items'

const styles = {
  wrapper: 'flex items-center justify-end',
  item: 'flex capitalize px-10 py-8 relative',
  itemBefore: 'hover:before:block before:hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-1.5 before:bg-amber-400'
}

const HeaderDesktop = ({ currentCategory }) => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 3,
        sort: {
          fields: updatedAt
        },
      ) {
        nodes {
          name,
          slug,
        }
      }
    }
  `)

  return (
    <div className={styles.wrapper}>
      <HeaderItemList
        categories={allStrapiCategory.nodes}
        itemClasses={`${styles.item} ${styles.itemBefore}`}
        currentCategory={currentCategory}
      />
    </div>
  )
}

export default HeaderDesktop
