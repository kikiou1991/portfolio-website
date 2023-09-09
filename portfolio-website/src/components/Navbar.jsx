"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './Navlink';
import { Bars3Icon, XmarkIcon } from '@heroicons/react/24/solid';
import MenuOverLay from './MenuOverLay';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Portfolio',
    path: '#portfolio',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0  bg-[#121212] bg-opacity-100 z-40'>
      <div className='flex items-center justify-between mx-2 p-4 md:mx-auto px-4'>
        <div className='flex items-center'>
          <img
            src='/images/logo.png'
            alt='Gabor the Wizard'
            width={50}
            height={50}
          />
        </div>
        <div className='ml-auto'>
          <div className='menu hidden md:flex items-center'>
            <ul className='flex space-x-4 md:p-0 md:flex-row md:space-x-10 mt-0'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mobile-menu block md:hidden'>
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className=' flex items-center
                                        px-3 border rounded
                                        border-slate-200
                                        text-slate-200
                                        hover:text-white
                                        hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className=' flex items-center
                                        px-3 border rounded
                                        border-slate-200
                                        text-slate-200
                                        hover:text-white
                                        hover:border-white'
            >
              <XmarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
      </div>
      {navBarOpen ? <MenuOverLay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
