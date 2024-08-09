import { useState } from "react"

export const Component5 = () => {
  const [log, setLog] = useState([])

  const handleLoad = () => {
    setLog([...log, "procedure started"])
    setTimeout(() => {
      setLog([...log, "procedure ended"])
    }, 1000)
  }

  return (
    <div className="component5">
      <button onClick={handleLoad}>Load procedure</button>
      {log.map((_entry, i) => {
        return <p key={i}>{_entry}</p>
      })}
    </div>
  )
}
