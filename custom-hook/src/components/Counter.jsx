import React from "react";
import { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
	
  const[counter,Increment,Decrement] = useCounter();

  return (
    <div>
      <p>{counter}</p>	
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
