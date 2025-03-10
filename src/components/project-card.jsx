import React , {useRef} from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { motion, useInView  } from 'framer-motion';


const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const rotatevariant = {
        revert: { rotate: 0 },
        roll: { rotate: 360 },
        transition: { duration: 2, repeat: Infinity, repeatType: "loop" }
    }

    const relatedIcons = (icons) => {
        switch (icons) {
            case "HTMLCssJsBstrapFlask":
                return  <>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <FaHtml5 className='md:h-[36px] md:w-[36px]' />     
                            </motion.span>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <FaCss3Alt className='md:h-[36px] md:w-[36px]' /> 
                            </motion.span>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <FaBootstrap className='md:h-[36px] md:w-[36px]' />
                            </motion.span>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <FaPython className='md:h-[36px] md:w-[36px]' />
                            </motion.span>
                        </>
            case "NodeExpMong":
                return  <>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <FaNodeJs className='md:h-[36px] md:w-[36px]' />     
                            </motion.span>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <DiMongodb className='md:h-[36px] md:w-[36px]' />
                            </motion.span>
                        </>
            case "React":
                return  <>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <FaReact className='md:h-[36px] md:w-[36px]' /> 
                            </motion.span>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <RiTailwindCssFill className='md:h-[36px] md:w-[36px]' /> 
                            </motion.span>
                            <motion.span variants={rotatevariant} whileHover="roll" onMouseLeave="revert" transition="transition" className='w-fit h-fit'>
                                <SiFramer className='md:h-[36px] md:w-[36px]' />
                            </motion.span>
                        </>
            
            default:
                break;
        }

    }

  return (
    <motion.div className='grid grid-cols-3 md:grid-cols-2 gap-[10px] col-span-1 z-10 bg-primary border border-accent-2 rounded-md md:col-span-10 lg:col-span-8  text-left px-4 py-2 mb-[85px]  max-h-[450px]'
        ref={ref}
        initial={ (index % 2) == 0 ? { opacity: 0, x: -100 } : { opacity: 0, x:  100 }}
        animate={ isInView ? { opacity: 1 , x: 0 } : {}}
        transition={{ duration: .6}}
    >
        <h1 className='col-span-2 md:col-span-1 text-[18px] md:text-[28px] lg:text-[40px] font-medium font-jetbrains'>{project.title}</h1>
        <div className='col-span-1 flex justify-end'>
            <a href={project.links.git} target='blank' rel="noopener noreferrer" className=''><FaGithub className='text-accent-2 md:h-[30px] md:mt-2 md:w-[30px] w-[20px] h-[20px]' /></a>
        </div>
        <div className='grid grid-cols-1 col-span-3 gap-[10px] md:col-span-1  text-[15px] md:text-[2.2vh] lg:text-[1.5vw] font-mono'>
            <h2 className='col-span-1'>{project.description}</h2>
            <div className='col-span-1 flex gap-2 text-accent-2'>{relatedIcons(project.icons)}</div>
            <h5 className='col-span-1'>{project.year}</h5>
        </div>
        <div className='col-span-3 md:col-span-1 h-fit'>
            <img src={project.img} className='w-[80vw] h-[28vh] md:h-[300px] brightness-90' alt={`${project.title} image`} />
        </div>
    </motion.div>
  )
}

export default ProjectCard