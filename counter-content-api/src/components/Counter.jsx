import React from 'react'
import { useContext } from 'react'
import CounterContext from '../store/store'

const Counter = () => {
  const store = useContext(CounterContext);

  return (
	<div>
		<p>{store.counter}</p>
		<button onClick={(event) => store.incrementCounter()}>Increment</button>
		<button onClick={(event) => store.decrementCounter()}>Decrement</button>
	</div>
  )
}

export default Counter