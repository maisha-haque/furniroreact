import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'

const Cart = () => {
  return (
    <div className="w-full pb-20">
      {/* Subpage Header Banner */}
      <div className="py-12 sm:py-16 text-center border-b border-gray-100">
        <Container>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3">
            Cart
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
            <Link to="/" className="text-black hover:text-[#B88E2F] transition-colors">
              Home
            </Link>
            <FiChevronRight className="text-[#898989]" />
            <span className="text-[#898989]">Cart</span>
          </nav>
        </Container>
      </div>

      {/* Clean Coming Soon Card */}
      <Container className="mt-12 sm:mt-16">
        <div className="max-w-xl mx-auto text-center bg-[#F4F5F7] p-8 sm:p-14 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-[#B88E2F]/10 text-[#B88E2F] rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-inner">
            <FiShoppingBag />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A] mb-3">
            Your Cart is Coming Soon!
          </h2>

          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            We're putting the finishing touches on our seamless checkout and cart experience. Soon you'll be able to review your chosen pieces, apply discount codes, and order with 1-click convenience.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#B88E2F] hover:bg-[#967425] text-white font-semibold py-3.5 px-8 rounded-lg text-sm sm:text-base transition-all shadow-md active:scale-95"
          >
            <FiArrowLeft className="text-lg" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Cart
