import React, { useState } from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="border-t border-gray-200 pt-12 sm:pt-16 pb-8 bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-gray-200">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-black mb-8 sm:mb-12">
              <Link to="/">Funiro.</Link>
            </h2>
            <address className="text-[#9F9F9F] text-sm sm:text-base not-italic leading-relaxed max-w-[285px]">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

          {/* Column 2: Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#9F9F9F] font-medium text-sm sm:text-base mb-6 sm:mb-10">
              Links
            </h4>
            <ul className="flex flex-col gap-6 sm:gap-8 text-sm sm:text-base font-medium text-black">
              <li>
                <Link to="/" className="hover:text-[#B88E2F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#B88E2F] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B88E2F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B88E2F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Help (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#9F9F9F] font-medium text-sm sm:text-base mb-6 sm:mb-10">
              Help
            </h4>
            <ul className="flex flex-col gap-6 sm:gap-8 text-sm sm:text-base font-medium text-black">
              <li>
                <Link to="/" className="hover:text-[#B88E2F] transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#B88E2F] transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#B88E2F] transition-colors">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-[#9F9F9F] font-medium text-sm sm:text-base mb-6 sm:mb-10">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-wrap items-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="border-b border-black pb-1 text-sm placeholder:text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F] grow max-w-xs"
              />
              <button
                type="submit"
                className="border-b border-black text-sm font-semibold pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors uppercase tracking-wider cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </form>
            {subscribed && (
              <p className="text-sm text-[#2EC1AC] font-medium mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-left text-sm text-black">
          <p>2023 furino. All rights reserved</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer