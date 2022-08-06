import React from 'react'
import { Link } from 'gatsby'

const styles = {
  wrapper: 'flex items-center justify-end',
  item: 'flex capitalize px-10 py-8 relative',
  itemBefore: 'hover:before:block before:hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-1.5 before:bg-amber-400'
}

const HeaderDesktop = ({ categories }) => {
  return (
    <div className={styles.wrapper}>
      {categories.map((category, idx) => (
        <Link
          key={`category_p1_${idx}`}
          to={`/${category.slug}`}
          className={`${styles.item} ${styles.itemBefore}`}
        >
          {category.name}
        </Link>
      ))}
      <Link to='/about' className={`${styles.item} ${styles.itemBefore}`}>
        About
      </Link>
    </div>
  )
}

export default HeaderDesktop
