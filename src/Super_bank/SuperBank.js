import React, { useState, useEffect } from 'react';
import { CreditCard } from 'react-kawaii';
import './SuperBank.css'

const SuperBank = () => {
    const [balance, setBalance] = useState(0)
    const [input, setInput] = useState("")
    const [mood, setMood] = useState("happy")
    const getInput = (e) => setInput(e.target.value)
    const handleIn = () => {
        setBalance(balance + Number(input))

    }

    const handleOut = () => {
        setBalance(balance - input)

    }
    useEffect(() => {
        if (balance >= 0 && balance < 1000) {
            setMood("happy")
        } else if (balance >= 1000 && balance < 2000) {
            setMood("excited")

        } else if (balance >= 2000) {
            setMood("blissful")
        } else if (balance < 0 && balance > -500) {
            setMood("sad")
        } else { setMood("shocked") }
    }, [balance])
    return (

        <div className="credit_card">

            <CreditCard size={200} mood={mood} color="#83D1FB" />
            <div>
                <h1 className="heading">Super Bank</h1>
                <div className="bank_container">
                    <h2>Dein Girokonto</h2>
                    <p>{balance}</p>
                    <input type="text" name="" id="" value={input} onChange={getInput} />
                    <div>
                        <button className="bank_button" onClick={handleIn}>Einzahlen</button>
                        <button className="bank_button" onClick={handleOut}>Auszahlen</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuperBank;