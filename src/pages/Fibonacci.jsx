import React, { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState();

  const getFibonacci = () => {
    if (isNaN(input)) {
      return (<h1>Please enter a number.</h1>);
    } else {
      const sequence = [];
      let firstNumber = 0;
      let secondNumber = 1;

      for (let x = 1; x <= input; x++) {
        sequence.push(firstNumber);

        let nextTerm = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextTerm;
      }

      return sequence.map((data) => <h1>{data}</h1>);
    }
  };

  return (
    <div>
      {" "}
      <div>
        <input
          type="text"
          placeholder="Input a number"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div>{getFibonacci()}</div>
    </div>
  );
}
