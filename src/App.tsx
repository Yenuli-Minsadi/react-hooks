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
    inputHandler(data)
  }, [])
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