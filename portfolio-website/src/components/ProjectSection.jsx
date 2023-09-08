import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectsData = [
    {
        id: 1,
        title: "Memory Game",
        description: "Harry Potter themed memory game",
        image: "/images/memory.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kikiou1991/HP_memoryGame"
    },
    {
        id: 2,
        title: "Study Timer",
        description: "Chrome Extension to track study and rest times",
        image: "/images/timer.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kikiou1991/chrome_study_extension"
    },
    
    {
        id: 3,
        title: "Harry Potter Communnity Page",
        description: "Harry Potter Comunity forum",
        image: "/images/forum.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kikiou1991/hp_forum-project"
    },
    
]

const ProjectSection = () => {


  return (
    <>  
        <h2>
        <div>{projectsData.map((project) => (
            <ProjectsCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        tags={project.tag}
                        gitUrl={project.gitUrl}
                        />
        ))}</div>
        </h2>
    </>
  )
}

export default ProjectSection