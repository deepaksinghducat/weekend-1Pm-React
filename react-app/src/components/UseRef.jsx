import React from 'react'
import { useRef } from 'react'

function UseRef() {
  const input = useRef();
  const input1 = useRef();

  const add = (event) => {
    event.preventDefault();

    if(input.current.value.length == 0) {
        input.current.style.borderColor = 'red';
    }

    console.log(input,input1);
  }

  return (
    <div style={{
        textAlign: 'center',
        marginTop: "10px"
    }}>
        <form onSubmit={add}>
            <input ref={input} type="text" />
            <input ref={input1} type="text" />
            <button>Submit</button>
        </form>

        <p>{input.current ? input.current.value : ''}</p>

    </div>
  )
}

export default UseRef