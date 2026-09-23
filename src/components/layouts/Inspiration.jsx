import React, { useState } from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronRight } from 'react-icons/fi'

import room1 from '/src/assets/room1.jpg'
import room2 from '/src/assets/room2.jpg'
import room3 from '/src/assets/room3.jpg'

const slides = [
  {
    id: 1,
    tag: '01 —— Bed Room',
    title: 'Inner Peace',
    image: room1,
  },
  {
    id: 2,
    tag: '02 —— Dining Room',
    title: 'Sunlit Harmony',
    image: room2,
  },
  {
    id: 3,
    tag: '03 —— Living Room',
    title: 'Cozy Serenity',
    image: room3,
  },
  {
    id: 4,
    tag: '04 —— Work Space',
    title: 'Modern Simplicity',
    image: room1,
  },
]

const Inspiration = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }


  const nextIndex = (currentSlide + 1) % slides.length
  const activeSlide = slides[currentSlide]
  const peekSlide = slides[nextIndex]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF8F3] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Left Text Column */}
          <div className="w-full lg:w-[35%] shrink-0 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A3A3A] leading-[1.2] mb-3 sm:mb-4">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[#616161] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#B88E2F] hover:bg-[#967425] text-white font-semibold text-sm sm:text-base py-3 sm:py-3.5 px-9 transition-colors shadow-sm active:scale-95"
            >
              Explore More
            </Link>
          </div>

          {/* Right Slider Column */}
          <div className="w-full lg:w-[65%] flex flex-col items-center lg:items-start">
            <div className="relative w-full flex items-center gap-6 overflow-hidden sm:overflow-visible">
              {/* Active Slide */}
              <div className="relative w-full sm:w-[380px] lg:w-[404px] h-[450px] sm:h-[540px] lg:h-[582px] overflow-hidden rounded-xs shrink-0 shadow-md">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />

                {/* Floating Room Info Card */}
                <div className="absolute bottom-6 left-6 flex items-end">
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 pr-6 sm:pr-8 shadow-md">
                    <span className="text-xs sm:text-sm font-medium text-[#616161] block mb-1">
                      {activeSlide.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#3A3A3A] tracking-tight">
                      {activeSlide.title}
                    </h3>
                  </div>

                  {/* Golden Arrow Button */}
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-12 h-12 bg-[#B88E2F] hover:bg-[#967425] text-white flex items-center justify-center transition-colors shadow-md cursor-pointer shrink-0"
                  >
                    <FiArrowRight className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Next Slide Preview (peeking in) */}
              <div className="hidden sm:block relative w-[320px] lg:w-[372px] h-[400px] sm:h-[480px] lg:h-[512px] overflow-hidden rounded-xs shrink-0 shadow-sm opacity-85">
                <img
                  src={peekSlide.image}
                  alt={peekSlide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Next Circle Button */}
              <button
                onClick={handleNext}
                aria-label="Next room slide"
                className="absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#B88E2F] shadow-xl flex items-center justify-center hover:bg-[#B88E2F] hover:text-white transition-all cursor-pointer z-30"
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-4 mt-8 self-center lg:self-start lg:ml-6">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="cursor-pointer transition-all duration-300 focus:outline-none"
                  >
                    {isActive ? (
                      <div className="w-7 h-7 rounded-full border border-[#B88E2F] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#B88E2F]" />
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8] hover:bg-[#B88E2F]/60 transition-colors" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Inspiration
