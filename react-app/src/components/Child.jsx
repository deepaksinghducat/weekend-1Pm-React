import React from 'react'
import { useContext } from 'react'
import GlobalStore from '../store/ContextApi'

function Child() {
  const ctx = useContext(GlobalStore);

  return (
    <div>{ctx.name}</div>
  )
}

export default Child