import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import H1 from 'components/common/H1'
import BlockSocial from 'components/core/block-social'

const styles = {
  wrapper: 'bg-black text-white',
  container: 'container flex items-center justify-between py-8',
  socialGroup: 'grid grid-cols-2 grid-rows-2 gap-1'
}

const Footer = () => {
  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        blocks {
          ...BlockSocial,
        }
      }
    }
  `)

  const { blocks } = strapiHome

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to='/'>
          <H1>Hblog</H1>
        </Link>

        <div className={styles.socialGroup}>
          {blocks.map(block => (
            <BlockSocial data={block} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
