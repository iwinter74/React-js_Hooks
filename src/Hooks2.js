import React, { useState } from 'react';

const Hooks2 = () => {
    const [isShown, setIsShown] = useState(false)
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button onClick={() => setIsShown(true)}>Set me true</button>
            <div>
                <input type="text" name="" id="" value={counter}/>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(0)}>reset</button>
            </div>
        </div>
    );
}

export default Hooks2;