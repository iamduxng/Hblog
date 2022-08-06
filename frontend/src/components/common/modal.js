import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
}

const styles = {
  noScroll: 'overflow-hidden'
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
        <button onClick={() => closeModal()}>Close</button>
        { children }
      </Modal>
    </>
  )
}

export default withModal
