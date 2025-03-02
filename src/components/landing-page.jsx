import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {

  return (
    <section className='max-w-screen w-screen pt-[10vw] md:pt-[3vh] h-screen'>
      {/* PELUMI Section */}
      <motion.div
        className='text-[7.6vh] md:text-[10vh] w-screen bg-accent-2 text-primary lg:hidden font-montserrat overflow-hidden'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ ease: "linear", duration: .9 }}
      >
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ 
            x: ["-100%","5%", "55%", "190%"] , 
            transition: { duration:4, times: [0, 0.125, 0.875, 1], repeat: Infinity, repeatType: "loop", delay: 1.4 }
          }}
          className='block w-fit whitespace-nowrap'
        >
          PELUMI
        </motion.span>
      </motion.div>

      {/* Desktop PELUMI */}
      <motion.div className='hidden lg:block text-[8vw] w-screen bg-accent-2 text-primary font-montserrat overflow-hidden'
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ ease: "linear", duration: .9 }}
      >
        <motion.span
        initial={{ x: "-110%" }}
        animate={{ 
          x: ["-35vw","10vw", "50vw", "100vw"] , 
          transition: { duration:5, times: [0, 0.125, 0.875, 1], repeat: Infinity, repeatType: "loop", delay: 1.4 }
        }}
        className='block w-fit whitespace-nowrap leading-[8vw]'
        >
            PELUMI
        </motion.span>
      </motion.div>

      {/* Middle Content */}
      <div className='font-montserrat my-10 px-[5%] grid grid-cols-12 gap-[1px] text-[17px] md:text-[28px] lg:text-[40px]'>
        <div className='col-start-4 col-end-13 md:col-start-5 overflow-hidden max-h-[22px] md:max-h-[34px] lg:max-h-[46px]'>
            <motion.div initial={{ y: 100 }} animate={{ y:0 }} transition={{ delay:.4, duration: .9 }}>
                <span className=' text-accent-2'>Code </span>
                is my
                <span className='text-accent-1'> Canvas, </span>
            </motion.div>
        </div>
        <div className='col-start-4 col-end-13 md:col-start-5 overflow-hidden max-h-[30px] md:max-h-[40px] lg:max-h-[53px]'>
            <motion.div initial={{ y: 100 }} animate={{ y:0 }} transition={{ delay:1, duration: .9 }}>
                -- the 
                <span className=' text-accent-2'> Internet </span>
                my
                <span className='text-accent-1'> gallery </span>
            </motion.div>
        </div>
      </div>

      {/* FADAHUNSI Section */}
      <motion.div
        className='text-[7.2vh] md:text-[10vh] w-screen bg-accent-2 text-primary lg:hidden font-montserrat overflow-hidden'
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ ease: "linear", duration: .9 }}
      >
        <motion.span
          initial={{ x: "120%" }}
          animate={{ 
            x: ["120%","55%", "5%", "-100%"] , 
            transition: { duration:4, times: [0, 0.125, 0.875, 1], repeat: Infinity, repeatType: "loop", delay: 1.4 }
          }}
          className='block w-fit whitespace-nowrap'
        >
          FADAHUNSI
        </motion.span>
      </motion.div>

      {/* Desktop FADAHUNSI */}
      <motion.div className='hidden lg:block text-[8vw] w-screen bg-accent-2 text-primary font-montserrat overflow-hidden'
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ ease: "linear", duration: .9 }}
      >
        <motion.span
        initial={{ x: "120%" }}
        animate={{ 
          x: ["100vw","50vw", "10vw", "-35vw"] , 
          transition: { duration:5, times: [0, 0.125, 0.875, 1], repeat: Infinity, repeatType: "loop", delay: 1.4 }
        }}
        className='block w-fit whitespace-nowrap leading-[8vw]'
        >
            FADAHUNSI
        </motion.span>
      </motion.div>

      {/* Additional Content */}
      <motion.div className='text-center m-[1.6vw] px-[2%] text-[15px] md:text-[2.2vh] lg:text-[1.5vw] font-inter lg:pt-3 pt-5'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: .5}}
      >
        <span>I’m a <span className='font-medium text-accent-1'>Full-stack developer</span> passionate about bringing ideas to life,</span>
        <span className='md:block'> and turning problems into long-lasting solutions</span>
      </motion.div>

      <div className='px-[5%] py-10 grid grid-cols-12 gap-[15px] lg:py-5 text-[13px] lg:gap-[45px] md:text-[1.9vh] font-inter lg:mt-1  mt-10'>
        <motion.button initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .5 }} className='col-start-1 col-end-7 border-2 border-accent-2 py-2 rounded-lg md:col-start-4 lg:col-start-5'>Let's Talk</motion.button>
        <motion.button initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}  transition={{ delay: .5 }} className='col-start-7 col-end-13 py-2 rounded-lg bg-accent-2 md:col-end-10 lg:col-end-9'>My Work</motion.button>
      </div>
    </section>
  );
};

export default LandingPage;