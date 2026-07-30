import React from 'react'
import Image from '../common/Image'
import Container from '../common/Container'
import Flex from '../common/Flex'
import dinning from '/src/assets/dinning.png'
import living from '/src/assets/living.png'
import bedroom from '/src/assets/bedroom.png'

const Range = () => {
  return (
    <>
    <div className="mt-6">
      <h3 className={"font-bold font-serif text-[25px] text-center"}>Browse The Range</h3>
      <h4 className={"text-gray-600 font-serif text-center text-xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    </div>

    <div className="mt-10">
     <Container>
      <Flex className={"items-center gap-15"}>

        <div className="ml-10">
          <Image imgSrc={dinning} className={""}/>
          <h3 className={"text-center font-medium text-[16px] mt-4"}>Dinning</h3>

        </div>

        <div className="">
        <Image imgSrc={living} className={""}/>
        <h3 className={"text-center font-medium text-[16px] mt-4"}>Living</h3>


        </div>
        
        <div className="">
        <Image imgSrc={bedroom} className={""}/>
        <h3 className={"text-center font-medium text-[16px] mt-4"}>Bedroom</h3>


        </div>
        

      </Flex>
      </Container>
    </div>
    </>
  )
}

export default Range