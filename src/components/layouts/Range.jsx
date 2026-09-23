import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import dinning from '/src/assets/dinning.png'
import living from '/src/assets/living.png'
import bedroom from '/src/assets/bedroom.png'

const Range = () => {
  const categories = [
    { title: 'Dining', image: dinning, path: '/shop' },
    { title: 'Living', image: living, path: '/shop' },
    { title: 'Bedroom', image: bedroom, path: '/shop' },
  ]

  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#333333] mb-2">
            Browse The Range
          </h2>
          <p className="text-[#666666] text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.path}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-full overflow-hidden rounded-[10px] bg-[#F4F5F7] aspect-[4/5]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#333333] mt-5 group-hover:text-[#B88E2F] transition-colors">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Range