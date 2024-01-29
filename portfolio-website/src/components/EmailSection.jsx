'use client';
import { GitHub } from '@/app/svg/github';
import { LinkedIn } from '@/app/svg/linkedin';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { sendEmail } from '@/app/api/send/route';
import { FaPaperPlane } from 'react-icons/fa';
const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.RESEND_API_KEY, 'test');

    const JSONdata = JSON.stringify(formData);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      if (response.ok) {
        console.log('Message sent.');
        setEmailSubmitted(true);
      } else {
        console.error('Failed to send email', resData);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className='flex items-center text-center justify-center flex-col my-12 md:my-12 py-12 gap-2 md:w-full w-[min(100%,25rem)]'
      id='contact'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-xl font-bold text-white my-2'>Let`s connect</h2>
        <p className='text-base text-white font-semibold md:text-lg mb-4 max-w-md'>
          {' '}
          I am currently open to freelance work! My inbox is always open for request, weather you have a question or you would like to say hi. I will try my best to get back to you in a timely manner.
        </p>
        <div className='socials flex flex-row gap-2 '>
          <Link href='https://github.com/kikiou1991' target='_blank' className='transfrom transition-transform hover:scale-125'>
            <GitHub />
          </Link>
          <Link href='https://www.linkedin.com/in/gabor-adorjani-599666290/' target='_blank' className='transfrom transition-transform hover:scale-125'>
            <LinkedIn />
          </Link>
        </div>
      </div>
      <div className=' items-center justify-center'>
        {emailSubmitted ? (
          <p className='text-green-500 text-sm mt-2'>Email sent successfully!</p>
        ) : (
          <form
            style={{ minWidth: '500px' }}
            className='flex flex-col gap-2 mt-10 justify-center items-center'
            onSubmit={async (formData) => {
              await sendEmail(formData);
            }}>
            <div className='mb-2 w-full'>
              <label htmlFor='email' typeof='email' className='text-white block  text-sm font-medium mb-2'>
                Your e-mail
              </label>
              <input
                name='email'
                type='email'
                id='email'
                required
                placeholder='example@gmail.com'
                className='bg-[#1819E] w-full border border-[#33353F] rounded-lg  p-3'
                onChange={''}
                value={formData.email}
              />
            </div>
            <div className='mb-2 w-full'>
              <label htmlFor='subject' typeof='email' className='text-white w-full block text-sm font-medium mb-2'>
                Subject
              </label>
              <input name='subject' type='text' id='subject' required className='bg-[#1819E] border border-[#33353F] w-full rounded-lg p-2.5' onChange={''} value={formData.subject} />
            </div>
            <div className='mb-6 w-full'>
              <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                onChange={''}
                placeholder='Let`s talk about...'
                maxLength={500}
                className='bg-[#1819E] border border-[#33353F] w-full rounded-lg h-52 p-2.5'
                value={formData.message}></textarea>
            </div>

            <button type='submit' className='bg-white group flex items-center justify-center gap-2 text-black font-medium py-2.5 px-5 rounded-lg transition-all' style={{ maxWidth: '120px' }}>
              Submit{''}
              <FaPaperPlane
                className='text-xs
                  opacity-70 transition-all
                  group-hover:translate-x-1
                  group-hover: -translate-y-1
                  items-center justify-center'
              />
              {''}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default EmailSection;
