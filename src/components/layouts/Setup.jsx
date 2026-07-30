import React from 'react'
import Image from '../common/Image'
import leftcorner from '/src/assets/leftcorner.png'
import leftmiddle from '/src/assets/leftmiddle.png'
import middle from '/src/assets/middle.png'
import rightmiddle from '/src/assets/rightmiddle.png'
import rightcorner from '/src/assets/rightcorner.png'
import leftcornerbottom from '/src/assets/leftcornerbottom.png'
import leftbottom from '/src/assets/leftbottom.png'
import rightbottom from '/src/assets/rightbottom.png'
import rightbottomcorner from '/src/assets/rightbottomcorner.png'







const Setup = () => {
  return (
     <>

    <div className="mt-10">

      <h4 className={"text-gray-600 font-sans font-medium text-center text-[14px]"}>Share your setup with</h4>
      <h3 className={"font-bold font-serif text-[25px] text-center"}>#FuniroFurniture</h3>
      
    </div>

    <div className="relative w-full h-183 mt-5">

        <div className="absolute top-0 left-0">
            <Image className={""} imgSrc={leftcorner}/>
        </div>

        <div className="absolute top-18 left-30">
            <Image className={""} imgSrc={leftmiddle}/>
        </div>

        <div className="absolute top-38 left-151">
            <Image className={""} imgSrc={middle}/>
        </div>
    
        <div className="absolute top-18 right-75">
            <Image className={""} imgSrc={rightmiddle}/>
        </div>

        <div className="absolute top-0 right-0">
            <Image className={""} imgSrc={rightcorner}/>
        </div>


        <div className="absolute bottom-0 left-5">
            <Image className={""} imgSrc={leftcornerbottom}/>
        </div>

        <div className="absolute bottom-5 left-57">
            <Image className={""} imgSrc={leftbottom}/>
        </div>
    
        <div className="absolute bottom-10 right-22">
            <Image className={""} imgSrc={rightbottom}/>
        </div>

        <div className="absolute bottom-8 right-80">
            <Image className={""} imgSrc={rightbottomcorner}/>
        </div>

 

    </div>


   </>
  )
}

export default Setup