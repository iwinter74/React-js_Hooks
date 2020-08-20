import React, { useState } from 'react';

const Hooks = () => {
    const [yahya, setYahya] = useState({ first: "Hallo", second: "bye" })
    const [yahya2, setYahya2] = useState(44)
    const newYahya = () => {
        setYahya2(yahya2 + 10)
        
    }
    return (
        <div>
           {/* {yahya} */}
            <button onClick={() => setYahya2(yahya2 + 1)}>Yahya wird älter</button>
            <button onClick={newYahya}>+10</button>
            {yahya2}
        </div>
    );
}

export default Hooks;