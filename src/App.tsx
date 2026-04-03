import React, { useRef } from 'react'

const App = () => {
  const ref = useRef(null)
  // for reference DOM elements -> js wlin element is controlled instead of html
  console.log(ref)
  return (
    <div>
      <input ref={ref} type="test" placeholder='text'/> 
      {/* ref is an obj, current field eke value save krnw */}
      {/* ref for refer DOM elements */}
      {/* ref is an obj, values store key - current */}
      {/* like useState but no component re-renders unlike in useState*/}
      {/* mutable since no re-renders/stores mutable values without component re-renders */}
      <button>Click Me</button>
    </div>
  )
}

export default App