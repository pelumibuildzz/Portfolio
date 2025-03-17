import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'


const ContactPage = () => {
  return (
    <section className='max-w-screen w-screen h-fit  grid grid-cols-1 gap-[15px] px-[8vw]'>
        <div className='col-span-1 lg:text-[15vw] md:text-[15vw] text-[13vw] text-center text-nowrap font-extrabold font-inter'>LET'S TALK</div>
        <div className='col-span-1 grid grid-cols-2 gap-[10px] lg:'>
            <div className='col-span-1 text-[12px] md:text-[16.5px] lg:text-[22px] font-medium font-montserrat'>
                <div className=''>HAVE AN IDEA? A PROJECT? A MEME TO SHARE?</div>
                <a href="mailto:ppfaddy@gmail.com" className='underline'>SEND ME AN EMAIL</a> OR <a href="https://cal.com/pelumi-fadahunsi-nb55yg/15min" target='blank' rel="noopener noreferrer" className='underline'>BOOK A CALL</a>
            </div>
            <div className='col-span-1 grid grid-cols-4 gap-[10px]'>
                <div className='col-span-2 md:col-span-1'>
                    <a href="" className='lg:w-[30px] h-fit w-[25px]'><FaGithub className='lg:h-[30px] lg:w-[30px] w-[25px] h-[25px]'/></a>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <a href="" className='lg:w-[30px] h-fit w-[25px]'><FaLinkedin className='lg:h-[30px] lg:w-[30px] w-[25px] h-[25px]'/></a>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <a href="" className='lg:w-[30px] h-fit w-[25px]'><FaInstagram className='lg:h-[30px] lg:w-[30px] w-[25px] h-[25px]'/></a>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <a href="" className='lg:w-[30px] h-fit w-[25px]'><FaXTwitter className='lg:h-[30px] lg:w-[30px] w-[25px] h-[25px]'/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPage