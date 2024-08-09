import { useState } from "react"

export const Component1 = () => {
  const [count, setCount] = useState(0)

  const SubComponent = () => {
    const [counter, setCounter] = useState(0)
    return (
      <div className="component1b">
        <p>Inner component counter marks {counter}</p>
        <button onClick={() => setCounter((count) => count + 1)}>Count</button>
      </div>
    )
  }

  return (
    <div className="component1">
      <p>Outer component counter marks {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
      <SubComponent />
    </div>
  )
}
