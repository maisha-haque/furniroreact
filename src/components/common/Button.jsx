import React from 'react'

const Button = ({btntext, className}) => {
  return (
    <button className={`${className} py-3 px-9 bg-[#B88E2F] text-[12px] text-white font-bold font-sans hover:bg-white border-2 border-[#B88E2F] hover:text-[#B88E2F]`}>{btntext}</button>
  )
}

export default Button