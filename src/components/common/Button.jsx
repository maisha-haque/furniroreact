import React from 'react'

const Button = ({ btntext, children, className = '', ...props }) => {
  return (
    <button
      className={`inline-block font-semibold transition-all duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {btntext || children}
    </button>
  )
}

export default Button