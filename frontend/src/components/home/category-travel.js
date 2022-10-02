import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HomeCategory from 'components/home/category'
import BlockTravelOverview from 'components/core/block-travel-overview'

const styles = {
  wrapper: 'h-screen flex',
  item: 'flex-1 mx-2 md:mx-6 shadow-md rounded-2xl overflow-hidden',
}

const travelCategorySlug = 'journey'

const HomeCategoryTravel = () => {
  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        travelOverview {
          ...BlockTravelOverview,
        }
      }
    }
  `)

  const { travelOverview } = strapiHome

  return (
    <HomeCategory name="Travel" slug={travelCategorySlug}>
      <div className={styles.wrapper}>
        {travelOverview.map((block, idx) => (
          <div key={`travel-overview-${idx}`} className={styles.item}>
            <BlockTravelOverview data={block} slug={travelCategorySlug} />
          </div>
        ))}
      </div>
    </HomeCategory>
  )
}

export default HomeCategoryTravel
