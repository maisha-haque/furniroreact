import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import logo from '/src/assets/logo.png'
import { Link, Links } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";




const Header = () => {
  return (
    <>
    <div className="py-2">
        <Container>
            <Flex className={"justify-between"}>

                <div className="w-[20%]">
                    <Link to={"/"}>
                    <Image imgSrc={logo}/>
                    </Link>
                </div>

                <div className="w-[60%] ml-64">
                    <ul className='flex gap-12'>
                        <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/"}>Home</Link></li>
                        <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/shop"}>Shop</Link></li>
                        <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/about"}>About</Link></li>
                        <li className={"text-[18px] font-medium text-olive-900 hover:text-[#B88E2F] duration-300"}><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                <div className="w-[20%] flex gap-5">
                    <IoIosContact className='text-[22px] text-olive-900 hover:text-[#B88E2F] duration-300' />
                    <IoSearchOutline className='text-[22px] text-olive-900 hover:text-[#B88E2F] duration-300 font-extrabold'/>
                    <FaRegHeart className='text-[22px] text-olive-900 hover:text-[#B88E2F] duration-300'/>
                    <FiShoppingCart  className='text-[22px] text-olive-900 hover:text-[#B88E2F] duration-300'/>

                </div>

            </Flex>
        </Container>
    </div>
    
    
    
    </>
  )
}

export default Header