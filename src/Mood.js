import React, { useState } from 'react';
import { Cat } from 'react-kawaii';
import './Mood.css'

const Mood = () => {

    const [isExcited, setIsExcited] = useState(true)

const changeMood = () => isExcited? setIsExcited(false) : setIsExcited(true)

    return ( 
        <div className="cat">
            <Cat size={320} mood={isExcited? "excited" : "shocked"} color="#FDA7DC" />
            <div>
                <button className="mood_button" onClick={changeMood}>Change Mood</button>
            </div>
        </div>
     );
}
 
export default Mood;