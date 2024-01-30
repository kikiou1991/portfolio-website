import { useSectionInView } from '@/lib/custom-hooks/useSectionInView';
import React from 'react';

import { FaRegRegistered } from 'react-icons/fa';

const Footer = () => {
  const { ref } = useSectionInView('Footer');

  return (
    <footer ref={ref} id='Footer' className='footer border border-top-[#33353F] border-l-transparent border-r-transparent'>
      <div className='container p-12 flex justify-between text-white'>
        <span>Gabor Adorjani</span>
        <p className='flex items-center justify-center gap-2'>
          All rights reserved <FaRegRegistered />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
