import React, { useState } from 'react';
import { Planet } from 'react-kawaii';
import './RandomMood.css'

const RandomMood = () => {
const randomMood = ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]

    const [randomNum, setRandomNum] = useState(3)
    console.log(randomNum)
    console.log(randomMood[randomNum])



    return ( 

        <div className="planet">

            <Planet size={220} mood={randomMood[randomNum]} color="#FCCB7E" />
            <div>
                <button className="random_button" onClick={() => setRandomNum((Math.floor(Math.random() * randomMood.length)))}>Random Mood</button>
            </div>
        </div>
     );
}
 
export default RandomMood;