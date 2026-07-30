import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const Error = () => {
  return (
       <section className="h-250 flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold text-white">404</h1>

        <h2 className="text-3xl font-semibold text-[#B88E2F] mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-300 font-serif text-center mt-4 mb-7">
          Looks like this page wandered off! The page you're looking for doesn't
          exist or may have been moved. Let's get you back on track.
        </p>

        <Link to={"/"}>
        <Button btntext={" Go Back Home "}/>
        </Link>


      </div>
    </section>
  )
}

export default Error