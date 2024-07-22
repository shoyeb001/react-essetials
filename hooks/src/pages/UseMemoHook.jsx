import React, { useMemo, useState } from 'react'
const initialItems = new Array(29_999_999).fill(0).map((_,i)=>{
    return {
        id: i,
        isSelected: i===29_999_999
    }
})
const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);
    const selectedItem = useMemo(()=>items.find((item)=>item.selectedItem), [items]) 
  return (
    <div>
        <h1>Count: {count}</h1>
        <h1>SelectedItem:{selectedItem}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemoHook