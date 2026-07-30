import React from 'react'
import Button from '../common/Button'

const About = () => {
  return (
       <section className="h-110 flex items-center justify-center">
      <div className="text-center px-6 py-29 mt-20">
        <h1 className="text-5xl font-bold text-[#B88E2F] mb-4">
          About Us 
        </h1>

        <p className="text-lg text-center w-100 mb-6">
          Every great story starts with a simple idea. We're working behind the
          scenes to create a space filled with beautiful products, thoughtful
          designs, and a wonderful shopping experience. We can't wait to share
          our journey with you!
        </p>

        <Button btntext={"Learn More Soon"}/>


      </div>
    </section>
  )
}

export default About