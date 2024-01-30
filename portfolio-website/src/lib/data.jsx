import React from 'react';

export const projectsData = [
  {
    id: 1,
    title: 'Memory Game',
    description: 'Harry Potter themed memory game',
    image: '/images/memory.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kikiou1991/HP_memoryGame',
    imgAlt: 'Memory Game',
    siteUrl: '/',
  },
  {
    id: 2,
    title: 'Study Timer',
    description: 'Chrome Extension to track study and rest times',
    image: '/images/timer.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kikiou1991/chrome_study_extension',
    imgAlt: 'Study Timer',
    siteUrl: '/',
  },

  {
    id: 4,
    title: 'Wizard Boards',
    description: 'Trello clone with a Harry Potter theme',
    image: '/images/food.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kikiou1991/WizardBoards',
    imgAlt: 'Wizard Boards',
    siteUrl: 'https://gadorjani.co.uk/wizardboards/auth/sign-in',
  },
];

export const TAB_DATA = [
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
export const navLinks = [
  {
    title: 'Home',
    path: '#Home',
  },

  {
    title: 'About',
    path: '#About',
  },
  {
    title: 'Portfolio',
    path: '#Portfolio',
  },
  {
    title: 'Contact',
    path: '#Contact',
  },
];
e;
