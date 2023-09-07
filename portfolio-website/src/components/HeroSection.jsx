"use client"
import React from 'react'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-10'>
            <div className='col-span-7 place-self-center text-center sm:text-left' > 
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hello there, I am
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' Gabor',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a web-dev',
                        2000,
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />

                </h1>
                <p className='text-[#EEBA35] text-base sm:text-lg mb-6 lg:text-xl'>
                    I am also a huge Harry Potter fan. That gave me the idea for the theme of this page, and also some of my favourite projects are centered around this as well. Thus mixing two of my passions.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-trasnparent hover:bg-slate-200 text-white border hover:text-black mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#FFD25F] w- [250px] h-[250px]lg:w-[450px] h-[450px] relative place-self-center '>
                <Image 
                    src="/images/wizard.png"
                    alt="Gabor the Wizard"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>



    </section>
  )
}

export default HeroSection