import React from 'react'
import banner from '/src/assets/banner.jpg'
import Image from '../common/Image'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Button from '../common/Button'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (

    <div className={"bg-[url(/src/assets/banner.jpg)] bg-no-repeat bg-center bg-cover w-full pt-28 pb-28"}>
    <Container>
      <div className="ml-187.5">
        <h3 className={"font-semibold font-serif text-[13px] mt-15"}>New Arrival</h3>

        <h1 className={"font-bold text-[51px] w-95 text-[#B88E2F]"}>Discover Our New Collection</h1>

        <p className={"font-light font-serif mt-2 w-110"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

       <Link to={"/shop"}>
        <Button className={"mt-15"} btntext={"BUY NOW"}/>
       </Link>

      </div>

    </Container>
    </div> 

     )
}

export default Banner