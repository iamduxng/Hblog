import React from 'react'

const H1 = ({ children, className = '' }) => {
  return (
    <div className={`text-2xl font-semibold ${className}`}>
      { children }
    </div>
  )
}

export default H1
