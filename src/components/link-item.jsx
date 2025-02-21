import { motion } from 'motion/react'
import React, { useState } from 'react'

const LinkItem = ({ id, label, classList }) => {
    const [hovered, togglehovered] = useState(false)

    const setHovered = (value) => {
        togglehovered(value)
    }
    const variants = {
      switch: (index) => ({
        y: -28,
        transition: { delay: index * 0.05 },
      }),
      revert: (index) => ({
        y: 0,
        transition: { delay: index * 0.05 },
      }),
    };
  
    return (
      <motion.div
        key={id}
        id={id}
        role="button"
        tabIndex={0}
        className={classList}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {label.split("").map((char, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            custom={index}
            variants={variants}
            animate={hovered ? "switch" : "revert"}
          >
            <div>{char}</div>
            <div className="text-accent-2">{char}</div>
          </motion.div>
        ))}
      </motion.div>
)};

export default LinkItem