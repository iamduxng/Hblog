import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import H1 from 'components/common/H1'
import BlockSocial from 'components/core/block-social'

const styles = {
  wrapper: 'bg-black text-white',
  container: 'container flex items-center justify-between',
  socialGroup: 'grid grid-cols-2 grid-rows-2 gap-1 -skew-x-12 mr-4 sm:mr-0',
  socialBackground: 'w-20'
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
          {blocks.map((block, idx) => (
            <div key={`social-item-${idx}`} className={styles.socialBackground}>
              <BlockSocial
                data={block}
                bgClasses={idx / 2 < 1 ? 'pt-8 pb-4' : 'pb-8 pt-4'}
                logoClasses="skew-x-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
