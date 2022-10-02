import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import H2 from 'components/common/h2'
import Button from 'components/common/button'

const styles = {
  wrapper: 'relative h-screen overflow-hidden',
  overlay: 'flex items-start justify-center p-16 md:items-center md:justify-start',
  overlayBg: 'absolute top-0 right-0 bg-eclipse-right-gradient w-full h-full',
  about: 'z-10 flex flex-col p-8 max-w-screen-sm bg-black bg-opacity-20 rounded-2xl text-white',
  aboutButton: 'w-32 mt-4',
  aboutTransition: 'animate-[to-right_2s_ease-in-out]',
  avatar: 'absolute bottom-0 right-0 w-2/3 md:w-1/2',
  avatarTransition: 'animate-[to-top_2s_ease-in-out]'
}

const HomeIntroduction = () => {
  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        about,
        avatar {
          alternativeText,
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 0.75)
            }
          }
        },
        background {
          alternativeText,
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="div"
      className={styles.wrapper}
      fluid={strapiHome.background.localFile.childImageSharp.fluid}
    >
      <div className={`${styles.overlay} ${styles.overlayBg}`}>
        <div className={`${styles.about} ${styles.aboutTransition}`}>
          <H2>{strapiHome.about}</H2>
          <Link to='/about' className={styles.aboutButton}>
            <Button variant="primary">
              About me
            </Button>
          </Link>
        </div>
        <div className={`${styles.avatar} ${styles.avatarTransition}`}>
          <GatsbyImage
            image={getImage(strapiHome.avatar.localFile)}
            alt={strapiHome.avatar.alternativeText}
          />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default HomeIntroduction
