'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc md:list-disc ml-5'>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React/Next.js</li>
        <li>Tailwind.css</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc md:list-disc ml-5'>
        <li>Io Academy - Skills Bootcamp in Software Development(ongoing)</li>
        <li>CodeCademy - Front-End Engineer</li>
        <li>freeCodeCamp - JavaScript-Algorithms and Data Structures</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className='list-disc md:list-disc ml-5'>
        <li>Private Projects</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 h-full'>
        <div className='relative w-full md:w-auto'>
          <Image src='/images/study.png' layout='responsive' width={170} height={170} alt='study-office' />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-[#EEBA35] mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
            I'm a dynamic web developer with expertise in JavaScript, HTML5, CSS3, GIT, React, and TailwindCSS. Committed to continuous growth, I'm actively pursuing full-stack engineering studies and
            have completed projects like my Trello Clone. Eager to tackle new challenges and leave a lasting mark in web development. Ready to make things happen!
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
              Experience
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
