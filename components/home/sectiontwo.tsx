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
            <p>Why Us</p>
            <Image src={slash} alt='' width={200} height={200}/>
            <h1 className='font-semibold  text-3xl'>Solving African Agriculture & <br /> Finance Challenges</h1>
          </div>
          <div className='flex mt-30 gap-20 justify-center'>
            <div className='space-y-5'>
              <h1 className='text-4xl font-medium text-[#A5CD39]'>Finance</h1>
              <h1 className='text-4xl font-medium text-[#C6C6C6]'>Agriculture</h1>
              <div>
                <p className='font-semibold text-2xl pb-2'>Send, receive and request money <br /> and crypto on Afrikabal app</p>
              <p className='lg:max-w-155 max-w-80.5'>Easily send, receive, and request money and cryptocurrency with the Afrikabal app. Seamlessly transfer funds and manage your finances with just a few taps. Join the digital revolution and experience secure, fast, and convenient transactions on Afrikabal.</p>
              </div>

        <a
            href="/products"
            className="group flex items-center gap-2 hover:text-black transition-all duration-300 cursor-pointer text-[#A5CD39]"
          >
            <p className="group-hover:underline">Download Afrikabal</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-3 h-3 fill-current transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </a>

            </div>
            <div><Image src={phonne} alt='' width={500} height={700}/></div>
          </div>
        </div>


    </section>
  )
}
