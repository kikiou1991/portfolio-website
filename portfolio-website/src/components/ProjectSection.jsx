'use client';
import React, { use } from 'react';
import ProjectsCard from './ProjectsCard';
import { useState, useRef } from 'react';
import ProjectTag from './ProjectTag';
import { useScroll, motion, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/custom-hooks/useSectionInView';

const ProjectSection = () => {
  const [tag, setTag] = useState('All');

  const { ref } = useSectionInView('Portfolio');
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.2 1', '1.22 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Function to handle changing the selected project tag
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter the projects based on the selected tag
  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <motion.section
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      id='Portfolio'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
      <div className='flex flex-row justify-center text-center text-white  gap-2 mb-2 py-6'>
        {/* Project filter buttons */}
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
        <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
      </div>
      <div className='flex flex-row flex-wrap gap-6 justify-center items-center px-2'>
        {filteredProjects.map((project, index) => (
          // Render project cards
          <ProjectsCard siteUrl={project.siteUrl} key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} imgAlt={project.imgAlt} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
