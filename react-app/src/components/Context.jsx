import React from 'react'
import { useContext } from 'react'
import GlobalStore from '../store/ContextApi'
import Child from './Child'

function Context() {

    const ctx = useContext(GlobalStore)

    console.log(ctx);
    //   return (
    //     <GlobalStore.Consumer>
    //         {(ctx) => (
    //             <div style={{
    //                 textAlign: 'center',
    //             }}>{ctx.name}</div>
    //         )}
    //     </GlobalStore.Consumer>
    //   )

    return (
        <div style={{
            textAlign: 'center',
        }}><Child /></div>
    )
}

export default Context