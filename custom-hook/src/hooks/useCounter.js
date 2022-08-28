import { useState } from "react";

const useCounter = () => {
	const [counter, setCounter] = useState(10);

	const Increment = () => {
	  setCounter((counter) => counter + 1);
	};
  
	const Decrement = () => {
	  setCounter((counter) => counter - 1);
	};

	return [counter, Increment, Decrement]
}

export default useCounter;