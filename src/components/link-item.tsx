"use client";

import { motion } from "motion/react";
import React, { useState } from "react";

interface LinkItemProps {
  id: string;
  label: string;
  classList: string;
}

const LinkItem = ({ id, label, classList }: LinkItemProps) => {
  const [hovered, togglehovered] = useState(false);

  const setHovered = (value: boolean) => {
    togglehovered(value);
  };

  const variants = {
    switch: (index: number) => ({
      y: -28,
      transition: { delay: index * 0.05 },
    }),
    revert: (index: number) => ({
      y: 0,
      transition: { delay: index * 0.05 },
    }),
  };

  const scrollToSection = () => {
    if (id !== "Resume") {
      document
        .getElementById(`${id}Section`)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      const newTab = window.open(
        "https://drive.google.com/file/d/1EXPLfNoI0qET3NECA6Yec1_BqaJ424F1/view?usp=drive_link",
        "_blank"
      );
      if (newTab) newTab.opener = null;
    }
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
      onClick={scrollToSection}
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
  );
};

export default LinkItem;
