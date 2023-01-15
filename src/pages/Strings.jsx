import React, { useState } from "react";

export default function Strings() {
  const [input, setInput] = useState("");

  const reversedResult = () => {

    let splitArray = input.split("");
    let reverseArray = splitArray.reverse();
    let joinArray = reverseArray.join("");
    let splitWords = joinArray.split(" ");
    let reverseWords = splitWords.reverse();
    let joinWords = reverseWords.join(" ");

    return <h1>{joinWords}</h1>
    // let sequence = [];
    // let wordArray = input.split(" ");
    // let numberOfWords = wordArray.length;
    // for (let x = 0; x <= (numberOfWords - 1); x++) {
    //     let theWord = wordArray[x];
    //     let splitWord = theWord.split("");
    //     let reverseWord = splitWord.reverse();
    //     let joinWord = reverseWord.join("");
    // sequence.push(joinWord);
    // }
    // return sequence.map((data) => (
    //     <h1>{data}</h1>));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Input words"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div>{reversedResult()}</div>
    </div>
  );
}
