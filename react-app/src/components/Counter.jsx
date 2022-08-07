import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Counter() {

  const [counter,setCounter] =  useState(0);

  useEffect(() => {
     const interval = setInterval(() => setCounter((counter) => counter +1), 1000);
     
     console.log(counter);

     return () => clearInterval(interval);
  },[counter]);


  return (
    <div style={{
        textAlign: 'center',
        fontSize: '100px'
    }}>{counter}</div>
  )
}

export default Counter