import { useEffect, useState } from "react"
export const Component3 = () => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [timesLoaded, setTimesLoaded] = useState(0)

  const handleClick = () => {
    setShouldLoad(true)
  }

  useEffect(() => {
    if (!shouldLoad) return
    setTimesLoaded((times) => times + 1)
    setShouldLoad(false)
  }, [shouldLoad])

  console.log("1 render for load number ", timesLoaded)

  return (
    <div className="component3">
      <button onClick={handleClick}>Click here and look at the console</button>
    </div>
  )
}
