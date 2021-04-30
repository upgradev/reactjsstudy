import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>short circuit test</h2>
      {/* <h1> {firstValue} </h1>
      <h1> Value: {secondValue}</h1> */}
      {/* {if(){
        console.log("hello world");
      }} */}

      <h1> {text || "john"} </h1>
      {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>}
    </>
  );
};

export default ShortCircuit;
