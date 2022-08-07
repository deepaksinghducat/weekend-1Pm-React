import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { InputReduce } from './InputRe';

function UseReducer() {
   const [input,setInput] = useState('');

   const [inputRe,dispatchRe] = useReducer(InputReduce,{
    input : ''
   })

   useEffect(() => {
        console.log(inputRe);
   },[inputRe])

   const add = (event) => {
        event.preventDefault();

        dispatchRe({type: 'add', data: input})
    }

   return (
    <div style={{
        textAlign: 'center',
        marginTop: "10px"
    }}>
        <form onSubmit={add}>
            <input type="text" value={input} onChange={(event) => {
                setInput(event.target.value);
            }} />

            <button type="submit">Click Me</button>
        </form>       

        <p>{inputRe.input}</p>
    </div>
  )
}

export default UseReducer