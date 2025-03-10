import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react';
const FlowInText = ({text}) => {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true})
    let numOfChars = 0
    return (
        <div className='col-span-12 text-[5.65vw] font-bold mb-[4vh] leading-[5vw] flex flex-wrap tracking-tight '
            ref={ref}
        >
            {text.split(" ").map((word, Wordindex) => {
                numOfChars++
                return (
                <span
                key={Wordindex}
                className='flex mx-[6px] md:mx-[10px] lg:mx-[20px]'
                >
                {word.split("").map((char, index ) => {
                    numOfChars += 2
                    return(
                    <motion.span
                        key={index}
                        custom={index}
                        initial={{ opacity: 0, y: 50}}
                        className='block'
                        animate={ isInView ? { opacity: 1,  y: 0 } : {} }
                        transition={{ delay:(numOfChars * 0.02) + (index * 0.02), duration: .2 }}
                    >
                        {char}
                    </motion.span>
                )})}
                </span>
            )})}
        </div>
)};

export default FlowInText