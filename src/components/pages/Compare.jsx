import React, { useState } from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiStar } from 'react-icons/fi'

import syltherine from '/src/assets/syltherine.png'
import leviosa from '/src/assets/leviosa.png'
import lolita from '/src/assets/lolita.png'

const availableProducts = [
  {
    id: 1,
    name: 'Syltherine Chair',
    price: 'Rp 2.500.000',
    rating: 4.7,
    reviews: 145,
    image: syltherine,
    package: '1 Sectional Dining Chair',
    model: 'TFCBLGRL6RHS',
    material: 'Solid Wood',
    filling: 'Foam & Linen',
    dimensions: '60 x 55 x 85 cm',
    weight: '12 KG',
    warranty: '1 Year Warranty',
  },
  {
    id: 2,
    name: 'Leviosa Cafe Chair',
    price: 'Rp 2.500.000',
    rating: 4.5,
    reviews: 98,
    image: leviosa,
    package: '1 Ergonomic Cafe Chair',
    model: 'LEV890-BLK',
    material: 'Reinforced Polymer & Beech',
    filling: 'Cushioned Padding',
    dimensions: '58 x 52 x 82 cm',
    weight: '9.5 KG',
    warranty: '2 Year Warranty',
  },
  {
    id: 3,
    name: 'Lolito Big Sofa',
    price: 'Rp 7.000.000',
    rating: 4.9,
    reviews: 210,
    image: lolita,
    package: '1 Luxury 3-Seater Sofa',
    model: 'LOL-SOFA-3S',
    material: 'Premium Velvet & Teak',
    filling: 'High Density Foam',
    dimensions: '220 x 95 x 88 cm',
    weight: '55 KG',
    warranty: '3 Year Warranty',
  },
]

const Compare = () => {
  const [selectedP1, setSelectedP1] = useState(availableProducts[0])
  const [selectedP2, setSelectedP2] = useState(availableProducts[1])

  return (
    <div className="w-full pb-20">
      {/* Header Banner */}
      <div className="py-12 sm:py-16 text-center border-b border-gray-100">
        <Container>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3">
            Product Comparison
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
            <Link to="/" className="text-black hover:text-[#B88E2F] transition-colors">
              Home
            </Link>
            <FiChevronRight className="text-[#898989]" />
            <span className="text-[#898989]">Comparison</span>
          </nav>
        </Container>
      </div>

      <Container className="mt-10 sm:mt-14">
        {/* Top Product Selector Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-10 border-b border-gray-200 items-start">
          {/* Column 1: Info & CTA */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A] mb-3">
              Go to Product page for more Products
            </h2>
            <Link
              to="/shop"
              className="text-[#727272] underline font-medium hover:text-[#B88E2F] text-base sm:text-lg transition-colors inline-block mb-4"
            >
              View More Products
            </Link>
          </div>

          {/* Product 1 Card */}
          <div className="bg-[#F4F5F7] p-5 rounded-xl">
            <div className="w-full h-48 sm:h-56 bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={selectedP1.image}
                alt={selectedP1.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Select Product 1:
              </label>
              <select
                value={selectedP1.id}
                onChange={(e) => {
                  const found = availableProducts.find((p) => p.id === Number(e.target.value))
                  if (found) setSelectedP1(found)
                }}
                className="w-full bg-white border border-gray-200 rounded p-1.5 text-sm font-medium focus:outline-none focus:border-[#B88E2F]"
              >
                {availableProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-lg font-semibold text-[#B88E2F] mb-2">{selectedP1.price}</p>
            <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
              <FiStar className="fill-amber-500" />
              <span className="font-semibold">{selectedP1.rating}</span>
              <span className="text-gray-400 text-xs ml-1">({selectedP1.reviews} Reviews)</span>
            </div>
            <Link
              to="/cart"
              className="block text-center w-full py-2.5 bg-[#B88E2F] hover:bg-[#967425] text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
            >
              Add To Cart
            </Link>
          </div>

          {/* Product 2 Card */}
          <div className="bg-[#F4F5F7] p-5 rounded-xl">
            <div className="w-full h-48 sm:h-56 bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={selectedP2.image}
                alt={selectedP2.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Change Product:
              </label>
              <select
                value={selectedP2.id}
                onChange={(e) => {
                  const found = availableProducts.find((p) => p.id === Number(e.target.value))
                  if (found) setSelectedP2(found)
                }}
                className="w-full bg-white border border-gray-200 rounded p-1.5 text-sm font-medium focus:outline-none focus:border-[#B88E2F]"
              >
                {availableProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-lg font-semibold text-[#B88E2F] mb-2">{selectedP2.price}</p>
            <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
              <FiStar className="fill-amber-500" />
              <span className="font-semibold">{selectedP2.rating}</span>
              <span className="text-gray-400 text-xs ml-1">({selectedP2.reviews} Reviews)</span>
            </div>
            <Link
              to="/cart"
              className="block text-center w-full py-2.5 bg-[#B88E2F] hover:bg-[#967425] text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
            >
              Add To Cart
            </Link>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[650px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 text-xl font-bold text-[#3A3A3A] w-1/3">General Specifications</th>
                <th className="py-4 text-base font-semibold text-[#3A3A3A] w-1/3">{selectedP1.name}</th>
                <th className="py-4 text-base font-semibold text-[#3A3A3A] w-1/3">{selectedP2.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Sales Package</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP1.package}</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP2.package}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Model Number</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP1.model}</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP2.model}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Primary Material</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP1.material}</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP2.material}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Upholstery / Filling</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP1.filling}</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP2.filling}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Dimensions (W x D x H)</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP1.dimensions}</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP2.dimensions}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Net Weight</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP1.weight}</td>
                <td className="py-3.5 text-[#3A3A3A]">{selectedP2.weight}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-gray-500">Warranty</td>
                <td className="py-3.5 font-semibold text-[#2EC1AC]">{selectedP1.warranty}</td>
                <td className="py-3.5 font-semibold text-[#2EC1AC]">{selectedP2.warranty}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

export default Compare
