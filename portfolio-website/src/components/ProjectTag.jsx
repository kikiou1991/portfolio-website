import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "text-white border-[#FFD25F] " : "text-white border-slate-600";
  return (
    <button className={`rounded-full border-2 px-4 py-3 text-xl ${buttonStyles}`}
            onClick={() => onClick(name)}        
    >{name}</button>
  )
}

export default ProjectTag