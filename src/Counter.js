import React, { useState } from 'react';

const Counter = () => {
const [counter, setCounter] = useState(0)

    return ( 
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>
</div>
     );
}
 
export default Counter;