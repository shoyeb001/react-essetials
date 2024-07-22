import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0)
    const handelIncrement = ()=>{
        setCount(count+1);
        countRef.current = countRef.current +1;
        console.log("state", count);
        console.log("ref", countRef.current)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handelIncrement}>Increment</button>
        <h1>Use Ref</h1>
    </div>
  )
}

//useRef does not trigger a re render like useState. 

export default UseRefHook