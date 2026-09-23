import React, { useState } from 'react'
import Container from '../common/Container'
import logo from '/src/assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { TbUserCheck, TbArrowsRightLeft } from 'react-icons/tb'
import { HiMenuAlt3 } from 'react-icons/hi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Furniro Logo" className="h-8 sm:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-14">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#B88E2F]' : 'text-black hover:text-[#B88E2F]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Utility Icons (All 5 Icons) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-black">
            {/* 1. Human / Login Icon */}
            <Link
              to="/login"
              aria-label="User Account"
              title="My Account"
              className="text-2xl hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer"
            >
              <TbUserCheck />
            </Link>

            {/* 2. Search Icon -> Navigates to Shop */}
            <Link
              to="/shop"
              aria-label="Search Shop"
              title="Search Shop"
              className="text-2xl hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer"
            >
              <IoSearchOutline />
            </Link>

            {/* 3. Compare Icon beside Heart Icon -> Product Compare */}
            <Link
              to="/compare"
              aria-label="Compare Products"
              title="Compare Products"
              className="text-2xl hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer"
            >
              <TbArrowsRightLeft />
            </Link>

            {/* 4. Heart / Wishlist Icon */}
            <Link
              to="/shop"
              aria-label="Wishlist"
              title="Wishlist"
              className="text-xl hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer"
            >
              <FaRegHeart />
            </Link>

            {/* 5. Cart Icon -> Navigates to Cart Page */}
            <Link
              to="/cart"
              aria-label="Shopping Cart"
              title="Shopping Cart"
              className="text-2xl hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer"
            >
              <FiShoppingCart />
            </Link>
          </div>

          {/* Mobile Action Icons & Hamburger Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 md:hidden text-black">
            <Link
              to="/compare"
              aria-label="Compare"
              className="text-xl hover:text-[#B88E2F]"
            >
              <TbArrowsRightLeft />
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="text-xl hover:text-[#B88E2F]"
            >
              <FiShoppingCart />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="text-2xl text-black focus:outline-none cursor-pointer ml-1"
            >
              {mobileMenuOpen ? <IoCloseOutline /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with all navigation and responsive icons */}
        {mobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-gray-100 animate-fadeIn bg-white">
            <nav className="flex flex-col gap-3 px-2 pb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium py-1.5 transition-colors ${
                      isActive ? 'text-[#B88E2F]' : 'text-black hover:text-[#B88E2F]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Responsive Icons Grid for Mobile */}
            <div className="pt-4 border-t border-gray-100">
              <span className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3 px-2">
                Quick Actions
              </span>
              <div className="grid grid-cols-5 gap-2 text-center text-black">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 hover:text-[#B88E2F]"
                >
                  <TbUserCheck className="text-2xl" />
                  <span className="text-[11px] font-medium">Account</span>
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 hover:text-[#B88E2F]"
                >
                  <IoSearchOutline className="text-2xl" />
                  <span className="text-[11px] font-medium">Search</span>
                </Link>
                <Link
                  to="/compare"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 hover:text-[#B88E2F]"
                >
                  <TbArrowsRightLeft className="text-2xl" />
                  <span className="text-[11px] font-medium">Compare</span>
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 hover:text-[#B88E2F]"
                >
                  <FaRegHeart className="text-2xl" />
                  <span className="text-[11px] font-medium">Wishlist</span>
                </Link>
                <Link
                  to="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 hover:text-[#B88E2F]"
                >
                  <FiShoppingCart className="text-2xl" />
                  <span className="text-[11px] font-medium">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header