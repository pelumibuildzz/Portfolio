import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import LinkItem from './link-item';

const Navbar = ({ onNavClick }) => {
  const navLinks = [
    { id: 'Home', label: 'Home'},
    { id: 'Projects', label: 'Projects'},
    { id: 'About', label: 'About'},
    { id: 'Contact', label: 'Contact'},
    { id: 'Resume', label: 'Resume'}
  ];

  let [isMobileNavOpen, setIsMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNavOpen);
  }

  return (
    <nav className='px-[5%] w-full flex flex-col items-center font-jetbrains'>
      {/* Mobile Nav */}
      <div className='lg:hidden grid grid-cols-12 gap-[1px] w-full pt-4'>
        <div className='col-start-12 z-10 col-end-13' onClick={toggleMobileNav}>
          <FaBars className='w-[35px] md:w-[40px] md:h-[35px] text-accent-2 h-[25px]'/>
        </div>
        <AnimatePresence>
        {isMobileNavOpen? 
        <div className='absolute z-0 right-0 mt-4 md:mt-10 text-[14px] md:text-[20px] pe-12 md:pe-20'>
          {navLinks.map(({id, label }, index) => (
            <motion.div 
            key={id} 
            id={id} 
            role="button" 
            className="my-5 cursor-pointer" 
            onClick={() => onNavClick(id)} 
            tabIndex={0}
            initial={{ x: 200 }}
            animate={{ x: 0 , transition:{ duration: 0.2, delay: index * 0.1}}}
            exit={{x:200, transition:{ duration: 0.2, delay: (4 - index) * 0.1}}}
            >
            {label}
          </motion.div>
          ))}
        </div>
          : null}
        </AnimatePresence>
      </div>

      {/* Desktop Nav */}
      <div className='hidden lg:block text-[18px]'>
        <div className='grid grid-cols-12 gap-[1px] w-full pt-3'>
          <div className='col-start-3 col-end-11 grid grid-cols-5 gap-[15px]'>
          {navLinks.map(({ id, label }) => (
            <LinkItem  
            id={id} 
            classList="flex flex-row overflow-hidden h-[28px] w-full col-span-1 justify-center cursor-pointer" 
            label={label}
            />

          ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;