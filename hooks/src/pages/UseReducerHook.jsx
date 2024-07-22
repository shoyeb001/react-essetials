import React, { useReducer } from 'react'

const reducer = (state, action)=>{
    const {type} = action;
    switch(type){
        case "INCREMENT":
            return {...state, count: state.count+1}
        case "DECREMENT":
            return {...state, count:state.count-1}
        default: 
         return state;
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer,{
        count:0,
        error:null
    })
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default UseReducerHook