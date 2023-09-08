import React from 'react'
import ProjectSection from './ProjectSection';
import {CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';

const ProjectsCard = ({imgUrl, title, description}) => {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group"
             style={{ background: `url(${imgUrl})`, backgroundSize:"cover"}}>

            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl'>
                <Link href="/" className='h-14 w-14 mr-2 border-2 relative rounded-full group/link border-white hover:border-[#FFD25F]'>
                    <CodeBracketIcon className='h-10 w-10 text-white group-hover/link:text-[#FFD25F] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white'></CodeBracketIcon>
                /</Link>
                <Link href="/" className='h-14 w-14 border-2 relative rounded-full group/link border-white hover:border-[#FFD25F]'>
                    <EyeIcon className='h-10 w-10 text-white group-hover/link:text-[#FFD25F] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white'></EyeIcon>
                /</Link>
            </div>
        
        </div>

        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'> 
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#FFD25F]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectsCard