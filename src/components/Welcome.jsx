import { useEffect, useState } from "react";
import { animate, easeInOut, motion, useMotionValue } from "framer-motion";

function Welcome() {
    const index = useMotionValue(0)
    const [greeting, updategreeting] = useState(greetlist[0])
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const control = animate(index, greetlist.length - 1, { 
            duration: 3,
            ease: easeInOut,
            onUpdate: (latest) => {
                updategreeting(greetlist[Math.round(latest)])
            },
            onComplete: () => {
                setFadeOut(true)
            }
        })
        return () => control.stop()
    }, [])
    return (
        <motion.div className="w-screen h-screen absolute z-10 bg-black flex flex-col justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut? [1,1,1,1,1,1,0] : 1, display: fadeOut? ["flex","flex","flex","none"]: "flex", y: fadeOut? [0,0,0,-300]: 0}}
        transition={{ type: "keyframes" , duration: 1}}
        > 
        <motion.div
        animate={{ y: fadeOut? [0,80,-400]: 0}}
        transition={{ type: "keyframes" , duration: .5}}
        className="text-accent-2 text-[7vh]"
        >
            {greeting}
        </motion.div>
        </motion.div>
    );
}

export default Welcome;


const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Nǐ hǎo",
    "Konnichiwa",
    "Marhaba",
    "Namaste",
    "Hoi",
    "Yassas",
    "Cześć",
    "Vitayu",
    "Sawadee",
    "Xin chào",
    "Shalom",
    "Salam",
    "Ahoj",
    "Bonjour"
];
const Welcomes = [
    "Welcome",
    "Bienvenido",
    "Bienvenue",
    "Willkommen",
    "Benvenuto",
    "Bem-vindo",
    "Huanying",
    "Yokoso",
    "Welkom",
    "Witamy",
    "Chao mung",
    "Velkommen",
    "Vitejte",
    "Udvozoljuk",
    "Bienvenue"
];

const greetlist = Math.round(Math.random()) === 1 ? greetings : Welcomes