import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { Link, Links } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="border border-gray-300 mt-20">
        <div className="py-16 px-5">
          <Container>
            <Flex className={""}>

              <div className="w-[32%]">
                <h2 className="text-2xl font-bold mb-10"><Link to={"/"}>Funiro.</Link></h2>

                <p className="text-gray-400 w-56">
                  400 University Drive Suite 200 Coral
                  Gables,
                  FL 33134 USA </p>
              </div>

              <div className="w-[16%] ml-15">
                <h4 className="text-gray-400 mb-10">Links</h4>

                <ul>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Home</Link></li>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Shop</Link></li>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/about"}>About</Link></li>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Contact</Link></li>
                </ul>
              </div>


              <div className="w-[20%] ml-15">
                <h4 className="text-gray-400 mb-10">Help</h4>

                <ul>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Payment Options</Link></li>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Returns</Link></li>
                  <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Privacy Policies</Link></li>
                </ul>

              </div>


              <div className="w-[32%] ml-15">
                <h4 className="text-gray-400 mb-10">Newsletter</h4>

                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="border-b border-black pb-2 text-sm placeholder:text-gray-400"
                  />

                  <button className="border-black text-[14px] font-semibold pb-1 hover:text-[#B88E2F] duration-300"> SUBSCRIBE </button>
                </div>



              </div>


            </Flex>




          </Container>
        </div>
      </div>



    </>
  )
}

export default Footer