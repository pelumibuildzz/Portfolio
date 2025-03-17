import React from 'react'
import { projectList } from './data'
import ProjectCard from './project-card'
import InvertedProjectCard from './invert-project-card'

const ProjectsPage = () => {
  return (
    <section className=' max-w-screen w-screen mt-[4vw] lg:mt-[10vw] md:mt-[1vh] h-fit'>
        <h1 className='text-[17px] md:text-[28px] lg:text-[40px] text-accent-2 text-center mb-8 lg:mb-18 font-montserrat font-bold'>PROJECTS</h1>
        <div className='text-center h-fit'>
            <i className='absolute bg-accent-2 w-[1px] h-[220vh] md:h-[150vh] lg:h-[220vh] z-0' />
            <div className='w-full h-fit grid grid-cols-1 md:grid-cols-12 gap-[85px] px-[8vw]'>
                {projectList.map((project, index)=> {
                    if (index % 2 == 0){
                        return (
                            <>
                                <ProjectCard project={project} index={index} />
                                <div className='col-span-2 lg:col-span-4 hidden md:block' />
                                <div className='col-span-2 lg:col-span-4 hidden md:block' />
                            </>
                        )
                    } else{
                        return <InvertedProjectCard project={project} index={index}/>
                    }
                })}
            </div>
        </div>
    </section>
  )
}

export default ProjectsPage