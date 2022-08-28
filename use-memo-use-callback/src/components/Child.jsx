import React from 'react'
import Button from './Button';

function Child(props) {
	console.log("child component");
  return (
	<div>{props.counter}
	     <button onClick={props.updateCounter}>Update Counter</button>
		<Button/>
	</div>
  )
}

export default Child