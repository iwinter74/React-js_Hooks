import React, { useState } from 'react';

const Schalter = () => {
    const [day, setDay] = useState(true)
    
    const mySwitch = () => day? setDay(false) : setDay(true)

    return (
        <div className={day? "day" : "night"}>
            <h1 className={day ? "day" : "night"}>{day ? "Day" : "Night"}</h1>
            <div>
                <button className={day ? "day" : "night"} onClick={mySwitch}>{day ? "Change to night" : "Change to day"}</button>
            </div>
        </div>
      );
}
 
export default Schalter;