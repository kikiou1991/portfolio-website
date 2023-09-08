import React from 'react'
import NavLink from './Navlink'

const MenuOverLay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center font-bold'>{links.map((link, index )=>(
        <li className='mb-3' key={index}>
            <NavLink href={link.path} title={link.title} />
        </li>
    ))}</ul>
    )
}

            

export default MenuOverLay;