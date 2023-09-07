import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center' > 
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello there, my name is Gabor</h1>
                <p className='text-[#EEBA35] text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, mollitia dolorem. Illum reiciendis pariatur, quaerat atque perspiciatis ipsum veritatis, aliquid corporis tempore, quo animi tenetur deleniti a doloribus cupiditate fugit.
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
                    <button className='px-6 py-3 rounded-full mr-4  bg-white hover:bg-slate-200 text-black'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5  mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#FFD25F] w- [250px] h-[250px]lg:w-[450px] h-[450px] relative'>
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