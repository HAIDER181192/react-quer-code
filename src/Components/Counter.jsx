import React, { useReducer } from 'react'
const reducer = (state, action)=>{
  switch(action.type){
    case 'increment':
      return state+1
      break
    case 'decrement':
      return state-1
      break
    case 'reset':
      return state = 0
      break
    default:
      return state
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h1>{state === 0? 'Zero' : state}</h1>
      <button onClick={()=>{dispatch({type:'increment', payload:''})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement', payload:''})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset', payload:''})}}>Reset</button>
    </div>
  )
}

export default Counter
