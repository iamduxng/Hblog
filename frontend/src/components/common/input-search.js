import React, { useState } from 'react'
import { FaSearch } from 'components/icons'

const styles = {
  wrapper: 'relative overflow-hidden rounded-xl border border-gray-300 pr-12 bg-white',
  input: '!outline-none w-full p-4 bg-white',
  icon: 'absolute right-4 top-5 cursor-pointer',
}

const InputSearch = ({ placeholder, searchFunc }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const enterSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      searchFunc(searchTerm)
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.trim())}
        onKeyPress={(e) => enterSearch(e)}
      />
      <div
        className={styles.icon}
        onClick={() => searchFunc(searchTerm)}
      >
        <FaSearch />
      </div>
    </div>
  )
}

export default InputSearch
