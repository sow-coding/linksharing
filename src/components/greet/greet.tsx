import React, { useState } from 'react'

function Count() {
  const [count, setCount] = useState<number>(0)
  return (
    <div data-testid="counter">
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>Zid</button>
    </div>
  )
}

export default Count