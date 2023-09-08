"use client"
import React, {useState, useTransition}from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc md:list-disc ml-5'>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>React/Next.js</li>
                <li>Tailwind.css</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc md:list-disc ml-5'>
                <li>NorthCoders Bootcamp - Skills Bootcamp in Software Development</li>
                <li>CodeCademy - Full-Stack Engineer</li>
                <li>freeCodeCamp - JavaScript-Algorithms and Data Structures</li>
                <li>freeCodeCamp - Back End Development and APIs</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc md:list-disc ml-5'>
                <li>Private Projects</li>
            </ul>
        )
    }
]

const AboutSection = () => {
const [tab, setTab] =useState("skills");
const [isPending, startTransition] = useTransition();

const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id)
    })
}

  return (
    <section className='text-white'>
  <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 h-full'>
    <div className='relative w-full md:w-auto'>
      <Image src="/images/study.png" layout="responsive" width={200} height={200} alt='study-office'/>
    </div>
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
      <h2 className='text-4xl font-bold text-[#EEBA35] mb-4'>About Me</h2>
      <p className='text-base md:text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, minima obcaecati quos voluptates
        pariatur, culpa nobis nam eum ab praesentium recusandae consequatur, voluptas quasi dolores
        harum aspernatur porro sunt cum?
      </p>
      <div className='flex flex-row justify-start mt-8'>
        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
          Skills
        </TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
          Education
        </TabButton>
        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
          Experience
        </TabButton>
      </div>
      <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
  </div>
</section>

  )
}

export default AboutSection