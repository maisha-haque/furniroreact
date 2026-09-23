import React from 'react'

import leftcorner from '/src/assets/leftcorner.png'
import leftcornerbottom from '/src/assets/leftcornerbottom.png'
import leftmiddle from '/src/assets/leftmiddle.png'
import leftbottom from '/src/assets/leftbottom.png'
import middle from '/src/assets/middle.png'
import rightmiddle from '/src/assets/rightmiddle.png'
import rightbottom from '/src/assets/rightbottom.png'
import rightbottomcorner from '/src/assets/rightbottomcorner.png'
import rightcorner from '/src/assets/rightcorner.png'

const Setup = () => {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="block text-xs sm:text-sm lg:text-base font-semibold text-[#616161] mb-1">
          Share your setup with
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>

      {/* Responsive Gallery Mosaic */}
      <div className="w-full max-w-[1780px] mx-auto px-2 sm:px-4">
        {/* Desktop / Large Screen Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
          {/* Column 1 - Left Edge (2 cols) */}
          <div className="col-span-2 flex flex-col gap-4 items-end">
            <div className="w-full h-[312px] overflow-hidden rounded-xs">
              <img
                src={leftcorner}
                alt="Shelf decor"
                className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="w-full h-[323px] overflow-hidden rounded-xs">
              <img
                src={leftcornerbottom}
                alt="Vintage armchair"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Column 2 - Left Middle (3 cols) */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="w-full h-[312px] overflow-hidden rounded-xs">
              <img
                src={leftmiddle}
                alt="Workspace with laptop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="w-full h-[242px] overflow-hidden rounded-xs">
              <img
                src={leftbottom}
                alt="Wooden stools with vase"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Column 3 - Center (2 cols) */}
          <div className="col-span-2 flex justify-center">
            <div className="w-full h-[392px] overflow-hidden rounded-xs shadow-sm">
              <img
                src={middle}
                alt="Dining room table"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Column 4 - Right Middle (3 cols) */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="w-full h-[348px] overflow-hidden rounded-xs">
              <img
                src={rightmiddle}
                alt="Cozy bed setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-[242px] overflow-hidden rounded-xs">
                <img
                  src={rightbottom}
                  alt="Picture frame with vase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="h-[242px] overflow-hidden rounded-xs">
                <img
                  src={rightbottomcorner}
                  alt="Kitchen wall"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Column 5 - Right Edge (2 cols) */}
          <div className="col-span-2 flex flex-col justify-center">
            <div className="w-full h-[433px] overflow-hidden rounded-xs">
              <img
                src={rightcorner}
                alt="Dining area by wall"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={leftcorner} alt="Decor" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={leftmiddle} alt="Laptop" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={middle} alt="Dining" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={leftcornerbottom} alt="Chair" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={leftbottom} alt="Stools" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={rightmiddle} alt="Bed" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={rightbottom} alt="Frame" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={rightbottomcorner} alt="Kitchen" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 sm:col-span-1 h-[200px] sm:h-[260px] overflow-hidden rounded-xs">
            <img src={rightcorner} alt="Dining Sunny" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Setup