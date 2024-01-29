'use client';
import React from 'react';
import NavLink from './Navlink';
import { motion } from 'framer-motion';
// import { fadeIn } from '../animations';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className=''>
      <div className='grid grid-cols-1 sm:grid-cols-12 mt-10 gap-10'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <motion.h1
            // variant={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'
            style={{ minHeight: '120px' }}>
            {'Hello there,  '}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am Gabor',
                2000,
                'and I am a web-dev',
                2000,
              ]}
              wrapper='span'
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </motion.h1>
          <p className='text-[#EEBA35] text-base font-semibold sm:text-lg mb-6 lg:text-xl py-5'>
            I am also a huge Harry Potter fan. That gave me the idea for the theme of this page, and also some of my favourite projects are centered around this as well. Thus mixing two of my
            passions. I am passoinate and hardworking and I am always looking for new challenges.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
              <a href='#contact'>Hire me</a>
            </button>

            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-trasnparent hover:bg-slate-200 text-white border hover:text-black mt-3'>
              <a href='/CV.pdf' download>
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 py-2 lg:mt-0 place-self-center text-center sm:text-left justify-center'>
          <div className='rounded-[100%] bg-[#FFD25F] w-[265px] h-[265px] lg:w-[350px] lg:h-[350px] relative items-center'>
            <Image src='/images/wizard.png' alt='Gabor the Wizard' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
