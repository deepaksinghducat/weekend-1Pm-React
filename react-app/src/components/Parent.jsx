import React, { Fragment } from 'react'
import Child from './Child';

function Parent() {

    const data = [
        10,20,30,40,60
    ];

    const addData = (d) => {
        console.log(d);
    }

  return (
    <Fragment>
        <Child data={data} addData={addData}/>
        <Child data={data} addData={addData}/>
        <Child data={data} addData={addData}/>
        <Child data={data} addData={addData}/>
        <Child data={data} addData={addData}/>
        <Child data={data} addData={addData}/>
    </Fragment>
  )
}

export default Parent