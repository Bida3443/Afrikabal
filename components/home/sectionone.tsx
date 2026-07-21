import React from 'react'
import Image from 'next/image'
import slash from "../../public/slash.png"

export default  function sectionone  () {
  return (
    <section className='relative min-h-screen overflow-hidden bg-white'>
        <div className='flex flex-col py-10 justify-center items-center'>
          <div className='flex flex-col text-center space-y-3 justify-center items-center'>
            <p>Why Us</p>
            <Image src={slash} alt='' width={200} height={200}/>
            <h1 className='font-semibold  text-3xl'>Solving African Agriculture & <br /> Finance Challenges</h1>
          </div>
          <div className='flex justify-between'>
            <div>bbbbbb</div>
            <div>ffffff</div>
          </div>
        </div>
    </section>
  )
}
