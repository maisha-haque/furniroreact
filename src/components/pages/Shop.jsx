import React from 'react'
import Button from '../common/Button'

const Shop = () => {
  return (

<section className="h-110 flex items-center justify-center">

  <div className="text-center px-6 py-29 mt-20">
    <h1 className="text-5xl font-bold text-[#B88E2F] mb-4">
      Shop
    </h1>

    <p className="text-lg text-center w-115 mb-6">
      We're putting the finishing touches on our collection. Soon you'll be
      able to browse stylish furniture, cozy home essentials, and timeless
      pieces designed to make every space feel special. Stay tuned—we're almost
      ready!! Check back soon to discover pieces that bring comfort,
      style, and warmth into your home.
    </p>

    <Button className={"text-[14px]"} btntext={"Coming Soon"} />
  </div>
</section>
  )
}

export default Shop