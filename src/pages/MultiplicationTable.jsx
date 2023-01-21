import { useState } from 'react';
import React from 'react'

export default function MultiplicationTable() {
    const [input, setInput] = useState();

    const multiplicationResult = () =>  {
        if (isNaN(input)) {
            return (<div>The input is not a number</div>);
        }
        else {
            let multInput = input;
            const sequence =[];

          for (let x = 2; x <= 11; x++) {
            sequence.push(multInput);

         multInput = input * x;
          
          }  
          return sequence.map((data) => <div>{data}</div>);
        }
        
    }

    return (
        <div>
            <div>
            <input type="text" placeholder='Input a number' value={input} onChange={(event) => setInput(event.target.value)} />
        </div>
        <div>
            <h1>{multiplicationResult()}</h1>
        </div>
        </div>
        
    )
}
