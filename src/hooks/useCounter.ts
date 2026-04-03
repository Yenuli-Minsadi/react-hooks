//useCounter hook

import { useState } from "react"
//custom hooks must be used inside functional components,
// useCounter(1) - start with 1
// useCounter() - start with 0
const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount((countData) => countData + 1)//callback meth eke data type eka count eke data type ekath ekka eql
    const decrement = () => setCount((countData) => countData - 1)
    const reset = () => setCount(initialValue)
    return { count, increment, decrement, reset }
}

export default useCounter