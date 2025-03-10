import React from 'react'
import FlowInText from './flow-in-text'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
const AboutPage = () => {
  let mainText = "I BUILD BEAUTIFUL WEBSITES, SCALABLE APPLICATIONS, AND LASTING TECH SOLUTIONS."
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <section className='max-w-screen w-screen pt-[4vw] lg:pt-[10vw] md:pt-[1vh] h-fit font-mono grid grid-cols-12 gap-[15px] px-[8vw]'>
      <h1 className='col-span-12 text-[17px] md:text-[28px] lg:text-[40px] text-accent-2 text-center mb-8 lg:mb-18 font-montserrat font-bold'>ABOUT ME</h1>
      <FlowInText text={mainText}/>
      <div className='col-span-12 md:col-span-8 text-[18px] md:text-[24px] lg:text-[30px]'>
        <motion.div className=''
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={ isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .25}}
        >
          I specialize in building modern, scalable web applications and engaging digital experiences that bring ideas to life. My passion lies in using technology to empower businesses, brands, and projects, creating solutions that are not only functional but also impactful.  
        </motion.div>
        <motion.div className='my-5'
          initial={{ opacity: 0, y: 100 }}
          animate={ isInView ? { opacity: 1, y: 0} : {}}
          transition={{ duration: .25, delay: .2 }}
        >
          Beyond my work as a full-stack developer, I have a deep appreciation for art, ancient philosophy, and gaming, which often inspire my creative approach to problem-solving. When I’m not coding, you’ll likely find me leveling up my COD: Warzone weapons or analyzing hip-hop lyricism.
        </motion.div>
        <motion.div className=''
          initial={{ opacity: 0, y: 100 }}
          animate={ isInView ? { opacity: 1, y: 0} : {}}
          transition={{ duration: .25, delay: .4 }}
        >
          I'm always working on exciting projects that I can't wait to share. But I'm always open to new challenges, collaborations, and opportunities to create something amazing. Lets build the World we want to see together!
        </motion.div>
      </div>
      <div className='col-span-12 md:col-span-4 text-[18px] md:text-[24 classname="font-light"px] lg:text-[30px] '>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={ isInView ? { opacity: 1, x: 0} : {}}
          transition={{ duration: .25, delay: .2 }}
        >
          <h1 className='font-bold text-accent-2'>Frontend Tools</h1>
          <div classname="font-light">React, Next.js, Vitetest, HTML5, CSS/SCSS/SASS, TailwindCSS, Framer, Redux Toolkit, Redux</div>
        </motion.div>
        <motion.div className='mt-5'
          initial={{ opacity: 0, x: 100 }}
          animate={ isInView ? { opacity: 1, x: 0} : {}}
          transition={{ duration: .25, delay: .2 }}
        >
          <h1 className='font-bold text-accent-2'>Backend Tools</h1>
          <div className="font-l">Node.js, Express.js, Python, FastAPi, MongoDB, Mongoose, Postgres, Prisma</div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPage