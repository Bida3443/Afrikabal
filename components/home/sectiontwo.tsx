import React from 'react'
import BackgroundGlow from './background'
import Image from 'next/image'
import slash from "../../public/slash.png"
import phonne from "../../public/phonne.png"

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
          <div className='grid lg:grid-cols-3 grid-cols-2 mt-30 gap-20 justify-center'>
            <div className=''>
                <h1>sssssssssss</h1>
                <p>ddddddddd</p>
            </div>
            <div>dddddddddddddd</div>
            <div>dddddddddddddd</div>
            
          </div>
        </div>


    </section>
  )
}
