import React from "react";
import FlowInText from "./flow-in-text";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
const AboutPage = () => {
  let mainText =
    "I BUILD BEAUTIFUL WEBSITES, SCALABLE APPLICATIONS, AND LASTING TECH SOLUTIONS.";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="AboutSection"
      className="max-w-screen w-screen mt-[4vw] lg:mt-[10vw] md:mt-[1vh] h-fit font-mono grid grid-cols-12 gap-[25px] px-[8vw] overflow-hidden"
    >
      <h1 className="col-span-12 text-[17px] md:text-[28px] lg:text-[40px] text-accent-2 text-center mb-8 lg:mb-18 font-montserrat font-bold">
        ABOUT ME
      </h1>
      <FlowInText text={mainText} />
      <div className="col-span-12 lg:col-span-8 text-[18px] md:text-[24px] lg:text-[30px]">
        <motion.div
          className=""
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25 }}
        >
          I specialize in building modern, scalable web applications and
          engaging digital experiences that bring ideas to life. My passion lies
          in using technology to empower businesses, brands, and projects,
          creating solutions that are not only functional but also impactful.
        </motion.div>
        <motion.div
          className="my-5"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.2 }}
        >
          Beyond my work as a full-stack developer, I have a deep appreciation
          for art, ancient philosophy, and gaming, which often inspire my
          creative approach to problem-solving. When I’m not coding, you’ll
          likely find me leveling up my COD: Warzone weapons or analyzing
          hip-hop lyricism.
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.4 }}
        >
          I'm working on exciting projects that I can't wait to share. But I'm
          always open to new challenges, collaborations, and opportunities to
          create something amazing.
        </motion.div>
      </div>
      <div className="col-span-12 lg:col-span-4 text-[18px] md:text-[24px] font-light lg:text-[30px] ">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.2 }}
        >
          <h1 className="font-bold text-accent-2">Frontend Tools</h1>
          <div className="font-light text-[15px] md:text-[20px] lg:text-[25px]">
            React, Next.js, Vitetest, HTML5, CSS/SCSS, TailwindCSS, Framer,
            Redux Toolkit, Redux.
          </div>
        </motion.div>
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.2 }}
        >
          <h1 className="font-bold text-accent-2">Backend Tools</h1>
          <div className="font-light text-[15px] md:text-[20px] lg:text-[25px]">
            Node.js, Express.js, Nest.js, Python, FastAPI, MongoDB, Mongoose,
            Postgres, Prisma.
          </div>
        </motion.div>
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.2 }}
        >
          <h1 className="font-bold text-accent-2">Interests</h1>
          <div className="font-light text-[15px] md:text-[20px] lg:text-[25px]">
            Programming(Obviously), Sales and Marketing, Ancient Philosophy,
            Gaming, New Tech, Science and Engineering.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
