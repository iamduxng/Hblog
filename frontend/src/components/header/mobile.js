import React from 'react'
import { GiHamburgerMenu } from 'components/icons'
import withModal from 'components/common/modal'

const styles = {
  modalTrigger: 'cursor-pointer'
}

const ModalTrigger = ({ openModal }) => (
  <div onClick={() => openModal()}>
    <GiHamburgerMenu size='1.5rem' className={styles.modalTrigger} />
  </div>
)

const SidebarModal = withModal(ModalTrigger)

const HeaderMobile = ({ categories }) => {
  return (
    <SidebarModal>
      <div>
        Hello, I'm a modal
      </div>
    </SidebarModal>
  )
}

export default HeaderMobile
