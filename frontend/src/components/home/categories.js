import React from "react"
import HomeCategory from 'components/home/category'

const styles = {
  categoryWrapper: 'flex mb-20',
}

const HomeCategories = ({ categories }) => {
  return (
    <>
      {categories.map((category, idx) => (
        <div key={`category_${idx}`} className={styles.categoryWrapper}>
          <HomeCategory category={category} />
        </div>
      ))}
    </>
  )
}

export default HomeCategories
