import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import syltherine from '/src/assets/syltherine.png'
import Button from '../common/Button'
import leviosa from '/src/assets/leviosa.png'
import lolita from '/src/assets/lolita.png'
import respira from '/src/assets/respira.png'
import grifo from '/src/assets/grifo.png'
import muggo from '/src/assets/muggo.png'
import pingky from '/src/assets/pingky.png'
import potty from '/src/assets/potty.png'
import { Link } from 'react-router-dom'




const Product = () => {
    return (
        <>
          <div className="mt-6">
             <h3 className={"font-bold font-serif text-[25px] text-center"}>Our Products</h3>
          </div>

          <div className="mt-5">
            <Container>
                <Flex className={"items-center justify-between"}>

                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={syltherine}/>

                        <div className={"absolute bg-red-400 top-4 right-4 rounded-full w-10 h-10 items-center"}>
                            <h6 className={"absolute top-2 right-1 inline-block text-white text-[14px]"}>-30%</h6>
                        </div>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Syltherine</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Luxury Table</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 2.500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>


                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={leviosa}/>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Leviosa</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Outdoor bar table and stool</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>


                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={lolita}/>

                        <div className={"absolute bg-green-400 top-4 right-4 rounded-full w-10 h-10 items-center"}>
                            <h6 className={"absolute top-2 right-1.5 inline-block text-white text-[14px]"}>New</h6>
                        </div>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Lolita</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Luxury Big Sofa</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 7.500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>



                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={respira}/>

                        <div className={"absolute bg-red-400 top-4 right-4 rounded-full w-10 h-10 items-center"}>
                            <h6 className={"absolute top-2 right-1 inline-block text-white text-[14px]"}>-10%</h6>
                        </div>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Respira</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Indoor Stylish Sets</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 11,500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>










                </Flex>
            </Container>
          </div>

        <div className="mt-7">
            <Container>
                <Flex className={"items-center justify-between"}>

                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={grifo}/>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Grifo</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Luxury Lamp</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 1.000.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>


                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={muggo}/>

                        
                        <div className={"absolute bg-green-400 top-4 right-4 rounded-full w-10 h-10 items-center"}>
                            <h6 className={"absolute top-2 right-2 inline-block text-white text-[14px]"}>New</h6>
                        </div>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Muggo</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Small Cozy Sets</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>


                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={pingky}/>
                        
                        <div className={"absolute bg-red-400 top-4 right-4 rounded-full w-10 h-10 items-center"}>
                            <h6 className={"absolute top-2 right-1 inline-block text-white text-[14px]"}>-50%</h6>
                        </div>



                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Pingky</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Living Room Set</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 5,500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>



                    <div className="relative w-[22%] h-111.5 bg-[#F4F5F7] hover:bg-gray-200 duration-300 cursor-pointer shadow-lg">
                        <Image className={"absolute top-0 left-0 w-full h-72"} imgSrc={potty}/>

                        <div className={"absolute bg-green-400 top-4 right-4 rounded-full w-10 h-10 items-center"}>
                            <h6 className={"absolute top-2 right-2 inline-block text-white text-[14px]"}>New</h6>
                        </div>


                        <div className="absolute top-77 left-6">
                            <h3 className={"font-bold text-[18px] font-sans"}>Potty</h3>
                            <h5 className={"font-light text-[14px] font-serif text-gray-400 mt-1"}>Stylish Sofa</h5>
                            <h4 className={"font-semibold text-[15px] text-mist-900 mt-5"}>Rp 4,500.000</h4>
                        </div>

                       <button className={"absolute bottom-5 left-45 font-medium border-b border-[#B88E2F] cursor-pointer text-[#B88E2F]"}>check out</button>
                        



                    </div>










                </Flex>
            </Container>
        </div>

        <div className="mt-7 text-center">
            <Link to={"/shop"}>
             <Button className={"px-11 text-[15px] font-serif"} btntext={"Show More"}/>
            </Link>
        </div>






        </>

    )
}

export default Product