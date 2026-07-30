import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { GrTrophy } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";

const Provides = () => {
  return (
    <div className="mt-8 py-16 w-full bg-[#F9F1E7]">
        <Container>
            <Flex className={"items-center justify-around"}>

                <div className="flex gap-2 items-center">
                    <GrTrophy className={"text-5xl"} />
                    
                    <div className="mt-1">
                        <h3 className={"text-[15px] font-bold"}>High Quality</h3>
                        <h4 className={"text-[13px] font-light text-gray-600"}>crafted from top materials</h4>
                    </div>

                </div>

                <div className="flex gap-2 items-center">
                    <SiTicktick  className={"text-5xl"} />
                    
                    <div className="mt-1">
                        <h3 className={"text-[15px] font-bold"}>Warranty Protection</h3>
                        <h4 className={"text-[13px] font-light text-gray-600"}>Over 2 years</h4>
                    </div>

                </div>

                <div className="flex gap-2 items-center">
                    <FaShippingFast className={"text-5xl"} />
                    
                    <div className="mt-1">
                        <h3 className={"text-[15px] font-bold"}>Free Shipping</h3>
                        <h4 className={"text-[13px] font-light text-gray-600"}>Order over 150 $</h4>
                    </div>

                </div>

                <div className="flex gap-2 items-center">
                    <TbClock24 className={"text-5xl"} />
                    
                    <div className="mt-1">
                        <h3 className={"text-[15px] font-bold"}>24 / 7 Support</h3>
                        <h4 className={"text-[13px] font-light text-gray-600"}>Dedicated support</h4>
                    </div>

                </div>

                
            </Flex>
        </Container>
    </div>
  )
}

export default Provides