import { useEffect, useState } from "react"

export const useDebouce = (value, delay=500)=>{
    const [debouceVal, setDebounceVal] = useState("")
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceVal(value)
        },delay)

        return ()=> clearTimeout(timer)
    },[value, delay])

    return debouceVal;
}