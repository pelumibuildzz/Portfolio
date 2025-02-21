import { useAnimate } from "motion/react"

function SkillCard(props) {
    const [scope, animate] = useAnimate()

    const hover = () => {
        const controls = animate(scope.current, {scale: 1.05})
        controls.time = .8
        return () => controls.stop()
    }

    const leave = () => {
        const controls = animate(scope.current, {scale: 1})
        controls.speed = .3
        return () => controls.stop()
    }

    return (
        <div ref={scope} onMouseOver={hover} onMouseLeave={leave} className="">
            <div>
                {props.name}
            </div>
            <div>
                <span>{props.tools}</span>
            </div>
        </div>
    );
}

export default SkillCard;