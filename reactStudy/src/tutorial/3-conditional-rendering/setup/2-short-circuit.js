import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setiIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h2>short circuit test</h2>
      {/* <h1> {firstValue} </h1>
      <h1> Value: {secondValue}</h1> */}
      {/* {if(){
        console.log("hello world");
      }} */}

      <h1> {text || "john"} </h1>
      <button className="btn" onClick={() => setiIsError(!isError)}>
        toggle error
      </button>
      {text && <h1>hello world</h1>}
      {isError && <h1>Error..</h1>}
      {isError ? (
        <p>there is an error....</p>
      ) : (
        <div>
          <h2>there is not error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
