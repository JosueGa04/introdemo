import { useState } from "react";

const Complex = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        const newLeft = left + 1
        setLeft(newLeft)
        setTotal(newLeft + right)
        
    }
    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        const newRight = right + 1
        setRight(newRight)
        setTotal(left + newRight)
    }

    const History = () => {
        if (allClicks.length === 0) {
            return (
                <div>
                    the app is used by pressing the buttons
                </div>
            )
        }
        return (
            <div>
                you have clicked the buttons {allClicks.join(' ')}
            </div>
        )
    }

    const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>
    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text="left" />
            <Button onClick={handleRightClick} text="right" />
            {right}
            <p>Button clicks: {allClicks.join(' ')}</p>
            <History />
        </div>

    )
}

export default Complex;