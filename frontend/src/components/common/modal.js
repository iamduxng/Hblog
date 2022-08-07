import React, { useState } from 'react'
import Modal from 'react-modal'
import { GrClose } from 'components/icons'

Modal.setAppElement('#___gatsby')

const customStyles = {
  content: {
    top: '4rem',
    left: 0,
    right: 0,
    width: '100%',
    height: 'calc(100% - 4rem)',
    position: 'relative'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
}

const styles = {
  noScroll: 'overflow-hidden',
  iconClose: 'cursor-pointer absolute right-4 top-4'
}

const withModal = (ModalTrigger) => ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <ModalTrigger openModal={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        bodyOpenClassName={styles.noScroll}
        htmlOpenClassName={styles.noScroll}

      >
        <GrClose size="1.5rem" className={styles.iconClose} onClick={() => closeModal()} />
        { children }
      </Modal>
    </>
  )
}

export default withModal
