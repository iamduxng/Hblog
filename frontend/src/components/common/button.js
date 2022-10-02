import React, { useMemo } from 'react'

const styles = {
  button: 'w-full px-4 py-3 rounded-lg'
}

const Button = ({ variant, children }) => {
  const buttonClasses = useMemo(() => {
    let className = ''
    switch (variant) {
      case 'primary':
        className = 'text-black font-medium bg-amber-400 hover:bg-amber-500'
        break
      case 'inline':
        className = 'underline text-blue-400'
        break
      default:
        break
    }

    return className
  }, [variant])

  return (
    <button className={`${buttonClasses} ${styles.button}`}>
      { children }
    </button>
  )
}

export default Button
