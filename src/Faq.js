import React, { useState } from 'react';


const Faq = () => {
    const [isHidden, setIsHidden] = useState(true)

    const handleAnswer = () => isHidden? setIsHidden(false) : setIsHidden(true)

    

    return (  
        <div>
            <h1>Why is react great?</h1><span onClick={handleAnswer}>{isHidden ?  "+" :  "-"}</span>
            <h2 className={isHidden?"hidden" :"shown"}>Fast Learning curve</h2>
</div>

    );
}
 
export default Faq;