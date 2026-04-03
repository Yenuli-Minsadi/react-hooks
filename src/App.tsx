import React, { useRef } from 'react'

const App = () => {
  const ref = useRef(null)
  // for reference DOM elements -> js wlin element is controlled instead of html
  console.log(ref)
  return (
    <div>
      <input ref={ref} type="test" placeholder='text'/>
      <button>Click Me</button>
    </div>
  )
}

export default App