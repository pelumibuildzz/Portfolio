import { aspiringList, contactInfos, skills } from "./data";
import SkillCard from "./skillcard";
import { motion } from "motion/react";



const HomePage  = () => {
    const skillList = skills
    const aspiring = aspiringList;
    const contactInfoList = contactInfos
    return (
        <main className="">
            <div className="">
                    <div>
                        <motion.div
                        initial={{width: 0}}
                        animate={{width: 50}}
                        transition={{delay: .8, duration: .3}}
                        >
                         Hi,
                        </motion.div>
                     <div className=""/>
                </div>
                <div>
                    <div>
                        <motion.div
                        initial={{width: 0}}
                        animate={{width: 330}}
                        transition={{delay: 1.1, duration: 1}}
                        >
                            I'm <span> Pelumi</span>... a
                        </motion.div>
                        <div className=""/>
                    </div>
                </div>
            </div> 
            <div className="">
                <div className="" >
                    <motion.div
                        initial={{width: 0}}
                        animate={{width: 30}}
                        transition={{delay: 2.0, duration: .2}}
                    >
                        &lt;p&gt;
                    </motion.div>
                    <div className=""/>
                </div>
                <div className="">
                    <motion.div
                        initial={{width: 0}}
                        animate={{width: 440}}
                        transition={{delay: 2.2, duration: .6}}
                    >
                        Nigerian kid engraving his name on the internet
                    </motion.div>
                    <div className=""/>
                </div>
                <div className="">
                    <motion.div
                        initial={{width: 0}}
                        animate={{width: 40}}
                        transition={{delay: 2.8, duration: .2}}
                    >
                        &lt;/p&gt;
                    </motion.div>
                    <div className=""/>
                </div>
            </div>
            <div className="">
                {skillList.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} tools={skill.tools} />
                ))}
            </div>
            <div className="">Aspiring...</div>
            <div className="">
                <div>{aspiring}</div>
            </div>
            <div className="">
                {contactInfoList.map((contact, index) => (
                    <motion.a key={index} href={contact.link} title={contact.title} className=' ' 
                        initial={{ x: -390}}
                        animate={{x: 0, rotate: 720}}
                        transition={{ delay: 1 + (index * 0.4), duration: 1}}
                    >
                        <i className={`${contact.icon} `} />
                    </motion.a>
                ))}
            </div>
        </main>
    )
};

export default HomePage;