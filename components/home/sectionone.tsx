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
          <div className='flex mt-30 gap-50 justify-center'>
            <div>
              <h1 className='text-3xl font-medium'>Finance</h1>
              <h1 className='text-3xl font-medium' >Agriculture</h1>
              <p>Send, receive and request money <br /> and crypto on Afrikabal app</p>
              <p className='lg:max-w-160 max-w-80.5'>Easily send, receive, and request money and cryptocurrency with the Afrikabal app. Seamlessly transfer funds and manage your finances with just a few taps. Join the digital revolution and experience secure, fast, and convenient transactions on Afrikabal.</p>
            </div>
            <div>ffffff</div>
          </div>
        </div>
    </section>
  )
}
