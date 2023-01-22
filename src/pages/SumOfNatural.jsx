import React, { useState } from 'react'

export default function SumOfNatural() {
    const [input, setInput] = useState(0);
    const sumofNatural = () => {
        if (isNaN(input)) {
            return (<div>The input is not a number</div>);
        } 
        else {
            // let naturalNum = 0;
            // const sequence = [];
            // let sum = 0;

            // for (let x = 1; x <= input; x++) {
            //     naturalNum = x;
            //     sequence.push(naturalNum);
            // }

            let naturalNum = 0; 
            
            
        }
    };

    return (
        <div>
            <div>
                <input type="text" 
                placeholder='Input a number' 
                value={input} 
                onChange={(event) => setInput(event.target.value)} />
            </div>
            <div>
            <h1>{sumofNatural()}</h1>
            </div>
        </div>
    )
}
