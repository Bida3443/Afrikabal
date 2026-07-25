import React from 'react'
import BackgroundGlow from './background'
import Image from 'next/image'
import slash from "../../public/slash.png"
import Invest1 from "../../public/Invest 1.png"
import Invest2  from "../../public/Invest 2.png"
import Invest3 from "../../public/Invest 3.png"
import Invest4 from "../../public/Invest 4.png"
import Invest5 from "../../public/Invest 5.png"
import Invest6 from "../../public/Invest 6.png"

export default function  sectiontwo  () {
  return (
    <section className="relative min-h-screen overflow-hidden">
                <BackgroundGlow />

                <div className='flex flex-col py-10 justify-center items-center'>
          <div className='flex flex-col text-center space-y-3 justify-center items-center'>
            <p>Our Features</p>
            <Image src={slash} alt='' width={200} height={200}/>
            <h1 className='font-semibold  text-3xl'>Feel the best experience with <br /> our features</h1>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-2 px-20 mt-30 gap-20 justify-center'>
            <div className='flex text-black flex-col text-center space-y-2  justify-center items-center'>
                <Image src={Invest1} alt='Image' width={200} height={200} className='w-10 h-10'/>
                <h1 className='text-black font-bold'>Invest</h1>
                <p className=' text-black text-[15px] w-60'>Invest your money on agriculture in Africa and get dividend after harvesting</p>
            </div>
            <div className='flex text-black flex-col text-center space-y-2  justify-center items-center'>
                <Image src={Invest1} alt='Image' width={200} height={200} className='w-10 h-10'/>
                <h1 className='text-black font-bold'>Blockchain powered</h1>
                <p className=' text-black text-[15px] w-60'>Send and receive cryptocurrency from anyone, anywhere and anytime</p>
            </div>
            <div className='flex text-black flex-col text-center space-y-2  justify-center items-center'>
                <Image src={Invest1} alt='Image' width={200} height={200} className='w-10 h-10'/>
                <h1 className='text-black font-bold'>Buy farm produce</h1>
                <p className=' text-black text-[15px] w-60'>Buy any farm produce of your choice and get them delivered to your location across Africa</p>
            </div>
            <div>dddddddddddddd</div>
            <div>dddddddddddddd</div>
            
          </div>
        </div>


    </section>
  )
}
