"use client"
import React from 'react'
import ProjectsCard from './ProjectsCard'
import { useState } from 'react'
import ProjectTag from './ProjectTag'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


// Data array for the different projects
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
        title: "Harry Potter Community Page",
        description: "Harry Potter Community forum",
        image: "/images/forum.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kikiou1991/hp_forum-project"
    },
    {
        id: 4,
        title: "Food App",
        description: "Recipe Fridge App",
        image: "/images/food.png",
        tag: ["All", "Mobile"],
        gitUrl: "/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")

    // Function to handle changing the selected project tag
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    // Filter the projects based on the selected tag
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section id="projects">  
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='flex flex-row justify-center text-center text-white  gap-2 mb-2 py-6'>
                {/* Project filter buttons */}
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <div className='gap-2 grid grid-cols-1 sm:grid-cols-3 z-0'>
                {filteredProjects.map((project, index) => (
                    // Render project cards
                    <ProjectsCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}                        
                        gitUrl={project.gitUrl}
                    />
                ))}
            </div>
            {/* <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {filteredProjects.map((project, index) => (
                <TrialCard
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}                        
                        gitUrl={project.gitUrl}
                
                />))}
            </div> */}
           
  
        </section>
    )
}

export default ProjectSection
