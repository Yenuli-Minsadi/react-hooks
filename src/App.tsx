import React, { useMemo, useState } from 'react'

const  inputHandler = (value:any) => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++){
    sum+=1
  }
  return value
}
const App = () => {
 const [data, setData] = useState('')
//  const returnData = inputHandler(data)
// useMemo-> used to memorize values and they are stored in cache
  const returnData: any = useMemo(() => {
    const returnD = inputHandler(data)// dont use listener and the variable given to listener, data is variabe given to listener-> bcoz it cause problems
    return returnD
  }, [data]) // []- dependency array: variable ekaka(array ekaka, ex:data) changes unothreturnData body eka run krnna
  return (
    <div>
      <input 
      type='text'
      placeholder='text'
      value={data}
      onChange={(e) => setData(e.target.value)}/>
      <p>{returnData}</p>
    </div>
  )
}

export default App