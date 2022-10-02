import React from 'react'
import { Link } from 'gatsby'

const styles = {
  itemActive: 'before:!block'
}

const HeaderItemList = ({ categories, itemClasses, currentCategory }) => {
  return (
    <>
      {categories.map((category, idx) => (
        <Link
          key={`category_sidebar_${idx}`}
          to={`/${category.slug}`}
          className={`${itemClasses} ${currentCategory === category.slug ? styles.itemActive : ''}`}
        >
          {category.name}
        </Link>
      ))}
      <Link to='/about' className={`${itemClasses} ${currentCategory === 'about' ? styles.itemActive : ''}`}>
        About
      </Link>
    </>
  )
}

export default HeaderItemList
