import React from 'react';
import Link from 'next/link';
import NavLink from './Navlink';

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Portfolio",
        path: "#portfolio"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex items-center justify-between mx-2 p-4 md:mx-auto px-4'>
        <div className='flex items-center'>
          <img
            src='/images/logo.png'
            alt="Gabor the Wizard"
            width={50}
            height={50}
          />
        </div>
        <div className='ml-auto'>
          <div className='md:hidden'>
            <button
              className='block text-white hover:text-white focus:text-white'
              // Add functionality to open a mobile menu here
            >
              Menu
            </button>
          </div>
          <div className='hidden md:flex items-center'>
            <ul className='flex space-x-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
              {
                navLinks.map((link,index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
        
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
