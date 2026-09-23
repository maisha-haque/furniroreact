import React from 'react'

const Image = ({ className = '', imgSrc, imgAlt = 'Furniro furniture', ...props }) => {
  return (
    <img
      className={`${className}`}
      src={imgSrc}
      alt={imgAlt}
      loading="lazy"
      {...props}
    />
  )
}

export default Image