import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { ImLocation2 } from 'components/icons'
import H1 from 'components/common/H1'

const styles = {
  wrapper: 'relative block w-full h-full',
  background: 'w-full h-full',
  overlay: 'absolute w-full h-full bg-black bg-opacity-20 top-0 left-0 flex flex-col items-center justify-center',
  locationIcon: 'text-rose-500',
  iconTransition: 'animate-[to-center-y_0.5s_ease-in-out]',
  countryName: 'text-white mt-4',
  textTransition: 'animate-[to-center-x_0.75s_ease-in-out]'
}

const BlockTravelOverview = ({ data, slug }) => {
  const [isHover, setIsHover] = useState(false)

  const { latitude, longitude } = data
  const linkToTravel = `/${slug}?lat=${latitude}&lng=${longitude}`

  return (
    <Link
      to={linkToTravel}
      className={styles.wrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
    >
      <BackgroundImage
        Tag="div"
        className={styles.background}
        fluid={data.countryMap.localFile.childImageSharp.fluid}
      />

      {isHover && (
        <div className={styles.overlay}>
          <ImLocation2
            size="5rem"
            className={`${styles.locationIcon} ${styles.iconTransition}`}
          />
          <H1 className={`${styles.countryName} ${styles.textTransition}`}>
            { data.countryName }
          </H1>
        </div>
      )}
    </Link>
  )
}

export const query = graphql`
  fragment BlockTravelOverview on STRAPI__COMPONENT_SHARED_TRAVEL_OVERVIEW {
    id,
    countryName,
    latitude,
    longitude,
    countryMap {
      mime
      localFile {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default BlockTravelOverview
