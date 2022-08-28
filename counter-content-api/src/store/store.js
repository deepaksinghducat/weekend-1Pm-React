import React, { useReducer, useState } from 'react';
import { CounterReducer } from '../reducers/CounterReducer';

const initialValue = {
	counter: 0,
	incrementCounter: () => {},
	decrementCounter: () => {}
}

const CounterContext = React.createContext(initialValue);

export const CounterContextProvider = (props) => {

	// const [counter,setCounter] = useState(10);

	const [counterReducerStateValue,dispatchCounterReducer] = useReducer(CounterReducer,initialValue)

	const incrementCounter = () => {
		// setCounter(counter => counter + 1);

		dispatchCounterReducer({type: 'increment'})
	}

	const decrementCounter = () => {
		// setCounter(counter => counter - 1);

		dispatchCounterReducer({type: 'decrement'})
	}

	return (
		<CounterContext.Provider value={{
			...initialValue,
			counter: counterReducerStateValue.counter,
			incrementCounter,
			decrementCounter
		}}>
			{props.children}
		</CounterContext.Provider>
	)
}

export default CounterContext;