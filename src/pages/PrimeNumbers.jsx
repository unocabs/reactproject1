import React, { useState } from "react";

export default function PrimeNumbers() {
  const [input, setInput] = useState();
let primeNum = true
  const primeResult = () => {
    if (isNaN(input)) {
       return (<h1>Input is not a number.</h1>);
    } else if (input <= 0) {
        return (<h1>The number is not a Prime Number</h1>);
    } else if (parseInt(input) === 1) {
        return (<h1>Input is a not prime or composite number.</h1>);
    } else {
        for (let x = 2; x <= input; x++) {
            if (parseInt(input) % x === 0)
          {primeNum = false;
          
          return (<h1>The input is not a prime number</h1>)}
          else {
            return (
            <h1>The input is a prime number</h1>
          );
        }
        } 
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Input a Number"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div>{primeResult()}</div>
    </div>
  );
}
