import React, { useState } from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { IoShareSocialOutline } from 'react-icons/io5'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

// Product Images
import syltherine from '/src/assets/syltherine.png'
import leviosa from '/src/assets/leviosa.png'
import lolita from '/src/assets/lolita.png'
import respira from '/src/assets/respira.png'
import grifo from '/src/assets/grifo.png'
import muggo from '/src/assets/muggo.png'
import pingky from '/src/assets/pingky.png'
import potty from '/src/assets/potty.png'

const productsData = [
  {
    id: 1,
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    originalPrice: 'Rp 3.500.000',
    image: syltherine,
    badge: { text: '-30%', bg: 'bg-[#E97171]' },
  },
  {
    id: 2,
    name: 'Leviosa',
    subtitle: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    originalPrice: null,
    image: leviosa,
    badge: null,
  },
  {
    id: 3,
    name: 'Lolito',
    subtitle: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
    image: lolita,
    badge: { text: '-50%', bg: 'bg-[#E97171]' },
  },
  {
    id: 4,
    name: 'Respira',
    subtitle: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    originalPrice: null,
    image: respira,
    badge: { text: 'New', bg: 'bg-[#2EC1AC]' },
  },
  {
    id: 5,
    name: 'Grifo',
    subtitle: 'Night lamp',
    price: 'Rp 1.500.000',
    originalPrice: null,
    image: grifo,
    badge: null,
  },
  {
    id: 6,
    name: 'Muggo',
    subtitle: 'Small mug',
    price: 'Rp 150.000',
    originalPrice: null,
    image: muggo,
    badge: { text: 'New', bg: 'bg-[#2EC1AC]' },
  },
  {
    id: 7,
    name: 'Pingky',
    subtitle: 'Cute bed set',
    price: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
    image: pingky,
    badge: { text: '-50%', bg: 'bg-[#E97171]' },
  },
  {
    id: 8,
    name: 'Potty',
    subtitle: 'Minimalist flower pot',
    price: 'Rp 500.000',
    originalPrice: null,
    image: potty,
    badge: { text: 'New', bg: 'bg-[#2EC1AC]' },
  },
]

const Product = () => {
  const [likedItems, setLikedItems] = useState({})
  const [notification, setNotification] = useState('')

  const toggleLike = (e, id) => {
    e.stopPropagation()
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleAddToCart = (e, name) => {
    e.stopPropagation()
    setNotification(`Added "${name}" to cart!`)
    setTimeout(() => setNotification(''), 2500)
  }

  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Toast notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#3A3A3A] text-white px-6 py-3 rounded-lg shadow-xl text-sm font-medium animate-bounce">
            {notification}
          </div>
        )}

        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A3A3A]">
            Our Products
          </h2>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#F4F5F7] overflow-hidden rounded-xs transition-shadow duration-300 hover:shadow-xl cursor-pointer flex flex-col"
            >
              {/* Image & Badge Container */}
              <div className="relative w-full h-[301px] bg-gray-100 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge if present */}
                {item.badge && (
                  <div
                    className={`absolute top-6 right-6 w-12 h-12 rounded-full ${item.badge.bg} text-white flex items-center justify-center font-medium text-sm shadow-sm z-10`}
                  >
                    {item.badge.text}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 pt-4 pb-7 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#3A3A3A] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#898989] mb-2 sm:mb-3">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-base sm:text-lg font-semibold text-[#3A3A3A]">
                    {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm sm:text-base font-normal text-[#B0B0B0] line-through">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* HOVER OVERLAY (Matches reference image card 2 Leviosa) */}
              <div className="absolute inset-0 bg-[#3A3A3A]/75 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 z-20">
                {/* Add to Cart Button */}
                <button
                  onClick={(e) => handleAddToCart(e, item.name)}
                  className="w-full max-w-[202px] bg-white text-[#B88E2F] font-semibold text-base py-3 px-8 hover:bg-[#B88E2F] hover:text-white transition-all duration-200 shadow-md mb-6 cursor-pointer active:scale-95 text-center"
                >
                  Add to cart
                </button>

                {/* Action Links: Share, Compare, Like */}
                <div className="flex items-center justify-center gap-5 sm:gap-6 text-white text-sm font-semibold">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      alert(`Share ${item.name}`)
                    }}
                    className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                  >
                    <IoShareSocialOutline className="text-lg" />
                    <span>Share</span>
                  </button>

                  <Link
                    to="/compare"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                  >
                    <TbArrowsRightLeft className="text-lg" />
                    <span>Compare</span>
                  </Link>

                  <button
                    onClick={(e) => toggleLike(e, item.id)}
                    className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                  >
                    {likedItems[item.id] ? (
                      <FaHeart className="text-lg text-red-500" />
                    ) : (
                      <FaRegHeart className="text-lg" />
                    )}
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block border border-[#B88E2F] bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300 font-semibold text-base py-3 px-16 sm:px-20 cursor-pointer shadow-sm hover:shadow"
          >
            Show More
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Product