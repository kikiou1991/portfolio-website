import React from 'react'

const TabButton = ({active, selectTab, children}) => {

    const buttonClasses = active ? 'text-white border-b border-white-500' : 'text-[#EEBA35]'
  return (
    <button onClick={selectTab}>
        <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </span>
    </button>
  )
}

export default TabButton