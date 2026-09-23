import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import bannerImg from '/src/assets/banner.jpg'

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div
        className="w-full bg-cover bg-center min-h-[550px] sm:min-h-[640px] lg:min-h-[716px] flex items-center py-12 sm:py-16 lg:py-24"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <Container>
          <div className="flex justify-end">
            <div className="w-full max-w-[643px] bg-[#FFF3E3] rounded-[10px] p-6 sm:p-10 lg:p-12 shadow-sm border border-[#f5e5cf]/50">
              <span className="block text-xs sm:text-sm md:text-base font-semibold tracking-[3px] uppercase text-[#333333] mb-2 sm:mb-3">
                New Arrival
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#B88E2F] leading-[1.15] mb-3 sm:mb-4">
                Discover Our <br className="hidden sm:inline" />
                New Collection
              </h1>

              <p className="text-[#666666] text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 sm:mb-8 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>

              <Link
                to="/shop"
                className="inline-block bg-[#B88E2F] hover:bg-[#967425] text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-10 sm:px-14 py-4 sm:py-5 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Banner