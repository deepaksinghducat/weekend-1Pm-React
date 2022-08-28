import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(10);

  const updateCounter = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, [counter]);

  console.log("Parent Component");

  useEffect(() => {
    (async () => {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let result = await response.json();

      console.log(result);
    })();
  });

  return (
    <div>
      <Child counter={counter} updateCounter={updateCounter} />
    </div>
  );
}

export default Parent;
