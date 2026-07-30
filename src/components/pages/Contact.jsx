import React from 'react'
import Button from '../common/Button'

const Contact = () => {
  return (

<section className="h-110 flex items-center justify-center">
  <div className="text-center px-6 py-29 mt-20">
    <h1 className="text-5xl font-bold text-[#B88E2F] mb-4">
      Contact Us
    </h1>

    <p className="text-lg text-center w-109 mb-6">
      Have a question or just want to say hello? We're getting everything ready
      behind the scenes. Our contact page will be available soon, and we can't
      wait to connect with you!
    </p>

    <Button className={"text-[14px]"} btntext={"We'll Be Here Soon"} />
  </div>
</section>

  )
}

export default Contact