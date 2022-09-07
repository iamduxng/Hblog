import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import H1 from 'components/common/h1'
import Button from 'components/common/button'

const styles = {
  wrapper: 'relative h-screen overflow-hidden',
  overlay: 'flex items-start justify-center p-16 md:items-center md:justify-start',
  overlayBg: 'absolute top-0 right-0 w-full h-full bg-black bg-opacity-40',
  content: 'flex flex-col items-center self-center w-full text-white p-6 max-w-screen-md mx-auto',
  quote: 'md:text-xl text-center my-8',
  seeMoreLink: 'font-medium underline text-sky-400 w-32 block',
}

const HomeCategoryTravel = () => {
  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        travelBackground {
          alternativeText,
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        },
        travelQuote,
        travelHeadline,
        travelLink,
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="div"
      className={styles.wrapper}
      fluid={strapiHome.travelBackground.localFile.childImageSharp.fluid}
    >
      <div className={`${styles.overlay} ${styles.overlayBg}`}>
        <div className={styles.content}>
          <H1>{strapiHome.travelHeadline}</H1>
          <div className={styles.quote}>{strapiHome.travelQuote}</div>
          <Link to={strapiHome.travelLink} className={styles.seeMoreLink}>
            <Button variant="primary">
              See more
            </Button>
          </Link>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default HomeCategoryTravel
