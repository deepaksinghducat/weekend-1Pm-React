import React from 'react'

function Button() {
	console.log("button Component");
  return (
	<button>Button</button>
  )
}

export default React.memo(Button)