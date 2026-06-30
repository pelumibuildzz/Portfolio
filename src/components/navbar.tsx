"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import LinkItem from "./link-item";

interface NavLink {
  id: string;
  label: string;
}

const Navbar = () => {
  const navLinks: NavLink[] = [
    { id: "Home", label: "Home" },
    { id: "Projects", label: "Projects" },
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" },
    { id: "Resume", label: "Resume" },
  ];

  const [isMobileNavOpen, setIsMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNavOpen);
  };

  const onNavClick = (id: string) => {
    if (id !== "Resume") {
      document
        .getElementById(`${id}Section`)
        ?.scrollIntoView({ behavior: "smooth" });
      toggleMobileNav();
    } else {
      const newTab = window.open(
        "https://drive.google.com/file/d/1EXPLfNoI0qET3NECA6Yec1_BqaJ424F1/view?usp=drive_link",
        "_blank"
      );
      if (newTab) newTab.opener = null;
    }
  };

  return (
    <nav className="lg:px-[5%] w-full flex flex-col z-30 items-center static font-jetbrains">
      {/* Mobile Nav */}
      <div className="lg:hidden grid grid-cols-12 gap-[1px] w-full pt-4 fixed px-4">
        <div className="col-start-12 col-end-13" onClick={toggleMobileNav}>
          <FaBars className="w-[35px] md:w-[40px] md:h-[35px] text-text-color h-[25px]" />
        </div>
        <AnimatePresence>
          {isMobileNavOpen ? (
            <div className="absolute right-0 mt-8 md:mt-10 text-[14px] md:text-[20px] pe-12 md:pe-20">
              {navLinks.map(({ id, label }, index) => (
                <motion.a
                  key={id}
                  id={id}
                  role="button"
                  className={
                    index === 0 ? "cursor-pointer block" : "my-5 cursor-pointer block"
                  }
                  onClick={() => onNavClick(id)}
                  tabIndex={0}
                  initial={{ x: 200 }}
                  animate={{
                    x: 0,
                    transition: { duration: 0.2, delay: index * 0.1 },
                  }}
                  exit={{
                    x: 200,
                    transition: { duration: 0.2, delay: (4 - index) * 0.1 },
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Desktop Nav */}
      <motion.div
        className="hidden lg:block text-[18px]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <div className="grid grid-cols-12 gap-[1px] w-full pt-3">
          <div className="col-start-3 col-end-11 grid grid-cols-5 gap-[15px]">
            {navLinks.map(({ id, label }) => (
              <LinkItem
                key={id}
                id={id}
                classList="flex flex-row overflow-hidden h-[28px] w-full col-span-1 justify-center cursor-pointer"
                label={label}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
