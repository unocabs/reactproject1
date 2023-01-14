import React, { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState();

  const getFibonacci = () => {
    if (isNaN(input)) {
      <h1>Please enter a number.</h1>;
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
