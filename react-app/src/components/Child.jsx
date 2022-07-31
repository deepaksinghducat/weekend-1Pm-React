import React from 'react'

function Child(props) {
//   const { data } = props;
const data = props.data;

props.addData(10);

console.log(props.data);

return (
    <div>{data[0]}</div>
  )
}

export default Child