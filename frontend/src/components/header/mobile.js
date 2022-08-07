import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GiHamburgerMenu } from 'components/icons'
import withModal from 'components/common/modal'
import HeaderItemList from 'components/header/items'

const styles = {
  modalTrigger: 'cursor-pointer',
  sidebar: 'flex flex-col items-center',
  item: 'flex capitalize relative py-4 text-xl',
  itemBefore: 'hover:before:block before:hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-1.5 before:bg-amber-400'
}

const ModalTrigger = ({ openModal }) => (
  <div onClick={() => openModal()}>
    <GiHamburgerMenu size='1.5rem' className={styles.modalTrigger} />
  </div>
)

const SidebarModal = withModal(ModalTrigger)

const HeaderMobile = ({ currentCategory }) => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 10,
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
    <SidebarModal>
      <div className={styles.sidebar}>
        <HeaderItemList
          categories={allStrapiCategory.nodes}
          itemClasses={`${styles.item} ${styles.itemBefore}`}
          currentCategory={currentCategory}
        />
      </div>
    </SidebarModal>
  )
}

export default HeaderMobile
